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
var openlayers_1 = require("openlayers");
var UserLayersService = (function () {
    function UserLayersService(http) {
        this.http = http;
        this.wktParser = new openlayers_1.format.WKT();
    }
    UserLayersService.prototype.getFeatures = function (featureIntersect, layers) {
        var wkt = this.wktParser.writeFeature(featureIntersect, {
            dataProjection: 'EPSG:25830',
            featureProjection: 'EPSG:25830'
        });
        console.log(featureIntersect, 'WKT', wkt, 'featureToSend');
        return this.http.post('/api/layers/features', {
            wkt: wkt, layers: layers
        }).map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.getFeatureData = function (layerName, gid) {
        return this.http.get("/api/layers/" + layerName + "/data/" + gid)
            .map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.uploadData = function (layerName, gid, file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post("/api/layers/" + layerName + "/data/" + gid + "/upload", formData);
    };
    UserLayersService.prototype.addFeatureData = function (layerName, gid, url) {
        return this.http.post("/api/layers/" + layerName + "/data/" + gid, { url: url })
            .map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.deleteFeatureData = function (layerName, gid, id) {
        return this.http.delete("/api/layers/" + layerName + "/data/" + gid, { body: { id: id } })
            .map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.addFeature = function (layerName, geometry, properties) {
        return this.http.post("/api/layers/" + layerName + "/transaction", {
            geometry: geometry, properties: properties
        }).map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.editFeature = function (layerName, geometry, properties) {
        return this.http.put("/api/layers/" + layerName + "/transaction", {
            geometry: geometry, properties: properties
        });
    };
    UserLayersService.prototype.deleteFeature = function (layerName, gid) {
        return this.http.delete("/api/layers/" + layerName + "/transaction", {
            body: {
                gid: gid
            }
        });
    };
    return UserLayersService;
}());
UserLayersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserLayersService);
exports.UserLayersService = UserLayersService;
