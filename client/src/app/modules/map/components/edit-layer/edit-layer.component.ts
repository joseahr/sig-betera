import { Component, OnInit, Input } from '@angular/core';
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


  layerChanged(event){
    console.log(event);
    let capa = event.value;
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
          console.log('delete', e.target.item(0))
          this.interactionSelectPointerMove.getFeatures().clear();
          this.interaction.getFeatures().clear();
        });
        this.map.addInteraction(this.interaction);
        break;
      case Actions.PAN :
      default: return;
    }
  }

  setActive(active : boolean){
    if(this.controlActive == active) return;
    this.controlActive = active;
    if(active){

    } else {

    }

  }

  getEditableLayerNames(){
    return this.map
    .getLayers()
    .getArray()
    .filter( l => l.get('group_capas_map') === true )[0]
    .get('layers')
    .getArray()
    .filter( l =>  l.get('rol') == 'e' || l.get('rol') == 'd' )
    .map( l => l.get('name') )
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
        </div>
        <div md-dialog-actions>
          <button md-button (click)="dialogRef.close()">Cancelar</button>
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
    }

    saveFeature(){
      console.log('SAVE FEATURE', this.action, this.layerName, Object.assign({}, this.properties), this.properties );
      let geometry = wktParser.writeFeature(this.feature);
      delete this.properties['geometry'];

      console.log('cccc', geometry)
      if(this.action == Actions.CREATE) {
        this.userLayersService.addFeature(this.layerName, geometry, this.properties )
        .subscribe( e => {
          this.feature.setProperties(this.properties);
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