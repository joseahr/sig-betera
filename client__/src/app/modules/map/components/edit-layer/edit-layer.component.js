"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ol = require("openlayers");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var material_1 = require("@angular/material");
var services_1 = require("../../services");
var bytes_pipe_1 = require("angular-pipes/src/math/bytes.pipe");
var wktParser = new ol.format.WKT();
var FeatureTypesDB = {
    'POINT': 'Point',
    'LINESTRING': 'LineString',
    'POLYGON': 'Polygon',
    'MULTIPOINT': 'MultiPoint',
    'MULTILINESTRING': 'MultiLineString',
    'MULTIPOLYGON': 'MultiPolygon'
};
var Actions;
(function (Actions) {
    Actions[Actions["PAN"] = 0] = "PAN";
    Actions[Actions["CREATE"] = 1] = "CREATE";
    Actions[Actions["UPDATE"] = 2] = "UPDATE";
    Actions[Actions["DELETE"] = 3] = "DELETE";
})(Actions = exports.Actions || (exports.Actions = {}));
var EditLayerComponent = (function () {
    function EditLayerComponent(http, loading, dialog) {
        this.http = http;
        this.loading = loading;
        this.dialog = dialog;
        this.controlActive = false;
        this.dirty = {};
        this.action = Actions.PAN;
        this.actions = [
            { action: Actions.PAN, icon: '', text: 'Ninguna' },
            { action: Actions.CREATE, icon: 'add', text: 'Crear' },
            { action: Actions.UPDATE, icon: 'update', text: 'Actualizar' },
            { action: Actions.DELETE, icon: 'remove', text: 'Eliminar' }
        ];
    }
    EditLayerComponent.prototype.ngOnInit = function () {
    };
    EditLayerComponent.prototype.ngAfterViewInit = function () {
        //this.startEditing('aljubs');
    };
    EditLayerComponent.prototype.getActionDisable = function (action) {
        if (!this.layerWMS) {
            return false;
        }
        //console.log(action, this.layerWMS.get('rol'))
        switch (action) {
            case Actions.CREATE:
                return ['c', 'e', 'd'].includes(this.layerWMS.get('rol')) === false;
            case Actions.UPDATE:
                return ['e', 'd'].includes(this.layerWMS.get('rol')) === false;
            case Actions.DELETE:
                return ['d'].includes(this.layerWMS.get('rol')) === false;
            case Actions.PAN:
                return false;
            default:
                return true;
        }
    };
    EditLayerComponent.prototype.layerChanged = function (event) {
        console.log(event);
        var capa = event.value;
        this.layerWMS = this.getEditableLayers().find(function (l) { return l.get('name') == capa; });
        this.map.removeInteraction(this.interactionSelectPointerMove);
        this.startEditing(capa);
        this.interactionSelectPointerMove = new ol.interaction.Select({
            layers: [this.editingLayer],
            condition: ol.events.condition.pointerMove
        });
        this.interactionSelect = new ol.interaction.Select({
            layers: [this.editingLayer],
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
        this.actionChanged({ value: Actions.PAN });
    };
    EditLayerComponent.prototype.actionChanged = function (event) {
        var _this = this;
        console.log(event);
        this.map.removeInteraction(this.interaction);
        this.interactionSelect.getFeatures().clear();
        this.map.removeInteraction(this.interactionSelect);
        this.map.removeInteraction(this.interactionDoubleClick);
        var action = event.value;
        //this.action = action;
        switch (action) {
            case Actions.CREATE:
                var featureType = FeatureTypesDB[this.geometryType];
                console.log(featureType, this.geometryType);
                this.interaction = new ol.interaction.Draw({
                    type: featureType,
                    source: this.editingLayer.getSource()
                });
                this.map.addInteraction(this.interaction);
                this.interaction.on('drawend', function (e) {
                    //transactWFS('insert', e.feature);
                    var dialogRef = _this.dialog.open(FeatureEditDialog, { disableClose: true });
                    dialogRef.componentInstance.feature = e.feature;
                    dialogRef.componentInstance.fields = _this.layerSchema;
                    dialogRef.componentInstance.action = _this.action;
                    dialogRef.componentInstance.layerName = _this.layerName;
                    dialogRef.afterClosed().subscribe(function (val) {
                        if (val == -1) {
                            _this.editingLayer.getSource().removeFeature(e.feature);
                        }
                    });
                    console.log('add', e.feature);
                });
                break;
            case Actions.UPDATE:
                this.map.addInteraction(this.interactionSelect);
                this.interaction = new ol.interaction.Modify({
                    features: this.interactionSelect.getFeatures()
                });
                this.interactionDoubleClick = new ol.interaction.Select({
                    layers: [this.editingLayer],
                    condition: ol.events.condition.doubleClick
                });
                this.map.addInteraction(this.interactionDoubleClick);
                this.map.addInteraction(this.interaction);
                this.map.addInteraction(this.interactionSnap);
                this.dirty = {};
                this.interactionDoubleClick.getFeatures().on('add', function (e) {
                    console.log('double click', e.target);
                    var dialogRef = _this.dialog.open(FeatureEditDialog, { disableClose: true });
                    dialogRef.componentInstance.fields = _this.layerSchema;
                    dialogRef.componentInstance.feature = e.element;
                    dialogRef.componentInstance.action = _this.action;
                    dialogRef.componentInstance.layerName = _this.layerName;
                    dialogRef.componentInstance.layerWMS = _this.layerWMS;
                    dialogRef.afterClosed().subscribe(function () {
                        _this.editingLayer.getSource().clear();
                        _this.editingLayer.getSource().refresh();
                        _this.layerWMS.getSource().updateParams({ "time": Date.now() });
                    });
                    console.log('add', e.element.getProperties());
                });
                this.interactionSelect.getFeatures().on('add', function (e) {
                    e.element.on('change', function (e) {
                        _this.dirty[e.target.getId()] = true;
                    });
                });
                this.interactionSelect.getFeatures().on('remove', function (e) {
                    var f = e.element;
                    if (_this.dirty[f.getId()]) {
                        delete _this.dirty[f.getId()];
                        //delete featureProperties.boundedBy;
                        var dialogRef = _this.dialog.open(FeatureEditDialog, { disableClose: true });
                        dialogRef.componentInstance.fields = _this.layerSchema;
                        dialogRef.componentInstance.feature = f;
                        dialogRef.componentInstance.action = _this.action;
                        dialogRef.componentInstance.layerName = _this.layerName;
                        dialogRef.componentInstance.layerWMS = _this.layerWMS;
                        dialogRef.afterClosed().subscribe(function () {
                            _this.editingLayer.getSource().clear();
                            _this.editingLayer.getSource().refresh();
                            _this.layerWMS.getSource().updateParams({ "time": Date.now() });
                        });
                        //transactWFS('update', clone);
                        // Abrir diálogo que se encargue de modificar propiedades y guardar
                    }
                });
                break;
            case Actions.DELETE:
                this.interaction = new ol.interaction.Select({
                    layers: [this.editingLayer]
                });
                this.interaction.getFeatures().on('add', function (e) {
                    //transactWFS('delete', e.target.item(0));
                    var dialogRef = _this.dialog.open(FeatureDeleteDialog, { disableClose: true });
                    dialogRef.componentInstance.layerName = _this.layerName;
                    dialogRef.componentInstance.gid = e.element.getProperties().gid;
                    dialogRef.afterClosed().subscribe(function (val) {
                        if (val == 0) {
                            console.log('okkk');
                            console.log('delete', e.target.item(0), e.element);
                        }
                        else {
                            console.log('err');
                        }
                        _this.interactionSelectPointerMove.getFeatures().clear();
                        _this.interaction.getFeatures().clear();
                        _this.editingLayer.getSource().clear();
                        _this.editingLayer.getSource().refresh();
                        //let layerWMS = this.getEditableLayers().find( l => l.get('name') == this.layerName );
                        //console.log(layerWMS);
                        _this.layerWMS.getSource().updateParams({ "time": Date.now() });
                    });
                });
                this.map.addInteraction(this.interaction);
                break;
            case Actions.PAN:
            default: return;
        }
        //this.layerChanged({ value : this.layerName })
    };
    EditLayerComponent.prototype.setActive = function (active) {
        if (this.controlActive == active)
            return;
        this.controlActive = active;
        if (!active) {
            this.map.removeInteraction(this.interaction);
            if (this.interactionSelect)
                this.interactionSelect.getFeatures().clear();
            this.map.removeInteraction(this.interactionSelect);
            this.map.removeInteraction(this.interactionDoubleClick);
        }
    };
    EditLayerComponent.prototype.getEditableLayers = function () {
        try {
            return this.map
                .getLayers()
                .getArray()
                .filter(function (l) { return l.get('group_capas_map') === true; })[0]
                .get('layers')
                .getArray()
                .filter(function (l) { return l.get('rol') == 'c' || l.get('rol') == 'e' || l.get('rol') == 'd'; });
        }
        catch (e) {
            return [];
        }
    };
    EditLayerComponent.prototype.startEditing = function (layerName) {
        var _this = this;
        if (this.editingLayer) {
            this.editingLayer.setMap(null);
        }
        var vectorSource = new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: function (extent) {
                return "http://localhost:8080/geoserver/betera/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=betera:" + layerName + "&outputFormat=application/json&srsname=EPSG:25830&bbox="
                    + extent.join(',') + ',EPSG:25830';
            },
            strategy: ol.loadingstrategy.bbox
        });
        this.editingLayer = new ol.layer.Vector({
            source: vectorSource
        });
        this.editingLayer.setMap(this.map);
        this.loading.setValue(true);
        this.http.get("/api/layers/schema/" + layerName)
            .subscribe(function (res) {
            var info = res.json();
            console.log(info);
            _this.layerSchema = info.layerSchema;
            _this.geometryType = info.geometryType;
            if (_this.action)
                _this.actionChanged({ value: _this.action });
            _this.loading.setValue(false);
        });
    };
    return EditLayerComponent;
}());
__decorate([
    core_1.Input('map'),
    __metadata("design:type", ol.Map)
], EditLayerComponent.prototype, "map", void 0);
EditLayerComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-layer',
        templateUrl: './edit-layer.component.html',
        styleUrls: ['./edit-layer.component.css'],
        providers: [ng2_loading_animate_1.LoadingAnimateService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdDialog])
], EditLayerComponent);
exports.EditLayerComponent = EditLayerComponent;
var FeatureEditDialog = (function () {
    function FeatureEditDialog(dialogRef, userLayersService) {
        this.dialogRef = dialogRef;
        this.userLayersService = userLayersService;
        this.excludedProperties = ['gid'];
        this.tabIdx = 1;
    }
    FeatureEditDialog.prototype.getGeomColumn = function () {
        return this.fields.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; });
    };
    FeatureEditDialog.prototype.ngOnInit = function () {
        //console.log('GUUU', this.fields, this.feature);
        //console.log(this.feature.getProperties())
        var geomColumnName = this.getGeomColumn().name;
        this.excludedProperties.push(geomColumnName);
        this.properties = this.feature.getProperties() || {};
        if (this.feature.get('gid')) {
            this.featureData = this.userLayersService.getFeatureData(this.layerName, this.feature.get('gid'));
        }
    };
    FeatureEditDialog.prototype.ngAfterViewInit = function () {
        this.dropzone.nativeElement.addEventListener('drop', this.handleFileSelect.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragover', this.handleDragOver.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
    };
    FeatureEditDialog.prototype.handleFileSelect = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
    };
    FeatureEditDialog.prototype.handleDragOver = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        this.dropzone.nativeElement.style.opacity = '0.3';
    };
    FeatureEditDialog.prototype.handleDragLeave = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
    };
    FeatureEditDialog.prototype.fileSelected = function (e) {
        console.log(e.target.files);
        this.selectedFile = e.target.files[0];
    };
    FeatureEditDialog.prototype.addData = function () {
        var _this = this;
        if (!this.dataUrl || this.dataUrl.length <= 0) {
            return;
        }
        this.userLayersService.addFeatureData(this.layerName, this.feature.get('gid'), this.dataUrl)
            .subscribe(function (e) {
            _this.featureData = _this.userLayersService.getFeatureData(_this.layerName, _this.feature.get('gid'));
        });
    };
    FeatureEditDialog.prototype.deleteData = function (id) {
        var _this = this;
        console.log('featureData', this.featureData);
        console.log('idoieodie', id);
        this.userLayersService.deleteFeatureData(this.layerName, this.feature.get('gid'), id)
            .subscribe(function (e) {
            _this.featureData = _this.userLayersService.getFeatureData(_this.layerName, _this.feature.get('gid'));
        });
    };
    FeatureEditDialog.prototype.uploadFile = function () {
        var _this = this;
        //let file = this.fileForm.nativeElement.files[0];
        console.log(this.selectedFile);
        if (this.selectedFile) {
            this.userLayersService.uploadData(this.layerName, this.feature.get('gid'), this.selectedFile)
                .subscribe(function (e) {
                _this.featureData = _this.userLayersService.getFeatureData(_this.layerName, _this.feature.get('gid'));
            });
        }
        //this.userLayersService.addFeatureData()
    };
    FeatureEditDialog.prototype.saveFeature = function () {
        var _this = this;
        console.log('SAVE FEATURE', this.action, this.layerName, Object.assign({}, this.properties), this.properties);
        var geometry = wktParser.writeFeature(this.feature);
        delete this.properties['geometry'];
        console.log('cccc', geometry);
        if (this.action == Actions.CREATE) {
            this.userLayersService.addFeature(this.layerName, geometry, this.properties)
                .subscribe(function (res) {
                console.log(res);
                var gid = res.gid;
                _this.feature.setProperties(_this.properties);
                _this.feature.set('gid', gid);
                _this.dialogRef.close();
            }, function (err) { return console.log(err.json()); });
        }
        else if (this.action == Actions.UPDATE) {
            this.userLayersService.editFeature(this.layerName, geometry, this.properties)
                .subscribe(function (e) {
                _this.feature.setProperties(_this.properties);
                _this.dialogRef.close();
            }, function (err) { return console.log(err.json()); });
        }
    };
    return FeatureEditDialog;
}());
__decorate([
    core_1.ViewChild('dropZone'),
    __metadata("design:type", core_1.ElementRef)
], FeatureEditDialog.prototype, "dropzone", void 0);
FeatureEditDialog = __decorate([
    core_1.Component({
        template: "\n        <md-tab-group [(selectedIndex)]=\"tabIdx\">\n          <md-tab label=\"Atributos\">\n          </md-tab>\n          <md-tab label=\"Datos\" [disabled]=\"action == 1\" style=\"overflow: hidden;\">\n          </md-tab>\n        </md-tab-group>\n        <div md-dialog-content>\n\n          <div *ngIf=\"tabIdx == 0\">\n            <div *ngFor=\"let field of fields\">\n                <md-input-container>\n                    <input [disabled]=\"excludedProperties.indexOf(field.name) >= 0\" mdInput [(ngModel)]=\"properties[field.name]\" placeholder=\"{{field.name}}\" value=\"{{ properties[field.name] }}\">\n                </md-input-container>\n                <br>\n            </div>\n          </div>\n\n          <div *ngIf=\"tabIdx == 1\">\n            <h4><md-icon>file_upload</md-icon> A\u00F1adir archivos o enlaces externos</h4>\n            <p md-subheader>A\u00F1ade un fichero</p>\n            <input id=\"input-file-id\" type=\"file\" style=\"display: none;\" (change)=\"fileSelected($event)\" name=\"data\" />\n            <label #dropZone for=\"input-file-id\" md-button class=\"mat-button\" style=\"border: 2px solid #000; margin-top: 16px; width: 100%; padding : 10px;\">\n              Selecciona el archivo\n            </label>\n            <button [disabled]=\"!this.selectedFile\" md-button (click)=\"uploadFile()\" style=\"width : 100%;\">Subir</button>\n            <md-list *ngIf=\"selectedFile\">\n              <h3 md-subheader>Archivos a subir</h3>\n              <md-list-item>\n                <md-icon md-list-avatar>attachment</md-icon>\n                <h4 md-line>{{selectedFile.name}}</h4>\n                <p md-line> {{selectedFile?.size | bytes}} {{selectedFile?.lastModified | date}} </p>\n              </md-list-item>\n            </md-list>\n            \n            <p md-subheader>A\u00F1ade un enlace externo</p>\n            \n            <md-input-container style=\"width : 100%;\">\n              <input mdInput [(ngModel)]=\"dataUrl\" type=\"url\">\n            </md-input-container>\n            <button md-button style=\"width : 100%;\" (click)=\"addData()\">Subir</button>\n            <md-list>\n              <h3 md-subheader>Archivos</h3>\n              <md-list-item *ngFor=\"let data of (featureData | async)\">\n                <md-icon md-list-icon>insert_drive_files</md-icon>\n                <h4 md-line>\n                  <a href=\"{{data.url}}\">{{data.url}}</a>\n                </h4>\n                <button md-mini-fab *ngIf=\" layerWMS && layerWMS.get('rol') == 'd' \" (click)=\"deleteData(data.id)\"><md-icon>remove</md-icon></button>\n              </md-list-item>\n            </md-list>\n          </div>\n\n        </div>\n        <div md-dialog-actions>\n          <button md-button (click)=\"dialogRef.close(-1)\">Cancelar</button>\n          <button md-button (click)=\"saveFeature()\">Guardar</button>\n        </div>\n    ",
        providers: [services_1.UserLayersService, bytes_pipe_1.BytesPipe]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        services_1.UserLayersService])
], FeatureEditDialog);
exports.FeatureEditDialog = FeatureEditDialog;
var FeatureDeleteDialog = (function () {
    function FeatureDeleteDialog(userLayersService, dialogRef) {
        this.userLayersService = userLayersService;
        this.dialogRef = dialogRef;
    }
    FeatureDeleteDialog.prototype.deleteFeature = function () {
        var _this = this;
        this.userLayersService.deleteFeature(this.layerName, this.gid)
            .subscribe(function (e) { _this.dialogRef.close(0), function (err) { _this.dialogRef.close(1); }; });
    };
    return FeatureDeleteDialog;
}());
FeatureDeleteDialog = __decorate([
    core_1.Component({
        template: "\n        <div md-dialog-content>\n            <h4>\u00BFDeseas eliminar la feature?</h4>\n            <ul>\n              <li>capa : {{layerName}}</li>\n              <li>gid  : {{gid}}</li>\n            </ul>\n        </div>\n        <div md-dialog-actions>\n          <button md-button (click)=\"dialogRef.close()\">Cancelar</button>\n          <button md-button (click)=\"deleteFeature()\">Eliminar</button>\n        </div>\n    ",
        providers: [services_1.UserLayersService]
    }),
    __metadata("design:paramtypes", [services_1.UserLayersService, material_1.MdDialogRef])
], FeatureDeleteDialog);
exports.FeatureDeleteDialog = FeatureDeleteDialog;
