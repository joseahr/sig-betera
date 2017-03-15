import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { DragulaService, DragulaDirective } from 'ng2-dragula';

import { ProjectionService } from './services/projection.service';
import { Profile3DService } from './services/profile3d.service';
import { UserMapsService } from './services/user.maps.service';

import { routerTransition } from '../../router.transitions';

import { ProfileComponent } from '../profile/profile.component';

import * as ol from 'openlayers';
//import * as proj4 from 'proj4';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ProjectionService, Profile3DService, UserMapsService, DragulaService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class MapComponent implements OnInit {
  
  mapProperties : any;
  map : ol.Map;
  overviewCtrl : ol.Map;
  sideNavMapInterval : any;
  
  @ViewChild(ProfileComponent) profileControl : ProfileComponent;
  @ViewChild('overviewMap') overviewMapEl : ElementRef;
  @ViewChild('mapTools') toolsContainer : ElementRef;
  @ViewChild('mapsDetailsContainer') mapsDetailsContainer: ElementRef;
  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChildren('group') groups: QueryList<ElementRef>;

  constructor(
    private zone : NgZone,
    private el : ElementRef,
    private userMapsService : UserMapsService,
    private projService : ProjectionService, 
    private profileService : Profile3DService,
    private dragulaService: DragulaService
  ) {
  }

  ngOnInit(){
    this.sidenav.onOpenStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
    this.sidenav.onCloseStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
    this.sidenav.onOpen.subscribe(this.clearIntervalUpdateMapSize.bind(this))
    this.sidenav.onClose.subscribe(this.clearIntervalUpdateMapSize.bind(this))
    
    this.dragulaService.drop.subscribe(
      ()=> {
        this.updateMapAndOverview();
      }
    )

    this.dragulaService.setOptions('layers', {
      moves : (el, container, handle) => handle.classList.contains('handle'),
      accepts : (el, target, source, sibling) => target.attributes[2].value == 'layers'
    });
    this.dragulaService.setOptions('layerGroup', {
      moves : (el, container, handle) => handle.classList.contains('handleGroup'),
      accepts : (el, target, source, sibling) => target.attributes[1].value == 'layerGroup' && el.parentNode == target
    });

  }

  ngAfterViewInit() {
    console.log(this.el.nativeElement.parentNode);
    this.el.nativeElement.parentNode.parentNode.childNodes[0].style.position = 'relative';
    setTimeout(function () { window.scrollTo(0, 1); }, 1000);
    document.body.style.overflow = 'hidden';
    this.zone.runOutsideAngular(this.createMap.bind(this));
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
      this.overviewCtrl.getLayers().clear();
      this.overviewCtrl.getLayers().extend([...this.map.getLayers().getArray()]);
    })
  }

  toggleMaps(){
    this.mapsDetailsContainer.nativeElement.classList.toggle('collapsed');
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

  changeOpacity(event, name){
    this.map.getLayers().forEach( l =>{
      if(l.get('name') == name){
        l.setOpacity(event.value);
      }
    })
  }

  changeOpacityGroupLayer(event, layerName, groupName){
    this.map.getLayers().forEach( (l : ol.layer.Group) =>{
      if(l.get('name') == groupName && l.get('layers')){
        l.get('layers').forEach( ll =>{
          if(ll.get('name') == layerName){
            ll.setOpacity(event.value);
          }
        });
      }
    })
  }

  changeVisible(event, name){
    this.map.getLayers().forEach( l =>{
      if(l.get('name') == name){
        l.setVisible(event.checked);
      }
    })
  }

  changeVisibleGroupLayer(event, layerName, groupName){
    this.map.getLayers().forEach( (l : ol.layer.Group) =>{
      if(l.get('name') == groupName && l.get('layers')){
        l.get('layers').forEach( ll =>{
          if(ll.get('name') == layerName){
            ll.setVisible(event.checked);
          }
        });
      }
    })
  }

  moveLayerUp(name){
    let layers = this.map.getLayers().getArray();
    let index = -1;
    for(let i = 0; i < layers.length ; i++){
      if(layers[i].get('name') == name){
        index = i;
        break;
      }
    }
    console.log(index);
    if(index >= 0){
      let layer = this.map.getLayers().getArray().splice(index, 1)[0];
      this.map.getLayers().getArray().splice(index + 1, 0, layer);
      layer.changed();
      this.updateMapAndOverview();
    }
  }

  moveLayerDown(name){
    let layers = this.map.getLayers().getArray();
    let index = -1;
    for(let i = 0; i < layers.length ; i++){
      if(layers[i].get('name') == name){
        index = i;
        break;
      }
    }
    console.log(index);
    if(index > 0){
      let layer = this.map.getLayers().getArray().splice(index, 1)[0];
      this.map.getLayers().getArray().splice(index - 1, 0, layer);
      layer.changed();
      this.updateMapAndOverview();
    }
  }

  moveLayerInGroupUp(groupLayersName, layerName){
    let layers = this.map.getLayers().getArray();
    let indexGroup = -1;
    let indexLayer = -1;
    for(let i = 0; i < layers.length ; i++){
      if(layers[i].get('name') == groupLayersName && layers[i].get('layers')){
        indexGroup = i;
        for(let j = 0; j < layers[i].get('layers').getArray().length; j++){
          if(layers[i].get('layers').getArray()[j].get('name') == layerName){
            indexLayer = j;
            break;
          }
        }
        break;
      }
    }
    console.log(indexGroup, groupLayersName, indexLayer, layerName)
    if(indexGroup >= 0 && indexLayer >= 0){
      let layerGroup = this.map.getLayers().getArray()[indexGroup].get('layers').getArray();
      let layer = layerGroup.splice(indexLayer, 1)[0];
      layerGroup.splice(indexLayer + 1, 0, layer);
      layer.changed();
      this.updateMapAndOverview();
    }
  }

  moveLayerInGroupDown(groupLayersName, layerName){
    let layers = this.map.getLayers().getArray();
    let indexGroup = -1;
    let indexLayer = -1;
    for(let i = 0; i < layers.length ; i++){
      if(layers[i].get('name') == groupLayersName && layers[i].get('layers')){
        indexGroup = i;
        for(let j = 0; j < layers[i].get('layers').getArray().length; j++){
          if(layers[i].get('layers').getArray()[j].get('name') == layerName){
            indexLayer = j;
            break;
          }
        }
        break;
      }
    }
    console.log(indexGroup, groupLayersName, indexLayer, layerName)
    if(indexGroup >= 0 && indexLayer > 0){
      let layerGroup = this.map.getLayers().getArray()[indexGroup].get('layers').getArray();
      let layer = layerGroup.splice(indexLayer, 1)[0];
      layerGroup.splice(indexLayer - 1, 0, layer);
      layer.changed();
      this.updateMapAndOverview();
    }
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
}
