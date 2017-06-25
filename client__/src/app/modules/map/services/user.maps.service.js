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
var UserMapsService = (function () {
    function UserMapsService(http) {
        this.http = http;
    }
    UserMapsService.prototype.getUserMaps = function () {
        var _this = this;
        return this.http.get('/api/maps')
            .map(function (res) {
            //console.log(res.json());
            var listOfMaps = res.json();
            return listOfMaps.map(function (mapa, index, arr) {
                mapa.layers = (mapa.layers || []);
                mapa.baselayers = (mapa.baselayers || []);
                var capas = (mapa.baselayers || []).concat((mapa.layers || []));
                var orden = mapa.orden;
                capas.sort(function (a, b) {
                    var num = (_this.findPositionInOrder(a.id, a.type, orden) > _this.findPositionInOrder(b.id, b.type, orden))
                        ? 1 : -1;
                    return num;
                })
                    .reverse();
                mapa.capas = capas;
                return mapa;
            });
        });
    };
    UserMapsService.prototype.findPositionInOrder = function (lid, ltype, orderList) {
        return orderList.reduce(function (a, b) {
            if (b.layer_type == ltype && lid === b.id_layer)
                a = b.position;
            return a;
        }, null);
    };
    return UserMapsService;
}());
UserMapsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserMapsService);
exports.UserMapsService = UserMapsService;
