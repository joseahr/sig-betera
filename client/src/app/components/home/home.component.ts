import { Component, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SignupComponent } from '../../dialogs';
import { routerTransition } from '../../router.transitions';
import * as ol from 'openlayers';

import { ProjectionService } from '../../modules/map/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class HomeComponent {
  
  layers;
  toolbar;
  //@ViewChild('full') full : ElementRef;
  selectedLayer;
  selectedFormat;
  GEOSERVER_URL = 'http://localhost:8080/geoserver';
  formats = [
      { name : 'GML2', mime : 'GML2'},
      { name : 'GML3', mime : 'GML3'},
      { name : 'Shapefile', mime : 'shape-zip'},
      { name : 'GeoJSON', mime : 'application/json'},      
  ]

  
  constructor(
    private el : ElementRef, 
    private ngZone : NgZone, 
    private http : Http,
    private router : Router,
    private dialog : MdDialog,
    ) {
        this.layers = this.getLayers();
  }

  ngOnInit(){
  }

  ngOnDestroy(){
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    //$.fn.fullpage.destroy('all');
    console.log('destroyyy');
  }

  ngAfterViewInit() {
    this.toolbar = this.el.nativeElement.parentNode.parentNode.childNodes[0];
    document.body.style.overflow = '';
    //console.log(this.el.nativeElement.parentNode.childNodes[0], this.el.nativeElement, 'toooooool')
  }

  dowloadFromGeoserver(){
    let url = `${this.GEOSERVER_URL}/betera/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=betera:${this.selectedLayer}&maxFeatures=10000&outputFormat=${this.selectedFormat}`;
    window.open(url);
  }

  openMapBBOXDialog(){
      let dialog = this.dialog.open(SelectBoxToDownloadFromGeoserverDialog, {
          width : '90vw',
          height : 'auto',
          disableClose : false
      });

      dialog.componentInstance.selectedLayer = this.selectedLayer;
      dialog.componentInstance.selectedFormat = this.selectedFormat;
  }

  scrollTo(selector){
    let node = document.querySelector(selector),
        val  = 0;

    if (node.offsetParent) {
        do {
            val += node.offsetTop;
        } while (node = node.offsetParent);
    } else {
      val = node.offsetTop
    }
      
    this.scrollToY(val, 1000, 'easeInOutQuint');
    //console.log(node, val, selector, node.getBoundingClientRect().top, node.offsetHeight);

  }

  getHeight(element){
      let height = element.clientHeight;
      let computedStyle = window.getComputedStyle(element); 
      height += parseInt(computedStyle.marginTop, 10);
      height += parseInt(computedStyle.marginBottom, 10);
      height += parseInt(computedStyle.borderTopWidth, 10);
      height += parseInt(computedStyle.borderBottomWidth, 10);
      return height;
  }

  getLayers(){
    return this.http.get('/api/maps')
      .map( res => res.json() )
      .map( res => [].concat( ...res.map( m => m.layers.map( l => l.name ) ) ) );
  }

  openSignupDialog(){
    let dialog = this.dialog.open(SignupComponent);
  }

  // main function
  scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use
  
      var scrollY = window.scrollY,
          scrollTargetY = scrollTargetY || 0,
          speed = speed || 2000,
          easing = easing || 'easeOutSine',
          currentTime = 0;
  
      // min time .1, max time .8 seconds
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
  
      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      var PI_D2 = Math.PI / 2,
          easingEquations = {
              easeOutSine: function (pos) {
                  return Math.sin(pos * (Math.PI / 2));
              },
              easeInOutSine: function (pos) {
                  return (-0.5 * (Math.cos(Math.PI * pos) - 1));
              },
              easeInOutQuint: function (pos) {
                  if ((pos /= 0.5) < 1) {
                      return 0.5 * Math.pow(pos, 5);
                  }
                  return 0.5 * (Math.pow((pos - 2), 5) + 2);
              }
          };
  
      // add animation loop
      function tick() {
          currentTime += 1 / 60;
  
          var p = currentTime / time;
          var t = easingEquations[easing](p);
  
          if (p < 1) {
              (<any>window).requestAnimFrame(tick);
  
              window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
              console.log('scroll done');
              window.scrollTo(0, scrollTargetY);
          }
      }
  
      // call it once to get started
      tick();
  }
  
}


@Component({
    template : `
        <div md-dialog-title>
            Selecciona un recuadro
        </div>
        <div #map style="width : 100%; height : 100%;"></div>
        <md-dialog-actions>
            <button [disabled]="!bbox" md-raised-button (click)="dowloadFromGeoserver()" color="primary">Descargar</button>
        </md-dialog-actions>
    `,
    providers : [ProjectionService]
})
export class SelectBoxToDownloadFromGeoserverDialog {

    bbox;
    map;
    @ViewChild('map') mapElement : ElementRef;
    selectedLayer;
    selectedFormat;
    GEOSERVER_URL = 'http://localhost:8080/geoserver';

    constructor(private projService : ProjectionService, private dialogRef : MdDialogRef<SelectBoxToDownloadFromGeoserverDialog>){}

    ngOnInit(){
        this.map = new ol.Map({
            target : this.mapElement.nativeElement,
            layers : [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view : new ol.View({
                projection : 'EPSG:4326',
                center : [-0.459108, 39.589353],
                zoom : 12,
                maxZoom : 20
            })
        });

        this.projService.setProjection(this.map, '25830');

        let layer = new ol.layer.Tile({
            source : new ol.source.TileWMS({
                url : `${this.GEOSERVER_URL}/betera/wms`,
                projection : this.map.getView().getProjection(),
                params : {
                    layers : this.selectedLayer
                }
            })
        });

        let vectorLayer = new ol.layer.Vector({
            source : new ol.source.Vector()
        });

        this.map.addLayer(layer);
        this.map.addLayer(vectorLayer);

        const dragBox = new ol.interaction.DragBox({
            condition: ol.events.condition.always
        });

        this.map.addInteraction(dragBox);
        
        dragBox.on('boxstart', ()=> vectorLayer.getSource().clear() )

        dragBox.on('boxend', ()=> {
            let geometry = dragBox.getGeometry()
            this.bbox = geometry.getExtent();
            let feature : ol.Feature = new ol.Feature();
            feature.setGeometry(geometry)
            vectorLayer.getSource().addFeature(feature);
        });
    }

    dowloadFromGeoserver(){
        let url = `${this.GEOSERVER_URL}/betera/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=betera:${this.selectedLayer}&bbox=${this.bbox.join()}&outputFormat=${this.selectedFormat}`;
        window.open(url);
        this.dialogRef.close();
    }
}