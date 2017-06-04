import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as ol from 'openlayers';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { MdDialog, MdDialogRef } from '@angular/material';
import { UserLayersService } from '../../services';

const wktParser = new ol.format.WKT();

const FeatureTypesDB = {
  'POINT' : 'Point',
  'LINESTRING' : 'LineString',
  'POLYGON' : 'Polygon',
  'MULTIPOINT' : 'MultiPoint',
  'MULTILINESTRING' : 'MultiLineString',
  'MULTIPOLYGON' : 'MultiPolygon'
}

export enum Actions {
    PAN,
    CREATE,
    UPDATE,
    DELETE
}

@Component({
  selector: 'app-edit-layer',
  templateUrl: './edit-layer.component.html',
  styleUrls: ['./edit-layer.component.css'],
  providers : [LoadingAnimateService]
})
export class EditLayerComponent implements OnInit {

  @Input('map') map : ol.Map;

  layerName;

  editingLayer : ol.layer.Vector;
  layerRol : string;
  layerWMS;

  controlActive : boolean = false;

  dirty = {};

  interaction;
  interactionDoubleClick;
  interactionSelectPointerMove;
  interactionSelect;
  interactionSnap;

  action = Actions.PAN;
  actions = [
      { action : Actions.PAN , icon : '', text : 'PAN' },
      { action : Actions.CREATE, icon : 'add', text : 'CREAR' },
      { action : Actions.UPDATE, icon : 'update', text : 'ACTUALIZAR' },
      { action : Actions.DELETE, icon : 'remove', text : 'ELIMINAR' }
  ]

  layerSchema;
  geometryType;

  constructor(
      private http : Http, 
      private loading : LoadingAnimateService,
      private dialog : MdDialog,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    //this.startEditing('aljubs');
  }

  getActionDisable(action : Actions){
    if(!this.layerWMS){
      return false;
    }

    //console.log(action, this.layerWMS.get('rol'))

    switch(action){
      case Actions.CREATE :
        return ['c', 'e', 'd'].includes(this.layerWMS.get('rol')) === false;
      case Actions.UPDATE :
        return ['e', 'd'].includes(this.layerWMS.get('rol')) === false;
      case Actions.DELETE :
        return ['d'].includes(this.layerWMS.get('rol')) === false;
      case Actions.PAN : 
        return false;
      default : 
        return true;
    }
  }


  layerChanged(event){
    console.log(event);
    let capa = event.value;
    this.layerWMS = this.getEditableLayers().find( l => l.get('name') == capa );

    this.map.removeInteraction(this.interactionSelectPointerMove);

    this.startEditing(capa);

    this.interactionSelectPointerMove = new ol.interaction.Select({
      layers : [this.editingLayer],
      condition: ol.events.condition.pointerMove
    });

    this.interactionSelect = new ol.interaction.Select({
      layers : [this.editingLayer],
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#ffd740'
        })
      })
    });

    this.interactionSnap = new ol.interaction.Snap({
      source: this.editingLayer.getSource()
    });

    //this.map.addInteraction(this.interactionSelectPointerMove);
    this.actionChanged({ value : Actions.PAN })
  }

  actionChanged(event){
    console.log(event);

    this.map.removeInteraction(this.interaction);
    this.interactionSelect.getFeatures().clear();
    this.map.removeInteraction(this.interactionSelect);
    this.map.removeInteraction(this.interactionDoubleClick);

    let action = event.value;
    //this.action = action;
    switch(action){
      case Actions.CREATE:
        let featureType = FeatureTypesDB[this.geometryType];
        
        console.log(featureType, this.geometryType);

        this.interaction = new ol.interaction.Draw({
          type: featureType,
          source: this.editingLayer.getSource()
        });

        this.map.addInteraction(this.interaction);
        this.interaction.on('drawend', e => {
          //transactWFS('insert', e.feature);
          let dialogRef = this.dialog.open(FeatureEditDialog, { disableClose : true });
          dialogRef.componentInstance.feature = e.feature;
          dialogRef.componentInstance.fields  = this.layerSchema;
          dialogRef.componentInstance.action = this.action;
          dialogRef.componentInstance.layerName = this.layerName;
          dialogRef.afterClosed().subscribe(val => {
            if(val == -1){
              this.editingLayer.getSource().removeFeature(e.feature);
            }
          })
          console.log('add', e.feature);
        });
        break;

      case Actions.UPDATE:
        this.map.addInteraction(this.interactionSelect);

        this.interaction = new ol.interaction.Modify({
          features: this.interactionSelect.getFeatures()
        });

        this.interactionDoubleClick = new ol.interaction.Select({
            layers : [this.editingLayer],
            condition : ol.events.condition.doubleClick
        })
        
        this.map.addInteraction(this.interactionDoubleClick);
        this.map.addInteraction(this.interaction);
        this.map.addInteraction(this.interactionSnap);

        this.dirty = {};

        this.interactionDoubleClick.getFeatures().on('add', e =>{
          console.log('double click', e.target);
          let dialogRef = this.dialog.open(FeatureEditDialog, { disableClose : true });
          dialogRef.componentInstance.fields  = this.layerSchema;
          dialogRef.componentInstance.feature = e.element;
          dialogRef.componentInstance.action = this.action;
          dialogRef.componentInstance.layerName = this.layerName;
          
          dialogRef.afterClosed().subscribe( () => {
            this.editingLayer.getSource().clear();
            this.editingLayer.getSource().refresh();
            this.layerWMS.getSource().updateParams({"time": Date.now()});
          });
          console.log('add', e.element.getProperties());
        });

        this.interactionSelect.getFeatures().on('add', e => {
          e.element.on('change', e => {
            this.dirty[e.target.getId()] = true;
          });
        });

        this.interactionSelect.getFeatures().on('remove', e => {
          var f = e.element;
          if (this.dirty[f.getId()]) {
            delete this.dirty[f.getId()];
            //delete featureProperties.boundedBy;
            let dialogRef = this.dialog.open(FeatureEditDialog, { disableClose : true });
            dialogRef.componentInstance.fields  = this.layerSchema;
            dialogRef.componentInstance.feature = f;
            dialogRef.componentInstance.action = this.action;
            dialogRef.componentInstance.layerName = this.layerName;

            dialogRef.afterClosed().subscribe( () => {
              this.editingLayer.getSource().clear();
              this.editingLayer.getSource().refresh();
              this.layerWMS.getSource().updateParams({"time": Date.now()});
            });
            //transactWFS('update', clone);
            // Abrir diálogo que se encargue de modificar propiedades y guardar
          }
        });
        break;
      case Actions.DELETE:
        this.interaction = new ol.interaction.Select({
          layers : [this.editingLayer]
        });

        this.interaction.getFeatures().on('add', e => {
          //transactWFS('delete', e.target.item(0));
          let dialogRef = this.dialog.open(FeatureDeleteDialog, { disableClose : true });
          dialogRef.componentInstance.layerName = this.layerName;
          dialogRef.componentInstance.gid = e.element.getProperties().gid;
          
          dialogRef.afterClosed().subscribe( val => {
            if(val == 0){
              console.log('okkk')
              console.log('delete', e.target.item(0), e.element)

            } else {
              console.log('err')
            }
            this.interactionSelectPointerMove.getFeatures().clear();
            this.interaction.getFeatures().clear();
            this.editingLayer.getSource().clear();
            this.editingLayer.getSource().refresh();
            //let layerWMS = this.getEditableLayers().find( l => l.get('name') == this.layerName );
            //console.log(layerWMS);
            this.layerWMS.getSource().updateParams({"time": Date.now()});
          });

        });
        this.map.addInteraction(this.interaction);
        break;
      case Actions.PAN :
      default: return;
    }
    //this.layerChanged({ value : this.layerName })
  }

  setActive(active : boolean){
    if(this.controlActive == active) return;
    this.controlActive = active;
    if(!active){
      this.map.removeInteraction(this.interaction);
      if(this.interactionSelect) this.interactionSelect.getFeatures().clear();
      this.map.removeInteraction(this.interactionSelect);
      this.map.removeInteraction(this.interactionDoubleClick);
    }

  }

  getEditableLayers(){
    try {
      return this.map
      .getLayers()
      .getArray()
      .filter( l => l.get('group_capas_map') === true )[0]
      .get('layers')
      .getArray()
      .filter( l =>  l.get('rol') == 'c' || l.get('rol') == 'e' || l.get('rol') == 'd' )
    } catch(e){
      return [];
    }
  }

  startEditing(layerName : string){
    if(this.editingLayer){
      this.editingLayer.setMap(null);
    }

    let vectorSource = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: function(extent) {
        return `http://localhost:8080/geoserver/betera/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=betera:${layerName}&outputFormat=application/json&srsname=EPSG:25830&bbox=`
         + extent.join(',') + ',EPSG:25830';
      },
      strategy: ol.loadingstrategy.bbox
    });
    
    this.editingLayer = new ol.layer.Vector({
      source: vectorSource
    });

    this.editingLayer.setMap(this.map);
    
    this.loading.setValue(true);
    this.http.get(`/api/layers/schema/${layerName}`)
    .subscribe( (res)=>{
      let info = res.json();
      console.log(info);
      this.layerSchema = info.layerSchema;
      this.geometryType = info.geometryType;
      if(this.action) this.actionChanged({value : this.action});
      this.loading.setValue(false);
    })
  }

}


@Component({
    template : `
        <div md-dialog-content>
            <div *ngFor="let field of fields">
                <md-input-container>
                    <input [disabled]="excludedProperties.indexOf(field.name) >= 0" mdInput [(ngModel)]="properties[field.name]" placeholder="{{field.name}}" value="{{ properties[field.name] }}">
                </md-input-container>
                <br>
            </div>
            <md-list>
              <h3 md-subheader>Archivos Relacionados</h3>
              <md-list-item>
                <md-icon md-list-icon>file_upload</md-icon>
                <h4 md-line>Añade un archivo (Imagen, PDF, ...)</h4>
                <input #uploadFileForm md-line type="file">
                <button md-line md-button (click)="uploadFile()">Subir</button>
              </md-list-item>
              <md-list-item *ngFor="let data of (featureData | async)">
                <md-icon md-list-icon>insert_drive_files</md-icon>
                <h4 md-line>
                  <a href="{{data.url}}">{{data.url}}</a>
                </h4>
                <button md-mini-fab><md-icon>remove</md-icon></button>
              </md-list-item>
            </md-list>
        </div>
        <div md-dialog-actions>
          <button md-button (click)="dialogRef.close(-1)">Cancelar</button>
          <button md-button (click)="saveFeature()">Guardar</button>
        </div>
    `,
    providers : [UserLayersService]
})
export class FeatureEditDialog {
    fields : any[];
    feature : ol.Feature;
    properties;
    excludedProperties = ['gid'];
    action;
    layerName;
    featureData;

    @ViewChild('uploadFileForm') fileForm : ElementRef;

    constructor(
      private dialogRef : MdDialogRef<FeatureEditDialog>,
      private userLayersService : UserLayersService
      ){

    }

    getGeomColumn(){
      return this.fields.find( col => col.type === 'USER-DEFINED' && col.udt === 'geometry' )
    }

    ngOnInit(){
        //console.log('GUUU', this.fields, this.feature);
        //console.log(this.feature.getProperties())
        let geomColumnName = this.getGeomColumn().name;
        this.excludedProperties.push(geomColumnName);
        this.properties = this.feature.getProperties() || {};
        if( this.feature.get('gid') ) {
          this.featureData = this.userLayersService.getFeatureData(this.layerName, this.feature.get('gid') )
        }
    }

    uploadFile(){
      let file = this.fileForm.nativeElement.files[0];
      console.log(file);
      //this.userLayersService.addFeatureData()
    }

    saveFeature(){
      console.log('SAVE FEATURE', this.action, this.layerName, Object.assign({}, this.properties), this.properties );
      let geometry = wktParser.writeFeature(this.feature);
      delete this.properties['geometry'];

      console.log('cccc', geometry)
      if(this.action == Actions.CREATE) {
        this.userLayersService.addFeature(this.layerName, geometry, this.properties )
        .subscribe( res => {
          console.log(res);
          let { gid } = res;
          this.feature.setProperties(this.properties);
          this.feature.set('gid', gid);
          this.dialogRef.close();
        }, err => console.log(err.json()) );
      } 
      else if(this.action == Actions.UPDATE) {
        this.userLayersService.editFeature(this.layerName, geometry, this.properties)
        .subscribe( e => {
          this.feature.setProperties(this.properties);
          this.dialogRef.close();
        }, err => console.log(err.json()) );
      }
    }

}


@Component({
    template : `
        <div md-dialog-content>
            <h4>¿Deseas eliminar la feature?</h4>
            <ul>
              <li>capa : {{layerName}}</li>
              <li>gid  : {{gid}}</li>
            </ul>
        </div>
        <div md-dialog-actions>
          <button md-button (click)="dialogRef.close()">Cancelar</button>
          <button md-button (click)="deleteFeature()">Eliminar</button>
        </div>
    `,
    providers : [UserLayersService]
})
export class FeatureDeleteDialog {

  layerName;
  gid;

  constructor(private userLayersService : UserLayersService, private dialogRef : MdDialogRef<FeatureDeleteDialog>){

  }

  deleteFeature(){
    this.userLayersService.deleteFeature(this.layerName, this.gid)
    .subscribe( e => { this.dialogRef.close(0), err => { this.dialogRef.close(1) } })
  }

}