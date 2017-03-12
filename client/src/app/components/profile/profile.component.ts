import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as highcharts from 'highcharts';
import * as ol from 'openlayers';

@Component({
  selector: 'app-map-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers : [  ]
})
export class ProfileComponent implements OnInit {

  chart : highcharts.ChartObject;
  pointLayer : ol.layer.Vector;

  @Input('data') profileGeom : ol.geom.LineString;
  @Input('map') map : ol.Map;
  options;

  dataChartArray = [];

  constructor() {
  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
    if(this.chart.series[0]) this.chart.series[0].remove();
    this.chart.addSeries(
      { name : 'Perfil', data : this.dataChartArray }
    );
    setTimeout( ()=>{
      this.chart.reflow();
      this.chart.redraw();
    }, 500);
  }

  ngOnChanges(changes){
    console.log(changes, this.profileGeom);
    if(changes['profileGeom'] && this.profileGeom){
      console.log('profileGeom Changes');
      if(!this.pointLayer){
        this.pointLayer = new ol.layer.Vector({
          source : new ol.source.Vector()
        });
        this.map.addLayer(this.pointLayer);
      }

      this.dataChartArray = [];
      let wgs84Sphere = new ol.Sphere(6378137);

      let profile3D = new ol.Feature({
        geometry : this.profileGeom
      });
      
      // [ [dist, cota],... ]
      this.dataChartArray = [];
      let dist = 0;
      let points = this.profileGeom.getCoordinates();

      for(let i = 0; i< points.length - 1; i++){
        //console.log('pooooint', points[i])
        this.dataChartArray.push([dist, points[i][2]]);
        if(points[i + 1]){
          var p = ol.proj.transform(points[i], this.map.getView().getProjection(), 'EPSG:4326');
          var next = ol.proj.transform(points[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
          var subLineStringGeom = new ol.geom.LineString([ p, next ]);
          dist += wgs84Sphere.haversineDistance(p, next);
        }
      }
      console.log(this.dataChartArray);
      if(this.chart){
        if(this.chart.series[0]) this.chart.series[0].remove();
        this.chart.addSeries(
          { name : 'Perfil', data : this.dataChartArray }
        );
        setTimeout( ()=>{
          this.chart.reflow();
          this.chart.redraw();
        }, 500);
      }
    }
  }

  ngOnInit() {
    this.options = {
        title : { text : 'Perfil seleccionado' },
        chart: { zoomType: 'x'},
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
    for(let i = 0; i < coords.length; i++){
        if(coords[i + 1]){
          var p = ol.proj.transform(coords[i], this.map.getView().getProjection(), 'EPSG:4326');
          var next = ol.proj.transform(coords[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
          var subLineStringGeom = new ol.geom.LineString([ p, next ]);
          distance_ += wgs84Sphere.haversineDistance(p, next);
          if(distance_ >= distance){
            return coords[i + 1];
          }
        }
    }
  }

}