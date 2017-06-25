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
var rxjs_1 = require("rxjs");
var Profile3DService = (function () {
    function Profile3DService(http) {
        this.http = http;
        this.wktParser = new ol.format.WKT();
    }
    Profile3DService.prototype.getProfile = function (featureLS) {
        if (featureLS.getGeometry().getType() != 'LineString') {
            console.log('[ProfileService] - Debe pasar como parámetro un Feature de tipo LS');
            return rxjs_1.Observable.throw('[ProfileService] - Debe pasar como parámetro un Feature de tipo LS');
        }
        else {
            var wkt = this.wktParser.writeFeature(featureLS);
            return this.http.post('/api/raster/perfil', {
                wkt: wkt
            });
        }
    };
    return Profile3DService;
}());
Profile3DService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Profile3DService);
exports.Profile3DService = Profile3DService;
