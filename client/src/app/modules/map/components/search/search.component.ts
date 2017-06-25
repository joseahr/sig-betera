import {
  Component, 
  OnInit, 
  Input, 
  NgZone, 
  ViewChild,
  ElementRef,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/core';

import {
  Feature, 
  Map, 
  interaction, 
  MapBrowserPointerEvent, 
  geom, 
  layer, 
  source, 
  format, 
  extent, 
  Observable as olObs
} from 'openlayers';
import { Subject } from 'rxjs/Rx';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { KeysPipe } from 'angular-pipes/src/object/keys.pipe';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { DataTableDirective } from 'angular-datatables';
import { UserLayersService } from '../../services';
declare const $;

const basenameFn = path => path.split(/[\\/]/).pop();

enum SearchInteraction {
  Point = 1, Box
}

@Component({
  selector: 'app-search',
  template : `
    <button [@buttonVisible]="state" (click)="openDialog()" md-mini-fab style="z-index : 1002; position : absolute; bottom: 0.5em; left : 0.5em;"><md-icon>search</md-icon></button>
    <button [@buttonCloseVisible]="closeState" (click)="close()"      md-mini-fab style="z-index : 1002; position : absolute; top : 0.5em; right : 0.5em;"><md-icon>close</md-icon></button>
  `,
  providers : [ UserLayersService, KeysPipe ],
  animations : [
    trigger('buttonVisible', [
      state('invisible', style({
        display : 'none',
        left : 'calc(100% - 0.5em - 40px)',
        bottom : 'calc(100% - 0.5em - 40px)'
      })),
      state('visible', style({
        display : '',
        left : '0.5em',
        bottom : '0.5em'
      })),
      transition('invisible => visible', animate('200ms ease-in')),
      transition('visible => invisible', animate('0ms ease-out'))
    ]),
    trigger('buttonCloseVisible', [
      state('invisible', style({
        display : 'none',
        right : 'calc(100% - 0.5em - 40px)',
        top : 'calc(100% - 0.5em - 40px)'
      })),
      state('visible', style({
        display : '',
        right : '0.5em',
        top : '0.5em'
      })),
      transition('invisible => visible', animate('200ms ease-in')),
      transition('visible => invisible', animate('0ms ease-out'))
    ])
  ]
})
export class SearchComponent implements OnInit {
  
  state  = 'invisible';
  closeState = 'invisible';
  private found : any;
  active : Boolean = false;
  activeInteraction : SearchInteraction = null;
  //dialogCollapsed : Boolean = false;
  dialogRef : MdDialogRef<SearchComponentDialog>;
  private boxInteraction : interaction.DragBox = new interaction.DragBox();
  private clickInteraction : ol.Object | ol.Object[];
  private geojsonParser : format.GeoJSON = new format.GeoJSON();
  private searchLayer = new layer.Vector({
    source : new source.Vector()
  });
  private selectedTabIndex = 0;

  @Input('map') map : Map;

  constructor(
    private snackbar : MdSnackBar,
    private dialog : MdDialog,
    private zone : NgZone,
    private userLayerService : UserLayersService,
    private loading : LoadingAnimateService
  ) {
    this.boxInteraction.on('boxend', this.boxHandler.bind(this));
    this.searchLayer.set('name', 'SearchLayer');
    this.searchLayer.set('showInLayerSwitcher', false);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //this.map.addLayer(this.searchLayer);
  }

  clickHandler(e : MapBrowserPointerEvent){
    let point = new geom.Point(e.coordinate);
    let feature = new Feature(point);
    this.search(feature);
  }

  boxHandler(){
    let box = this.boxInteraction.getGeometry();
    let feature = new Feature(box);
    this.search(feature);
  }

  openDialog(newSearch? : boolean){
    if(!this.found) return;
    this.state = 'invisible';
    this.closeState = 'visible';
    //this.dialogCollapsed = false;
    let dialogRef = this.dialogRef = this.dialog.open(SearchComponentDialog);

    dialogRef.componentInstance.found = this.found;
    dialogRef.componentInstance.tabIndex = newSearch ? 0 : this.selectedTabIndex;

    dialogRef.afterClosed().subscribe(()=>{
      //this.dialogCollapsed = true;
      this.selectedTabIndex = dialogRef.componentInstance.tabIndex;
      this.closeState = 'invisible';
      this.state = 'visible';
    });
    
    dialogRef.componentInstance.rowClicked.subscribe(
      (data)=>{
        if(!data) return;
        console.log('rowClicked -- ', data);
        let feature : any = this.geojsonParser.readFeature(data, {
          dataProjection : this.map.getView().getProjection(),
          featureProjection : this.map.getView().getProjection()
        });

        this.searchLayer.getSource().clear();
        this.searchLayer.getSource().addFeature(feature);
        this.searchLayer.getSource().changed();
        this.dialogRef.close();
        let view : any = this.map.getView();
        console.log(feature.getGeometry(), 'geom')
        view.fit( feature.getGeometry(), {
          duration : 1000,
          maxZoom : 15
        });
      }
    );

  }

  search(feature : Feature){
    //this.addLayer();
    this.zone.run(()=>{ this.loading.setValue(true); this.dialog.closeAll(); });
    let layerNames = this.getActiveLayers();
    //console.log('layerNAmes', layerNames)
    this.userLayerService.getFeatures(feature, layerNames).subscribe(
      (data)=>{
        this.zone.run(()=>{
          this.selectedTabIndex = 0;
          this.loading.setValue(false);
          let features = data
            .filter( f => f.found.features );
          features
            .forEach( d => d.found.features.forEach( (f : any) => f.properties.data_urls = (f.properties.data_urls || []).map(du => du.url) ) );
          //features.forEach(f => console.log(f.layername))
          if(!features.length){ 
            this.snackbar.open('No se encontraron features', null, { duration : 2000 });
            return setTimeout( ()=>{
                let msg = this.activeInteraction == SearchInteraction.Point ? 'Haz click' : 'Dibuja un recuadro';
                this.snackbar.open(`${msg} para realizar la búsqueda`, 'CERRAR');
            }, 2000);
          }
          this.found = features;
          this.map.render();
          //console.log(features, 'featurrees');
          this.openDialog(true);
        });
      }, 
      (err)=>{
        this.zone.run(()=>{ this.loading.setValue(false); });
      }
    )
  }

  getActiveLayers(){
    let layerNames = [];
    this.map.getLayers().forEach( l => {
      if(!l.get('layers') || !l.get('visible')) return;
      l.get('layers').forEach(al => {
        //console.log('layer', al.get('type'), al.get('visible'), al.getVisible())
        if(al.get('visible') && al.get('type') == 'layer'){
          layerNames.push(al.get('name'));
        }
      });
    });
    return layerNames;
  }

  setActive(value : Boolean, interaction? : SearchInteraction){
    if(!value){
      this.active = false;
      this.found = null;
      this.selectedTabIndex = 0;
      this.activeInteraction = null;
      this.map.removeInteraction(this.boxInteraction);
      olObs.unByKey(this.clickInteraction);
      this.searchLayer.getSource().clear();
      //this.dialogCollapsed = false;
      this.snackbar._openedSnackBarRef ? this.snackbar._openedSnackBarRef.dismiss() : '';
      //this.map.removeLayer(this.searchLayer);
      this.searchLayer.setMap(null);

      this.state = 'invisible';
      this.closeState = 'invisible';
    } else {
      if(!interaction) return;
      this.active = true;
      this.setInteraction(interaction);
      this.addLayer();
    }
  }

  addLayer(){
    this.searchLayer.setMap(this.map);
  }

  setInteraction(interaction : SearchInteraction){
    let msg = interaction == SearchInteraction.Point ? 'Haz click' : 'Dibuja un recuadro';
    this.snackbar.open(`${msg} para realizar la búsqueda`, 'CERRAR');
    //console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
    if(interaction == this.activeInteraction) return;

    if(interaction == SearchInteraction.Point){
      this.map.removeInteraction(this.boxInteraction);
      this.clickInteraction = this.map.on('singleclick', this.clickHandler.bind(this));
      this.activeInteraction = SearchInteraction.Point;
    } else {
      olObs.unByKey(this.clickInteraction);
      this.map.addInteraction(this.boxInteraction);
      this.activeInteraction = SearchInteraction.Box;
    }
  }

}


@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponentDialog {

  found;
  selectedTabData;
  tabIndex : number;
  rowClicked : Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective) dtElement : DataTableDirective;
  @ViewChild('table') table : ElementRef;

  constructor(private zone : NgZone, private dialog : MdDialogRef<SearchComponentDialog>){}

  ngOnInit(){
    //console.log('oninit');
    this.dtElement.dtOptions = this.getTableOptions(this.tabIndex);
    let subject : any = new Subject<any>();
    this.dtElement.dtTrigger = subject;
  }
  

  ngAfterViewInit(){
    //console.log('AfterViewInit');
    this.dtElement.dtTrigger.next();
    this.addRowClickListener();
  }

  addRowClickListener(){
    this.dtElement.dtInstance.then( (dtInstance : any) =>{
      let table = this.table.nativeElement;
      let tabIndex = this.tabIndex;
      let data = this.found[tabIndex];
      let rowClicked = this.rowClicked;
      dtInstance
      .on('click', '.see-map', function(){
        try {
          let row_dom = $(this).closest('tr');
          //console.log('row_dom', row_dom);
          //if(!row_dom) return;
          let row = $(table).DataTable().row(row_dom).data();
          //console.log('row', row);
          let feature = data.found.features.find( f => f.properties.gid == row.gid );
          rowClicked.next(feature);
        } catch(e){
          console.log(e);
        }
      })
    });
  }

  close(){
    this.dialog.close();
  }

  onChangeTab(event){
    this.tabIndex = event.index;
    //console.log(event);
    //this.dtOptions = this.getTableOptions(event.index);
    this.dtElement.dtInstance.then( dtInstance =>{
      dtInstance.destroy();
      $(this.table.nativeElement).empty();
      this.dtElement.dtOptions = this.getTableOptions(event.index);
      this.dtElement.dtTrigger.next();
      this.addRowClickListener();
    });

  }

  getTableOptions(index){
    let features = this.found[index].found.features;
    let data = features.map( feature => feature.properties || {} );
    let columns = [
      { title : 'Ver en Mapa', defaultContent : `
        <button md-button class="mat-button see-map">
          <md-icon style="color : #ffbb00" class="material-icons mat-icon">map</md-icon>
        </button>
      ` },
      ...Object.keys(features[0].properties).map( key => ({ title : key, data : key }) )
    ];
    //console.log('FEATURES - ', features, 'DATA - ', data, 'COLUMNS - ', columns);
    let renderData = ( data, type, row ) => {
      if(!data) return '';
      let _data = data;
      if(!Array.isArray(data)) _data = [data];
      return _data.map((url : string) =>{
        if(url.match(/\.jpg|\.jpeg|\.png|\.bmp|\.ico|\.gif|\.svg/))
          return `<img src="${url}" style="max-width : 50px; max-height : 50px;margin-left : 5px;" >`;
        return `<a target="_blank" download="${basenameFn(url)}" href="${url}" style="margin-left : 5px;">${basenameFn(url)}</a><br>`;
      }).join('');   
    };
    let indexData = Object.keys(features[0].properties).indexOf('data_urls');

    return <any>{
      scrollX : true,
      scrollY : false,
      scrollCollapse : true,
      data, columns,
      columnDefs : [
        { render : renderData, targets : -1 }
      ],
      dom : 'frtlip',
      language : {
        "lengthMenu":     "_MENU_",
        "search":         "",
        "searchPlaceholder": "Search...",
      }
    };
  }

}