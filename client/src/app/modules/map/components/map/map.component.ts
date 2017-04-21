import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  ViewChildren, 
  QueryList, 
  NgZone, 
  forwardRef,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MdSidenav, MdDialog } from '@angular/material';
import * as ol from 'openlayers';
import { ProjectionService, Profile3DService, UserMapsService, ExportMapService } from '../../services';
import { routerTransition } from '../../../../router.transitions';
import { ProfileComponent, LayerSwitcherComponent, AddWmsComponent, SearchComponent, MeasureComponent } from '../';
import { LoadingAnimateService } from 'ng2-loading-animate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ProjectionService, Profile3DService, UserMapsService, ExportMapService],
  animations: [
    routerTransition(),
    trigger('collapsed', [
      state('invisible', style({
        transform : 'translateX(-100%)',
        opacity : 0,
        display : 'none'
      })),
      state('visible', style({
        transform : 'translateX(0%)',
        opacity : 1,
        display : ''
      })),
      transition('invisible => visible', animate('500ms ease-in')),
      transition('visible => invisible', animate('500ms ease-out'))
    ])
  ],
  host : { '[@routerTransition]': '' }
})
export class MapComponent implements OnInit {
  
  DEVELOPMENT_GEOSERVER_URL = 'http://localhost:8080/geoserver/betera-workspace/wms';
  mapProperties : any;
  map : ol.Map;
  overviewCtrl : ol.Map;
  sideNavMapInterval : any;
  customComponentsWithInteractions : Component[] = [];
  accesibleMaps = [];
  actualMap = -1;
  
  mapsControlVisible = 'invisible';
  toolsControlVisible = 'invisible';
  overviewControlVisible = 'visible';

  @ViewChild(forwardRef(() => MeasureComponent)) measureControl : MeasureComponent;
  @ViewChild(forwardRef(() => SearchComponent)) searchControl : SearchComponent;
  @ViewChild(forwardRef(() => ProfileComponent)) profileControl : ProfileComponent;
  @ViewChild(forwardRef(() => LayerSwitcherComponent)) layerSwitcherControl : LayerSwitcherComponent;
  @ViewChild('overviewMap') overviewMapEl : ElementRef;
  @ViewChildren('mapTools') toolsContainer : QueryList<ElementRef>;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
    private zone : NgZone,
    private dialog : MdDialog,
    private el : ElementRef,
    private route : ActivatedRoute,
    private router : Router,
    private location : Location,
    private loading : LoadingAnimateService,
    private userMapsService : UserMapsService,
    private projService : ProjectionService, 
    private profileService : Profile3DService,
    private exportMapService : ExportMapService
  ) {}

  ngOnInit(){
    this.sidenav.onOpenStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
    this.sidenav.onCloseStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
    this.sidenav.onOpen.subscribe(this.clearIntervalUpdateMapSize.bind(this));
    this.sidenav.onClose.subscribe(this.clearIntervalUpdateMapSize.bind(this));
    this.createMap();
    this.route.params.subscribe(()=>this.addUserMaps());
    //this.map.getLayers().on('change:length', ()=>{ this.updateMapAndOverview() });
    this.customComponentsWithInteractions = [
      this.searchControl, this.profileControl, this.measureControl
    ];
  }

  exportMap(event){
    this.exportMapService.exportMap(this.map, {}, event);
  }

  ngAfterViewInit() {
    //console.log(this.el.nativeElement.parentNode);
    this.el.nativeElement.parentNode.parentNode.childNodes[0].style.position = 'relative';
    setTimeout(function () { window.scrollTo(0, 1); }, 1000);
    document.body.style.overflow = 'hidden';
    /*let toolbar = <HTMLElement>document.querySelector('md-toolbar');
    toolbar.style.boxShadow = '0 4px 6px 0 rgba(0,0,0,.3);';*/
    //this.createMap();
  }

  onChangeMap(){
    this.router.navigate(['/map', this.actualMap]);
  }

  getBackgroundColor(bool : Boolean){
    return bool ? '#8BC34A' : '#f7f7f7';
  }

  disableControls(){
    this.customComponentsWithInteractions.forEach( (control : any )=>{
      control.setActive(false);
    });
  }

  setIntervalUpdateMapSize(){
    clearInterval(this.sideNavMapInterval);
    this.sideNavMapInterval = setInterval( () => this.map.updateSize(), 20 );
  }

  clearIntervalUpdateMapSize(){
    if(!this.overviewCtrl){
      this.createOverviewMap();
    } else {
      this.overviewCtrl.getView().setProperties(this.map.getView().getProperties());
    }
    this.map.updateSize();
    clearInterval(this.sideNavMapInterval);
  }

  updateMapAndOverview(){
    this.map.getLayers().getArray().forEach(l => l.changed() );
    this.map.render();
    this.map.once('postcompose', ()=>{
      if(this.overviewCtrl){
        this.overviewCtrl.getLayers().clear();
        this.overviewCtrl.getLayers().extend(this.map.getLayers().getArray());
      }
    })
  }

  toggleMaps(){
    //this.layerSwitcherControl.toggleMaps.call(this.layerSwitcherControl);
    this.mapsControlVisible = (this.mapsControlVisible === 'visible') ? 'invisible' : 'visible';
  }

  toggleTools(){
    /*this.toolsContainer.forEach(element =>{
      element.nativeElement.classList.toggle('collapsed');
    });*/
    this.toolsControlVisible = (this.toolsControlVisible === 'visible') ? 'invisible' : 'visible';
  }

  toggleOverview(){
    this.overviewControlVisible = (this.overviewControlVisible === 'visible') ? 'invisible' : 'visible';
  }

  createMap(){
    this.mapProperties = {
      target : 'map',
      controls : ol.control.defaults().extend([
        new ol.control.FullScreen({
          source: 'app-body'
        })
      ]),
      view : new ol.View({
        projection : 'EPSG:4326',
        center : [-0.459108, 39.589353],
        zoom : 12,
        maxZoom : 20
      })
    }

    this.map = new ol.Map(this.mapProperties);
    this.projService.setProjection(this.map, '25830');
    let view : any = this.map.getView();
    this.map.once('postcompose', ()=> 
      view.fit(ol.proj.transformExtent( [-0.4958, 39.563, -0.44153, 39.633], 'EPSG:4326', this.map.getView().getProjection()) ) );
    //this.addDummyLayers(this.map);
    //this.addUserMaps();
  }

  createOverviewMap(){
    let overviewMapProperties = {
      target : this.overviewMapEl.nativeElement,
      view : new ol.View({
        projection : 'EPSG:4326',
        center : [-0.459108, 39.589353],
        zoom : 12
      })
    }
    
    this.overviewCtrl = new ol.Map(overviewMapProperties);
    this.overviewCtrl.getControls().forEach( c => this.overviewCtrl.removeControl(c) );
    this.projService.setProjection(this.overviewCtrl, '25830');
    this.overviewCtrl.getView().on('change', ()=>{
      this.map.getView().setProperties(this.overviewCtrl.getView().getProperties());
      this.overviewCtrl.updateSize()
    });
    //window.on('resize', ()=>this.overviewCtrl.updateSize());
    this.overviewCtrl.getLayers().clear();
    this.overviewCtrl.getLayers().extend([...this.map.getLayers().getArray()]);
  }

  addUserMaps(){
    this.disableControls();
    this.map.getLayers().clear();
    this.loading.setValue(true);

    let params : any = this.route.snapshot.params;
    let idMap = params.id;

    let visibleMap = false;

    this.userMapsService.getUserMaps()
    .subscribe( mapas =>{
      this.loading.setValue(false);

      if(!idMap){
        if(!mapas[0]) return;
        let firstMap = mapas[0].id;
        this.router.navigateByUrl(`/map/${firstMap}`);
        return;
      }

      this.accesibleMaps = mapas;
      this.actualMap = mapas.find( m => m.id == idMap ).id;
      this.location.replaceState(`/map/${this.actualMap}/${mapas.find( m => m.id == this.actualMap ).name}`)
      // Obtenemos una lista de mapas con las capas ya ordenadas
      // y la recorremos 
      mapas.forEach( (mapa, index, arr) => {
        if(mapa.id != idMap) return;
        //console.log('mapa', mapa);
        // Creamos un grupo de capas vacío
        let groupCapasMap = new ol.layer.Group();
        // Le damos un nombre
        groupCapasMap.set('name', mapa.name);
        groupCapasMap.set('collapsed', 'invisible');
        // Lo añadimos al mapa
        this.map.addLayer(groupCapasMap);

        mapa.capas.forEach( capa =>{
          //console.log('capaa', capa);
          if(capa.type == 'base') 
            this.addBaseLayerToGroup(capa, groupCapasMap);
          else if(capa.type == 'layer') 
            this.addLayerToGroup(capa, groupCapasMap);
        });

      });
      if(this.overviewCtrl){
        this.overviewCtrl.getLayers().clear();
        this.overviewCtrl.getLayers().extend([...this.map.getLayers().getArray()]);
      }
    });
  }

  getTile(opts : any){
      let tile = new ol.layer.Tile({
          visible : true,
          source : new ol.source.TileWMS({
              url : opts.service_url,
              gutter : opts.gutter <= 0 ? 0 : 250,
              projection : opts.projection || 'EPSG:25830',
              //crossOrigin: opts.crossOrigin || 'anonymous', // Configurar Geoserver para orígenes remotos primero
              //crossOrigin : 'anonymous',
              params: {
                  'FORMAT': 'image/png', 
                  'TRANSPARENT' : true,
                  'TILED' : true, 
                  'LAYERS': opts.layers,
                  'STYLES': ''
              }
          })
      });

      tile.set('name', opts.name);
      tile.set('type', opts.type);
      return tile;
  }

  addBaseLayerToGroup(params : any, group : ol.layer.Group){
    let tile = this.getTile({
        name : params.name,
        service_url : params.service_url,
        type : 'base',
        layers : params.layers,
        gutter : 250,
        wms_externo : true,
        crossOrigin : '', 
    });
    tile.set('wms_externo', true);
    group.getLayers().extend([tile]);
  }

  addLayerToGroup(params : any, group : ol.layer.Group){
    let tile = this.getTile({ 
      service_url : this.DEVELOPMENT_GEOSERVER_URL, 
      layers : params.name, 
      name : params.name,
      type : 'layer',
      crossOrigin : ''
    });
    group.getLayers().extend([tile]);
  }

  openWMSDialog(){
    let dialog = this.dialog.open(AddWmsComponent);
    dialog.afterClosed().subscribe(
      (wmsGroup)=>{
        if(!wmsGroup) return;
        let group = new ol.layer.Group();
        let idx = this.map.getLayers().getArray().findIndex( l => l.get('showInLayerSwitcher') === false );
            idx = ( idx === -1 ? this.map.getLayers().getArray().length : idx );
        console.log(idx);
        group.set('name', wmsGroup.serviceURL);
        group.set('removable', true)
        let layers = wmsGroup.layers
          .map( l => this.getTile({ service_url : wmsGroup.serviceURL,  layers : l.Name, name : l.Name }) );
        group.getLayers().extend(layers);
        this.map.getLayers().insertAt(idx, group);
      }
    );
  }

  toggleMeasureControl(interaction?){
    if(interaction && this.measureControl.activeInteraction != interaction){
      this.disableControls();
      this.measureControl.setActive(true, interaction);
      this.sidenav.close();
      return;
    }
    if(!this.measureControl.active) {
      this.disableControls();
      this.measureControl.setActive(true, interaction);
    }
    else {
      this.disableControls();
      this.measureControl.setActive(false);
    }
    this.sidenav.close();
  }

  toggleSearchControl(interaction?){
    if(interaction && this.searchControl.activeInteraction != interaction){
      this.disableControls();
      this.searchControl.setActive(true, interaction);
      this.sidenav.close();
      return;
    }
    if(!this.searchControl.active) {
      this.disableControls();
      this.searchControl.setActive(true, interaction);
    }
    else {
      this.disableControls();
      this.searchControl.setActive(false);
    }
    this.sidenav.close();
  }

  toggleProfileControl(){
    if(!this.profileControl.active) {
      this.disableControls();
      this.profileControl.setActive(true);
    }
    else {
      this.disableControls();
      this.profileControl.setActive(false);
    }
    this.sidenav.close();
  }

}
