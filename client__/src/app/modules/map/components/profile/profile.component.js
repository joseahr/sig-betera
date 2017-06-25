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
var ng2_loading_animate_1 = require("ng2-loading-animate");
var ol = require("openlayers");
var material_1 = require("@angular/material");
var services_1 = require("../../services");
var ProfileComponent = (function () {
    function ProfileComponent(loading, snackbar, profileService, zone) {
        this.loading = loading;
        this.snackbar = snackbar;
        this.profileService = profileService;
        this.zone = zone;
        this.active = false;
        this.opened = false;
        this.events = [];
        this.dataChartArray = [];
        this.loadLayers();
        this.loadInteraction();
    }
    ProfileComponent.prototype.loadLayers = function () {
        this.pointLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            style: [
                new ol.style.Style({
                    /*image: new ol.style.Icon({
                      src: 'https://rawcdn.githack.com/google/material-design-icons/master/maps/svg/production/ic_add_location_48px.svg'
                    })*/
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: '#000'
                        }),
                        fill: new ol.style.Fill({ color: '#f7f7f7' })
                    })
                })
            ]
        });
        this.drawProfileLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            style: [
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
    };
    ProfileComponent.prototype.loadInteraction = function () {
        this.drawProfileInteraction = new ol.interaction.Draw({
            type: 'LineString',
            source: this.drawProfileLayer.getSource()
        });
    };
    ProfileComponent.prototype.setActive = function (value) {
        if (value) {
            this.enableDraw();
            this.active = true;
            this.snackbar.open('Dibuja un perfil', 'CERRAR');
        }
        else {
            this.disableDraw();
            this.active = false;
            if (this.snackbar._openedSnackBarRef) {
                this.snackbar._openedSnackBarRef.dismiss();
            }
        }
    };
    ProfileComponent.prototype.enableDraw = function () {
        var _this = this;
        var drawStart = this.drawProfileInteraction.on('drawstart', function (e) {
            _this.drawProfileLayer.getSource().clear();
            _this.drawProfileLayer.getSource().changed();
            _this.pointLayer.getSource().clear();
            _this.pointLayer.getSource().changed();
            _this.profileGeom = null;
            var feature = e.feature;
            feature.getGeometry().on('change', function () {
                var length = (feature.getGeometry().getLength() || 0).toFixed(3);
                if (!_this.snackbar._openedSnackBarRef) {
                    _this.snackbar.open("Perfil dibujado : " + length + " metros", 'CERRAR');
                }
                else {
                    _this.snackbar._openedSnackBarRef.instance.message = "Perfil dibujado : " + length + " metros";
                }
            });
        });
        var drawEnd = this.drawProfileInteraction.on('drawend', function (e) {
            _this.zone.run(function () { return _this.loading.setValue(true); });
            _this.profileService.getProfile(e.feature).subscribe(function (res) {
                _this.zone.run(function () {
                    if (_this.snackbar._openedSnackBarRef) {
                        _this.snackbar._openedSnackBarRef.dismiss();
                    }
                    console.log(res, 'ddddd');
                    console.log(res.json());
                    _this.profileGeom = new ol.geom.LineString(res.json().coordinates, 'XYZ');
                    _this.setProfile();
                    _this.loading.setValue(false);
                });
            }, function (err) {
                _this.loading.setValue(false);
            });
        });
        this.events.push(drawStart, drawEnd);
        //this.map.addLayer(this.drawProfileLayer);
        //this.map.addLayer(this.pointLayer);
        this.drawProfileLayer.setMap(this.map);
        this.pointLayer.setMap(this.map);
        this.map.addInteraction(this.drawProfileInteraction);
    };
    ProfileComponent.prototype.disableDraw = function () {
        this.events.forEach(function (e) { ol.Observable.unByKey(e); });
        this.drawProfileLayer.getSource().clear();
        this.pointLayer.getSource().clear();
        //this.map.removeLayer(this.drawProfileLayer);
        //this.map.removeLayer(this.pointLayer);
        this.drawProfileLayer.setMap(null);
        this.pointLayer.setMap(null);
        this.map.removeInteraction(this.drawProfileInteraction);
        this.profileGeom = null;
        this.events = [];
    };
    ProfileComponent.prototype.setOpened = function (bool) {
        this.opened = bool;
    };
    ProfileComponent.prototype.saveInstance = function (chartInstance) {
        var _this = this;
        this.chart = chartInstance;
        //console.log(this.chart.options);
        //this.chart.options = this.options;
        if (this.chart.series[0])
            this.chart.series[0].remove();
        this.chart.addSeries({ name: 'Perfil', data: this.dataChartArray });
        setTimeout(function () {
            _this.chart.reflow();
            //this.chart.redraw();
        }, 500);
    };
    ProfileComponent.prototype.setProfile = function () {
        var _this = this;
        if (!this.profileGeom)
            return;
        this.dataChartArray = [];
        var wgs84Sphere = new ol.Sphere(6378137);
        var profile3D = new ol.Feature({
            geometry: new ol.geom.LineString(this.profileGeom.getCoordinates().map(function (c) { return c.slice(0, 2); }))
        });
        this.drawProfileLayer.getSource().clear();
        this.drawProfileLayer.getSource().addFeature(profile3D);
        // [ [dist, cota],... ]
        this.dataChartArray = [];
        var dist = 0;
        var points = this.profileGeom.getCoordinates();
        //console.log('last', this.profileGeom.getLastCoordinate())
        this.dataChartArray.push([dist, points[0][2]]);
        for (var i = 0; i < points.length - 1; i++) {
            //console.log('pooooint', points[i])
            //this.dataChartArray.push([dist, points[i][2]]);
            var p = ol.proj.transform(points[i], this.map.getView().getProjection(), 'EPSG:4326');
            var next = ol.proj.transform(points[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
            dist += wgs84Sphere.haversineDistance(p, next);
            this.dataChartArray.push([dist, points[i + 1][2]]);
        }
        //console.log(dist, points[points.length - 1], i, points.length, points[i]);
        //console.log(this.dataChartArray);
        this.setOpened(true);
        if (this.chart) {
            if (this.chart.series[0])
                this.chart.series[0].remove();
            this.zone.run(function () {
                _this.chart.addSeries({ name: 'Perfil', data: _this.dataChartArray });
                setTimeout(function () {
                    _this.chart.reflow();
                    //this.chart.redraw();
                }, 500);
                _this.map.render();
            });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.options = {
            title: { text: 'Perfil seleccionado' },
            chart: { zoomType: 'x' },
            series: [
                { name: 'Perfil', data: this.dataChartArray }
            ]
        };
    };
    ProfileComponent.prototype.onDeselectProfile = function () {
        this.pointLayer.getSource().clear();
        this.pointLayer.getSource().changed();
    };
    ProfileComponent.prototype.onSelectProfile = function (event) {
        var dist = event.context.x;
        var coordinate = this.getClosestPointToDistance(dist);
        var featurePoint = new ol.Feature({
            geometry: new ol.geom.Point(coordinate)
        });
        //console.log(coordinate);
        this.pointLayer.getSource().clear();
        this.pointLayer.getSource().addFeature(featurePoint);
        this.pointLayer.getSource().changed();
        var view = this.map.getView();
        this.map.once('postcompose', function () { return view.fit(featurePoint.getGeometry(), { duration: 100, maxZoom: 15 }); });
    };
    ProfileComponent.prototype.getClosestPointToDistance = function (distance) {
        var wgs84Sphere = new ol.Sphere(6378137);
        var coords = this.profileGeom.getCoordinates();
        var distance_ = 0;
        if (distance == 0)
            return coords[0];
        for (var i = 0; i < coords.length - 1; i++) {
            var p = ol.proj.transform(coords[i], this.map.getView().getProjection(), 'EPSG:4326');
            var next = ol.proj.transform(coords[i + 1], this.map.getView().getProjection(), 'EPSG:4326');
            distance_ += wgs84Sphere.haversineDistance(p, next);
            //console.log(distance_, distance);
            if (distance_ >= distance) {
                //console.log('i + 1', i + 1, coords[i + 1]);
                return coords[i + 1];
            }
        }
    };
    ProfileComponent.prototype.downloadProfile = function () {
        this.chart.exportChart({
            filename: 'perfil'
        });
    };
    return ProfileComponent;
}());
__decorate([
    core_1.Input('map'),
    __metadata("design:type", ol.Map)
], ProfileComponent.prototype, "map", void 0);
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-map-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css'],
        providers: [services_1.Profile3DService]
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdSnackBar,
        services_1.Profile3DService,
        core_1.NgZone])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
