import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, NgZone } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { DragulaService, DragulaDirective } from 'ng2-dragula';

import { ProjectionService } from './services/projection.service';
import { Profile3DService } from './services/profile3d.service';

import { routerTransition } from '../../router.transitions';

import { ProfileComponent } from '../profile/profile.component';

import * as ol from 'openlayers';
//import * as proj4 from 'proj4';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ProjectionService, Profile3DService, DragulaService],
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
    window.scrollTo(0,1);
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
      controls : ol.control.defaults(),
      view : new ol.View({
        projection : 'EPSG:4326',
        center : [-0.459108, 39.589353],
        zoom : 12
      })
    }

    this.map = new ol.Map(this.mapProperties);
    this.projService.setProjection(this.map, '25830');

    this.addDummyLayers(this.map);
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

  changeVisible(event, name){
    this.map.getLayers().forEach( l =>{
      if(l.get('name') == name){
        l.setVisible(event.checked);
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

  addDummyLayers(map){

    let OSMLayer = new ol.layer.Tile({ source : new ol.source.OSM() });
    OSMLayer.set('name', 'OSM');
    let OSMLayer2 = new ol.layer.Tile({ source : new ol.source.OSM() });
    OSMLayer2.set('name', 'OSM2');
      
    let OSMLayer3 = new ol.layer.Tile({ source : new ol.source.OSM() });
    OSMLayer3.set('name', 'OSM3');    
    let OSMLayer4 = new ol.layer.Tile({ source : new ol.source.OSM() });
    OSMLayer4.set('name', 'OSM4');
    let orto = new ol.layer.Tile({ 
      source : new ol.source.TileWMS({
        url : 'http://www.ign.es/wms-inspire/pnoa-ma',
        projection : this.map.getView().getProjection(),
        params : {
          "LAYERS" : 'OI.OrthoimageCoverage'
        }
      })
    });
    orto.set('name', 'Ortofoto PNOA');
    var groupCapasBase = new ol.layer.Group({
        layers: [OSMLayer, OSMLayer2, OSMLayer3, OSMLayer4]
    });
    groupCapasBase.set('name', 'groupp');

    var groupCapasBase2 = new ol.layer.Group({
        layers: [OSMLayer, OSMLayer2, OSMLayer3, orto]
    });
    groupCapasBase2.set('name', 'group2');

    map.addLayer(OSMLayer);
    map.addLayer(orto);
    map.addLayer(OSMLayer2);
    map.addLayer(OSMLayer3);
    map.addLayer(OSMLayer4);
    map.addLayer(groupCapasBase);
    map.addLayer(groupCapasBase2);

    /*this.map.addLayer(orto);
    this.map.addLayer(orto);
    this.map.addLayer(orto);*/
  }

}
