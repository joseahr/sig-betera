import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone, forwardRef } from '@angular/core';
import { MdSidenav, MdDialog } from '@angular/material';
import { ProjectionService, Profile3DService, UserMapsService } from '../../services';
import { routerTransition } from '../../../../router.transitions';
import { ProfileComponent, LayerSwitcherComponent, AddWmsComponent } from '../';
import * as ol from 'openlayers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ProjectionService, Profile3DService, UserMapsService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class MapComponent implements OnInit {
  
  mapProperties : any;
  map : ol.Map;
  overviewCtrl : ol.Map;
  sideNavMapInterval : any;
  
  @ViewChild(forwardRef(() => ProfileComponent)) profileControl : ProfileComponent;
  @ViewChild(forwardRef(() => LayerSwitcherComponent)) layerSwitcherControl : LayerSwitcherComponent;
  @ViewChild('overviewMap') overviewMapEl : ElementRef;
  @ViewChild('mapTools') toolsContainer : ElementRef;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
    private zone : NgZone,
    private dialog : MdDialog,
    private el : ElementRef,
    private userMapsService : UserMapsService,
    private projService : ProjectionService, 
    private profileService : Profile3DService,
  ) {
  }

  ngOnInit(){
    this.sidenav.onOpenStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
    this.sidenav.onCloseStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
    this.sidenav.onOpen.subscribe(this.clearIntervalUpdateMapSize.bind(this));
    this.sidenav.onClose.subscribe(this.clearIntervalUpdateMapSize.bind(this));
    this.zone.runOutsideAngular(this.createMap.bind(this));
    //this.map.getLayers().on('change:length', ()=>{ this.updateMapAndOverview() });
  }

  ngAfterViewInit() {
    console.log(this.el.nativeElement.parentNode);
    this.el.nativeElement.parentNode.parentNode.childNodes[0].style.position = 'relative';
    setTimeout(function () { window.scrollTo(0, 1); }, 1000);
    document.body.style.overflow = 'hidden';
    //this.createMap();
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
    this.layerSwitcherControl.toggleMaps.call(this.layerSwitcherControl);
  }

  toggleTools(){
    this.toolsContainer.nativeElement.classList.toggle('collapsed');
  }

  toggleProfileControl(){
    if(!this.profileControl.active) {
      this.profileControl.enableDraw();
    }
    else {
      this.profileControl.disableDraw();
    }
    this.sidenav.close();
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
        zoom : 12
      })
    }

    this.map = new ol.Map(this.mapProperties);
    this.projService.setProjection(this.map, '25830');

    //this.addDummyLayers(this.map);
    this.addUserMaps();
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
    });
    this.overviewCtrl.getLayers().clear();
    this.overviewCtrl.getLayers().extend([...this.map.getLayers().getArray()]);
  }

  addUserMaps(){
    let visibleMap = false;
    this.map.getLayers().clear();

    this.userMapsService.getUserMaps()
    .subscribe( mapas =>{
      // Obtenemos una lista de mapas con las capas ya ordenadas
      // y la recorremos 
      mapas.forEach( (mapa, index, arr) => {
        console.log('mapa', mapa);
        // Creamos un grupo de capas vacío
        let groupCapasMap = new ol.layer.Group({
            visible : mapa.visible === true 
                ? true
                : mapa.visible === false 
                ? false 
                : !visibleMap && ( index == arr.length - 1)
        });
        // Le damos un nombre
        groupCapasMap.set('name', mapa.name);
        // Lo añadimos al mapa
        this.map.addLayer(groupCapasMap);

        mapa.capas.forEach( capa =>{
          console.log('capaa', capa);
          if(capa.type == 'base') 
            this.addBaseLayerToGroup(capa, groupCapasMap);
          else if(capa.type == 'layer') 
            this.addLayerToGroup(capa, groupCapasMap);
        });

      });
    })
  }

  getTile(opts : any){
      let tile = new ol.layer.Tile({
          visible : true,
          source : new ol.source.TileWMS({
              url : opts.service_url,
              gutter : opts.gutter <= 0 ? 0 : 250,
              projection : opts.projection || 'EPSG:4326',
              crossOrigin: opts.crossOrigin || 'anonymous', // Configurar Geoserver para orígenes remotos primero
              //crossOrigin : 'anonymous',
              params: {
                  'FORMAT': 'image/png', 
                  'VERSION': '1.1.1',
                  'TRANSPARENT' : true,
                  'TILED' : true, 
                  'LAYERS': opts.layers,
                  'STYLES': ''
              }
          })
      });

      tile.set('name', opts.name);
      tile.set('wms_externo', opts.wms_externo);
      return tile;
  }

  addBaseLayerToGroup(params : any, group : ol.layer.Group){
    let tile = this.getTile({
        name : params.name,
        service_url : params.service_url,
        layers : params.name,
        gutter : 250,
        wms_externo : true,
        crossOrigin : ''  
    });
    group.getLayers().extend([tile]);
  }

  addLayerToGroup(params : any, group : ol.layer.Group){
    let tile = this.getTile({ 
      service_url : 'http://sig.betera.es:8080/geoserver/betera/wms', 
      layers : params.name, 
      name : params.name,
      crossOrigin : 'anonymous'  
    });
    tile.set('type', params.geomColumnType);
    group.getLayers().extend([tile]);
  }

  openWMSDialog(){
    let dialog = this.dialog.open(AddWmsComponent);
    dialog.afterClosed().subscribe(
      (wmsGroup)=>{}
    );
  }

}
