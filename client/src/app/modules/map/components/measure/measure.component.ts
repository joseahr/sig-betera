import {
  Component, 
  OnInit, 
  Input, 
  NgZone, 
  ViewChild,
  ElementRef,
} from '@angular/core';

import * as ol from 'openlayers';
import { MdSnackBar } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';

enum MeasureInteraction {
  Length = 1, Area
}

@Component({
  selector: 'app-measure',
  template : ''
})
export class MeasureComponent {

  wgs84Sphere = new ol.Sphere(6378137);

  listenerGeomChange;
  
  active : Boolean = false;
  activeInteraction : MeasureInteraction = null;

  private measureLayer = new ol.layer.Vector({
    source : new ol.source.Vector()
  });

  drawInteraction : ol.interaction.Draw;

  @Input('map') map : ol.Map;

  constructor(
    private snackbar : MdSnackBar,
    private zone : NgZone,
    private loading : LoadingAnimateService
  ) {
    this.measureLayer.set('name', 'MeasureLayer');
  }

  setActive(value : Boolean, interaction? : MeasureInteraction){
    if(!value){
      this.active = false;
      this.activeInteraction = null;
      this.measureLayer.getSource().clear();
      this.map.removeLayer(this.measureLayer);
      this.map.removeInteraction(this.drawInteraction);
      if(this.listenerGeomChange){
        ol.Observable.unByKey(this.listenerGeomChange);
      }
      //this.dialogCollapsed = false;
      this.snackbar._openedSnackBarRef ? this.snackbar._openedSnackBarRef.dismiss() : '';
    } else {
      if(!interaction) return;
      this.active = true;
      this.setInteraction(interaction);
      this.addLayer();
    }
  }

  addLayer(){
    if(!this.map.getLayers().getArray().find( l => l.get('name') == 'MeasureLayer')){
      this.map.addLayer(this.measureLayer);
    }
  }

  setInteraction(interaction : MeasureInteraction){
    //console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
    if(interaction == this.activeInteraction) return;
    let snackRef = this.snackbar.openFromComponent(MeasureSnackBar);
        snackRef.instance.interactionType = interaction;
    if(interaction == MeasureInteraction.Length){
      ol.Observable.unByKey(this.listenerGeomChange);
      this.map.removeInteraction(this.drawInteraction);
      this.activeInteraction = MeasureInteraction.Length;
    } else {
      ol.Observable.unByKey(this.listenerGeomChange);
      this.map.removeInteraction(this.drawInteraction);
      this.activeInteraction = MeasureInteraction.Area;
    }
    this.addInteraction(interaction);
  }


  addInteraction(interaction : MeasureInteraction) {
    let type : ol.geom.GeometryType = (interaction == MeasureInteraction.Length ? 'LineString' : 'Polygon');

    this.drawInteraction = new ol.interaction.Draw({
      source: this.measureLayer.getSource(),
      type: /** @type {ol.geom.GeometryType} */ (type),
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(0, 0, 0, 0.5)',
          lineDash: [10, 10],
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 5,
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.7)'
          }),
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          })
        })
      })
    });
    this.map.addInteraction(this.drawInteraction);

    let sketch;
    this.drawInteraction.on('drawstart', evt => {
      this.measureLayer.getSource().clear();
      sketch = evt.feature;
      this.listenerGeomChange = sketch.getGeometry().on('change', evt => {
        let geom = evt.target;
        let measure = ( geom instanceof ol.geom.Polygon ? this.formatArea(geom) : this.formatLength(geom) );
        
        this.snackbar._openedSnackBarRef.instance.measure = measure;
        this.snackbar._openedSnackBarRef.instance.interactionType = this.activeInteraction;
      });
    }, this);

    this.drawInteraction.on('drawend', () => {
      sketch = null;
      ol.Observable.unByKey(this.listenerGeomChange);
    }, this);
  }

  formatArea(polygon){
    var area;
    var sourceProj = this.map.getView().getProjection();
    var geom = /** @type {ol.geom.Polygon} */(polygon.clone().transform(
        sourceProj, 'EPSG:4326'));
    var coordinates = geom.getLinearRing(0).getCoordinates();
    return Math.abs(this.wgs84Sphere.geodesicArea(coordinates));
  }

  formatLength(line){
    var length = 0;
    var coordinates = line.getCoordinates();
    var sourceProj = this.map.getView().getProjection();
    for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
      var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
      var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
      length += this.wgs84Sphere.haversineDistance(c1, c2);
    }
    return length;
  }
}


@Component({
  templateUrl : './measure.component.html',
  styleUrls : ['./measure.component.css']
})
export class MeasureSnackBar {
  Math;
  interactionType : MeasureInteraction;
  measure : number;
  constructor(){
    this.Math = Math;
  }
}