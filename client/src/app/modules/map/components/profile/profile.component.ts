import { Component, OnInit, ViewChild, ElementRef, Input, NgZone } from '@angular/core';
import * as highcharts from 'highcharts';
import { LoadingAnimateService } from 'ng2-loading-animate';
import * as ol from 'openlayers';
import { Profile3DService } from '../../services';

@Component({
  selector: 'app-map-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers : [ Profile3DService ]
})
export class ProfileComponent implements OnInit {

  active : Boolean = false;
  chart : highcharts.ChartObject;
  pointLayer : ol.layer.Vector;
  drawProfileLayer : ol.layer.Vector;
  drawProfileInteraction : ol.interaction.Draw;

  events = [];
  
  profileGeom;
  //@Input('data') profileGeom : ol.geom.LineString;
  @Input('map') map : ol.Map;
  options;

  dataChartArray = [];

  constructor(
    private loading : LoadingAnimateService,
    private profileService : Profile3DService,
    private zone : NgZone
  ) {
    this.loadLayers();
    this.loadInteraction();
  }

  loadLayers(){
    this.pointLayer = new ol.layer.Vector({
      source : new ol.source.Vector(),
      style : [
        new ol.style.Style({
          /*image: new ol.style.Icon({
            src: 'https://rawcdn.githack.com/google/material-design-icons/master/maps/svg/production/ic_add_location_48px.svg'
          })*/
          image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({
              color: '#000'
            })
          })
        })
      ]
    });

    this.drawProfileLayer = new ol.layer.Vector({
      source : new ol.source.Vector(),
      style : [
        new ol.style.Style({	
          stroke: new ol.style.Stroke({	
            color: [48, 63, 159],
            width: 3,
            lineDash: [.5, 10]
          })
        })
      ]
    });
    this.drawProfileLayer.set('name', 'DrawProfileLayer');
  }

  loadInteraction(){
    this.drawProfileInteraction = new ol.interaction.Draw({
      type : 'LineString',
      source : this.drawProfileLayer.getSource()
    });
  }

  setActive(value : Boolean){
    if(value){
      this.enableDraw();
      this.active = true;
    } else {
      this.disableDraw();
      this.active = false;
    }
  }

  enableDraw(){
    let drawStart = this.drawProfileInteraction.on('drawstart', (e)=>{
      this.drawProfileLayer.getSource().clear();
      this.drawProfileLayer.getSource().changed();
      this.profileGeom = null;
    });
    let drawEnd = this.drawProfileInteraction.on('drawend', (e : ol.interaction.DrawEvent)=>{
      this.zone.run( ()=> this.loading.setValue(true) );
      this.profileService.getProfile(e.feature).subscribe(
        (res)=> {
          this.zone.run( ()=>{
            this.profileGeom = new ol.geom.LineString(res.json().coordinates, 'XYZ');
            this.setProfile();
            this.loading.setValue(false);
          });
        }, 
        (err)=>{
          this.loading.setValue(false);
        }
      );
    });
    this.events.push(drawStart, drawEnd);
    this.map.addLayer(this.drawProfileLayer);
    this.map.addLayer(this.pointLayer);
    this.map.addInteraction(this.drawProfileInteraction);
  }

  disableDraw(){
    this.events.forEach( e => { ol.Observable.unByKey(e) });
    this.drawProfileLayer.getSource().clear();
    this.pointLayer.getSource().clear();
    this.map.removeLayer(this.drawProfileLayer);
    this.map.removeLayer(this.pointLayer);
    this.map.removeInteraction(this.drawProfileInteraction);
    this.profileGeom = null;
    this.events = [];
  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
    console.log(this.chart.options);
    //this.chart.options = this.options;
    if(this.chart.series[0]) this.chart.series[0].remove();
    this.chart.addSeries(
      { name : 'Perfil', data : this.dataChartArray }
    );
    setTimeout( ()=>{
      this.chart.reflow();
      //this.chart.redraw();
    }, 500);
  }

  
  setProfile(){
    if(!this.profileGeom) return;
    this.dataChartArray = [];
    let wgs84Sphere = new ol.Sphere(6378137);

    let profile3D = new ol.Feature({
      geometry : this.profileGeom
    });
    
    // [ [dist, cota],... ]
    this.dataChartArray = [];
    let dist = 0;
    let points = this.profileGeom.getCoordinates();

    for(let i = 0; i < points.length - 1; i++){
      //console.log('pooooint', points[i])
      this.dataChartArray.push([dist, points[i][2]]);
      let p = ol.proj.transform(points[i], this.map.getView().getProjection(), 'EPSG:4326');
      let next = ol.proj.transform(points[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
      let subLineStringGeom = new ol.geom.LineString([ p, next ]);
      dist += wgs84Sphere.haversineDistance(p, next);
    }
    //console.log(this.dataChartArray);
    if(this.chart){
      if(this.chart.series[0]) this.chart.series[0].remove();
      this.zone.run(()=>{
        this.chart.addSeries(
          { name : 'Perfil', data : this.dataChartArray }
        );
        setTimeout( ()=>{
          this.chart.reflow();
          //this.chart.redraw();
        }, 500);
        this.map.render();
      });
    }
  }

  ngOnInit() {
    this.options = {
        title : { text : 'Perfil seleccionado' },
        chart: { zoomType: 'x' },
        series: [
          { name : 'Perfil', data : this.dataChartArray }
        ]
    };
  }

  onSelectProfile(event){
    let dist = event.context.x;
    let coordinate = this.getClosestPointToDistance(dist);
    let featurePoint = new ol.Feature({
      geometry : new ol.geom.Point(coordinate, 'XYZ')
    });
    console.log(coordinate);
    this.pointLayer.getSource().clear();
    this.pointLayer.getSource().addFeature(featurePoint);
  }

  getClosestPointToDistance(distance){
    let wgs84Sphere = new ol.Sphere(6378137);
    let coords = this.profileGeom.getCoordinates();
    let distance_ = 0;
    distance -= 1e-5;
    for(let i = 0; i < coords.length - 1; i++){
      let p = ol.proj.transform(coords[i], this.map.getView().getProjection(), 'EPSG:4326');
      let next = ol.proj.transform(coords[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
      let subLineStringGeom = new ol.geom.LineString([ p, next ]);
      distance_ += wgs84Sphere.haversineDistance(p, next);
      if(distance_ > distance){
        return coords[i];
      }
    }
  }

  downloadProfile(){
    this.chart.exportChart({
      filename : 'perfil'
    })
  }

}