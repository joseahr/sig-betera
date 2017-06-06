import { Component, OnInit, ViewChild, ElementRef, Input, NgZone } from '@angular/core';
import * as highcharts from 'highcharts';
import { LoadingAnimateService } from 'ng2-loading-animate';
import * as ol from 'openlayers';
import { MdSnackBar } from '@angular/material';
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
  opened = false;
  events = [];
  
  profileGeom;
  //@Input('data') profileGeom : ol.geom.LineString;
  @Input('map') map : ol.Map;
  options;

  dataChartArray = [];

  constructor(
    private loading : LoadingAnimateService,
    private snackbar : MdSnackBar,
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
            }), 
            fill : new ol.style.Fill({ color : '#f7f7f7' })
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
            width: 1,
          })
        })
      ]
    });
    //this.pointLayer.set('showInLayerSwitcher', false);
    //this.drawProfileLayer.set('showInLayerSwitcher', false);
    //this.drawProfileLayer.set('name', 'DrawProfileLayer');
    //this.pointLayer.set('name', 'PointProfileLayer');
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
      this.snackbar.open('Dibuja un perfil', 'CERRAR');
    } else {
      this.disableDraw();
      this.active = false;
      if(this.snackbar._openedSnackBarRef){
        this.snackbar._openedSnackBarRef.dismiss();
      }
    }
  }

  enableDraw(){
    let drawStart = this.drawProfileInteraction.on('drawstart', (e : ol.interaction.DrawEvent)=>{
      this.drawProfileLayer.getSource().clear();
      this.drawProfileLayer.getSource().changed();
      this.pointLayer.getSource().clear();
      this.pointLayer.getSource().changed();
      this.profileGeom = null;
      let feature : ol.Feature | any = e.feature;
      feature.getGeometry().on('change', ()=>{
        let length = (feature.getGeometry().getLength() || 0).toFixed(3);
        if(!this.snackbar._openedSnackBarRef){
          this.snackbar.open(`Perfil dibujado : ${length} metros`, 'CERRAR');
        } else {
          this.snackbar._openedSnackBarRef.instance.message = `Perfil dibujado : ${length} metros`;
        }
      })
    });
    let drawEnd = this.drawProfileInteraction.on('drawend', (e : ol.interaction.DrawEvent)=>{
      this.zone.run( ()=> this.loading.setValue(true) );
      this.profileService.getProfile(e.feature).subscribe(
        (res)=> {
          this.zone.run( ()=>{
            if(this.snackbar._openedSnackBarRef){
              this.snackbar._openedSnackBarRef.dismiss();
            }
            console.log(res, 'ddddd')
            console.log(res.json())
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
    //this.map.addLayer(this.drawProfileLayer);
    //this.map.addLayer(this.pointLayer);
    this.drawProfileLayer.setMap(this.map);
    this.pointLayer.setMap(this.map);
    this.map.addInteraction(this.drawProfileInteraction);
  }

  disableDraw(){
    this.events.forEach( e => { ol.Observable.unByKey(e) });
    this.drawProfileLayer.getSource().clear();
    this.pointLayer.getSource().clear();
    //this.map.removeLayer(this.drawProfileLayer);
    //this.map.removeLayer(this.pointLayer);
    this.drawProfileLayer.setMap(null);
    this.pointLayer.setMap(null);
    
    this.map.removeInteraction(this.drawProfileInteraction);
    this.profileGeom = null;
    this.events = [];
  }

  setOpened(bool : boolean){
    this.opened = bool;
  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
    //console.log(this.chart.options);
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
      geometry : new ol.geom.LineString(this.profileGeom.getCoordinates().map( c => c.slice(0, 2) ))
    });
    this.drawProfileLayer.getSource().clear();
    this.drawProfileLayer.getSource().addFeature(profile3D);

    // [ [dist, cota],... ]
    this.dataChartArray = [];
    let dist = 0;
    let points = this.profileGeom.getCoordinates();
    //console.log('last', this.profileGeom.getLastCoordinate())
    this.dataChartArray.push([dist, points[0][2]]);
    for(var i = 0; i < points.length - 1; i++){ // Cambiar por let solo pruebas
      //console.log('pooooint', points[i])
      //this.dataChartArray.push([dist, points[i][2]]);
      let p = ol.proj.transform(points[i], this.map.getView().getProjection(), 'EPSG:4326');
      let next = ol.proj.transform(points[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
      dist += wgs84Sphere.haversineDistance(p, next);
      this.dataChartArray.push([dist, points[i + 1][2]]);
    }
    //console.log(dist, points[points.length - 1], i, points.length, points[i]);
    //console.log(this.dataChartArray);
    this.setOpened(true);
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
  onDeselectProfile(){
    this.pointLayer.getSource().clear();
    this.pointLayer.getSource().changed();
  }

  onSelectProfile(event){
    let dist = event.context.x;
    let coordinate = this.getClosestPointToDistance(dist);
    let featurePoint : any = new ol.Feature({
      geometry : new ol.geom.Point(coordinate)
    });
    //console.log(coordinate);
    this.pointLayer.getSource().clear();
    this.pointLayer.getSource().addFeature(featurePoint);
    this.pointLayer.getSource().changed();
    
    let view : any = this.map.getView();
    this.map.once('postcompose', ()=>view.fit(featurePoint.getGeometry(), { duration : 100, maxZoom : 15 } ));
  }

  getClosestPointToDistance(distance){
    let wgs84Sphere = new ol.Sphere(6378137);
    let coords = this.profileGeom.getCoordinates();
    let distance_ = 0;
    if(distance == 0) return coords[0];
    for(let i = 0; i < coords.length - 1; i++){
      let p = ol.proj.transform(coords[i], this.map.getView().getProjection(), 'EPSG:4326');
      let next = ol.proj.transform(coords[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
      distance_ += wgs84Sphere.haversineDistance(p, next);
      //console.log(distance_, distance);
      if(distance_ >= distance){
        //console.log('i + 1', i + 1, coords[i + 1]);
        return coords[i + 1];
      }
    }
  }

  downloadProfile(){
    this.chart.exportChart({
      filename : 'perfil'
    })
  }

}