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
var ol = require("openlayers");
var material_1 = require("@angular/material");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var MeasureInteraction;
(function (MeasureInteraction) {
    MeasureInteraction[MeasureInteraction["Length"] = 1] = "Length";
    MeasureInteraction[MeasureInteraction["Area"] = 2] = "Area";
})(MeasureInteraction || (MeasureInteraction = {}));
var MeasureComponent = (function () {
    function MeasureComponent(snackbar, zone, loading) {
        this.snackbar = snackbar;
        this.zone = zone;
        this.loading = loading;
        this.wgs84Sphere = new ol.Sphere(6378137);
        this.active = false;
        this.activeInteraction = null;
        this.measureLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        });
        this.measureLayer.set('name', 'MeasureLayer');
    }
    MeasureComponent.prototype.setActive = function (value, interaction) {
        if (!value) {
            this.active = false;
            this.activeInteraction = null;
            this.measureLayer.getSource().clear();
            //this.map.removeLayer(this.measureLayer);
            this.measureLayer.setMap(null);
            this.map.removeInteraction(this.drawInteraction);
            if (this.listenerGeomChange) {
                ol.Observable.unByKey(this.listenerGeomChange);
            }
            //this.dialogCollapsed = false;
            this.snackbar._openedSnackBarRef ? this.snackbar._openedSnackBarRef.dismiss() : '';
        }
        else {
            if (!interaction)
                return;
            this.active = true;
            this.setInteraction(interaction);
            this.addLayer();
        }
    };
    MeasureComponent.prototype.addLayer = function () {
        this.measureLayer.setMap(this.map);
    };
    MeasureComponent.prototype.setInteraction = function (interaction) {
        //console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
        if (interaction == this.activeInteraction)
            return;
        var snackRef = this.snackbar.openFromComponent(MeasureSnackBar);
        snackRef.instance.interactionType = interaction;
        if (interaction == MeasureInteraction.Length) {
            ol.Observable.unByKey(this.listenerGeomChange);
            this.map.removeInteraction(this.drawInteraction);
            this.activeInteraction = MeasureInteraction.Length;
        }
        else {
            ol.Observable.unByKey(this.listenerGeomChange);
            this.map.removeInteraction(this.drawInteraction);
            this.activeInteraction = MeasureInteraction.Area;
        }
        this.addInteraction(interaction);
    };
    MeasureComponent.prototype.addInteraction = function (interaction) {
        var _this = this;
        var type = (interaction == MeasureInteraction.Length ? 'LineString' : 'Polygon');
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
        var sketch;
        this.drawInteraction.on('drawstart', function (evt) {
            _this.measureLayer.getSource().clear();
            sketch = evt.feature;
            _this.listenerGeomChange = sketch.getGeometry().on('change', function (evt) {
                var geom = evt.target;
                var measure = (geom instanceof ol.geom.Polygon ? _this.formatArea(geom) : _this.formatLength(geom));
                _this.snackbar._openedSnackBarRef.instance.measure = measure;
                _this.snackbar._openedSnackBarRef.instance.interactionType = _this.activeInteraction;
            });
        }, this);
        this.drawInteraction.on('drawend', function () {
            sketch = null;
            ol.Observable.unByKey(_this.listenerGeomChange);
        }, this);
    };
    MeasureComponent.prototype.formatArea = function (polygon) {
        var area;
        var sourceProj = this.map.getView().getProjection();
        var geom = (polygon.clone().transform(sourceProj, 'EPSG:4326'));
        var coordinates = geom.getLinearRing(0).getCoordinates();
        return Math.abs(this.wgs84Sphere.geodesicArea(coordinates));
    };
    MeasureComponent.prototype.formatLength = function (line) {
        var length = 0;
        var coordinates = line.getCoordinates();
        var sourceProj = this.map.getView().getProjection();
        for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
            var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
            var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
            length += this.wgs84Sphere.haversineDistance(c1, c2);
        }
        return length;
    };
    return MeasureComponent;
}());
__decorate([
    core_1.Input('map'),
    __metadata("design:type", ol.Map)
], MeasureComponent.prototype, "map", void 0);
MeasureComponent = __decorate([
    core_1.Component({
        selector: 'app-measure',
        template: ''
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar,
        core_1.NgZone,
        ng2_loading_animate_1.LoadingAnimateService])
], MeasureComponent);
exports.MeasureComponent = MeasureComponent;
var MeasureSnackBar = (function () {
    function MeasureSnackBar() {
        this.Math = Math;
    }
    return MeasureSnackBar;
}());
MeasureSnackBar = __decorate([
    core_1.Component({
        templateUrl: './measure.component.html',
        styleUrls: ['./measure.component.css']
    }),
    __metadata("design:paramtypes", [])
], MeasureSnackBar);
exports.MeasureSnackBar = MeasureSnackBar;
