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
var proj4 = require("proj4");
ol.proj.setProj4(proj4);
var ProjectionService = (function () {
    function ProjectionService(http) {
        this.http = http;
        this.defaultProjections = [{
                code: '25830',
                name: 'ETRS89 / UTM zone 30N (X, Y)',
                proj4: '+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
                bbox: [44, -9.6, 35.2, 4.6]
            }, {
                code: '4258',
                name: 'ETRS89 / UTM zone 30 (lon/lat)',
                proj4: '+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs',
                bbox: [44, -9.6, 35.2, 4.6]
            }];
    }
    ProjectionService.prototype.getProjDef = function (epsgCode) {
        return this.http.get("http://epsg.io/" + epsgCode + ".proj4");
    };
    ProjectionService.prototype.setProjection = function (map, code) {
        var proj = this.defaultProjections.find(function (p) { return p.code == "" + code; });
        if (!proj) {
            return;
        }
        proj4.defs("EPSG:" + code, proj.proj4);
        var projection = ol.proj.get("EPSG:" + code);
        var fromLonLat = ol.proj.getTransform('EPSG:4326', projection);
        var bbox = proj.bbox;
        var extent = ol.extent.applyTransform([bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
        projection.setExtent(extent);
        var zoom = map.getView().getZoom();
        var center = ol.proj.transform(map.getView().getCenter(), map.getView().getProjection(), projection);
        var view = new ol.View({ projection: projection, zoom: zoom, center: center });
        map.setView(view);
    };
    ProjectionService.prototype.getDefaultProjection = function (code) {
        var proj = this.defaultProjections.find(function (p) { return p.code == code; });
        if (!proj)
            return null;
        proj4.defs("EPSG:" + code, proj.proj4);
        var projection = ol.proj.get("EPSG:" + code);
        var fromLonLat = ol.proj.getTransform('EPSG:4326', projection);
        var bbox = proj.bbox;
        var extent = ol.extent.applyTransform([bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
        projection.setExtent(extent);
        return projection;
    };
    return ProjectionService;
}());
ProjectionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectionService);
exports.ProjectionService = ProjectionService;
