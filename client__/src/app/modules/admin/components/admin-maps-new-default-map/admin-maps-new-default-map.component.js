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
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var rxjs_1 = require("rxjs");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var AdminMapsNewDefaultMapComponent = (function () {
    function AdminMapsNewDefaultMapComponent(loading, snackbar, adminService, location) {
        this.loading = loading;
        this.snackbar = snackbar;
        this.adminService = adminService;
        this.location = location;
        this.allMapsNotDefault = rxjs_1.Observable.forkJoin(this.adminService.getAllMaps().map(function (res) { return res.json(); }), this.adminService.getAllDefaultMaps().map(function (res) { return res.json(); })).map(function (maps) {
            var allMaps = maps[0] || [];
            var defultMaps = maps[1] || [];
            return allMaps.filter(function (map) { return !defultMaps.find(function (dmap) { return map.id == dmap.id; }); });
        });
        /*this.allMapsNotDefault.subscribe(
          (data)=>{
            console.log('data', data)
          }
        )*/
    }
    AdminMapsNewDefaultMapComponent.prototype.ngOnInit = function () { };
    AdminMapsNewDefaultMapComponent.prototype.createDefaultMap = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.createDefaultMap(this.selectedMap).subscribe(function () {
            _this.loading.setValue(false);
            _this.location.back();
        }, function (err) {
            _this.loading.setValue(false);
            _this.snackbar.open("Error : " + err.json().msg, 'CERRAR', {
                duration: 2000
            });
        });
    };
    return AdminMapsNewDefaultMapComponent;
}());
AdminMapsNewDefaultMapComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-maps-new-default-map',
        templateUrl: './admin-maps-new-default-map.component.html',
        styleUrls: ['./admin-maps-new-default-map.component.css'],
        providers: [services_1.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdSnackBar,
        services_1.AdminService,
        common_1.Location])
], AdminMapsNewDefaultMapComponent);
exports.AdminMapsNewDefaultMapComponent = AdminMapsNewDefaultMapComponent;
