import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { MdSidenav } from '@angular/material';

import { DragulaService, DragulaDirective } from 'ng2-dragula';

import { ProjectionService } from './services/projection.service';

import * as ol from 'openlayers';
import * as proj4 from 'proj4';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ProjectionService, DragulaService],
  host: {
    '(window:resize)': 'fitMap()'
  }
})
export class MapComponent implements OnInit {
  
  map : ol.Map;
  @ViewChild('mapEl') mapElement: ElementRef;
  isPanelOpen : Boolean = true;
  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChildren('group') groups: QueryList<ElementRef>;
  
  constructor(private projService : ProjectionService, private dragulaService: DragulaService) {
  }

  ngOnInit(){
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
    this.createMap();
  }

  createMap(){
    //window.addEventListener('resize', this.fitMap.bind(this));
    this.fitMap();

    this.map = new ol.Map({
      target : 'map',
      controls : ol.control.defaults(),
      view : new ol.View({
        projection : 'EPSG:4326',
        center : [-0.459108, 39.589353],
        zoom : 12
      })
    });

    this.projService.setProjection(this.map, '25830');

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

    this.map.addLayer(OSMLayer);
    this.map.addLayer(orto);
    this.map.addLayer(OSMLayer2);
    this.map.addLayer(OSMLayer3);
    this.map.addLayer(OSMLayer4);
    this.map.addLayer(groupCapasBase);
    this.map.addLayer(groupCapasBase2);

    /*this.map.addLayer(orto);
    this.map.addLayer(orto);
    this.map.addLayer(orto);*/

  }

  fitMap(){
    let offsetTop = this.mapElement.nativeElement.getBoundingClientRect().top;
    this.mapElement.nativeElement.style.height = `calc(100vh - ${offsetTop}px)`;
    this.sidebar.nativeElement.style.top = `${offsetTop}px`;
    this.sidebar.nativeElement.style.height = `calc(100vh - ${offsetTop}px)`;
    if(this.map){
      this.map.on('postcompose', ()=>{
        this.map.updateSize();
        this.map.render();
      });
      this.map.render();
    }
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

  toggleMenu(event){
    this.sidebar.nativeElement.classList.toggle('visible');
    this.map.on('postcompose', this.map.updateSize);
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
      this.map.getLayers().getArray().splice( (index - 1 | 0), 0, layer);
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
      layerGroup.splice( (indexLayer - 1 | 0), 0, layer);
    }
  }


}
