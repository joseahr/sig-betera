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
var ng2_loading_animate_1 = require("ng2-loading-animate");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var AdminMapsNewMapComponent = (function () {
    function AdminMapsNewMapComponent(loading, snackbar, adminService, location) {
        this.loading = loading;
        this.snackbar = snackbar;
        this.adminService = adminService;
        this.location = location;
        this.mapName = '';
    }
    AdminMapsNewMapComponent.prototype.ngOnInit = function () { };
    AdminMapsNewMapComponent.prototype.createMap = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.createMap(this.mapName).subscribe(function () {
            _this.loading.setValue(false);
            _this.location.back();
        }, function (err) {
            _this.loading.setValue(false);
            _this.snackbar.open("Error : " + err.json(), 'CERRAR', {
                duration: 2000
            });
        });
    };
    return AdminMapsNewMapComponent;
}());
AdminMapsNewMapComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-maps-new-map',
        templateUrl: './admin-maps-new-map.component.html',
        styleUrls: ['./admin-maps-new-map.component.css'],
        providers: [services_1.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdSnackBar,
        services_1.AdminService,
        common_1.Location])
], AdminMapsNewMapComponent);
exports.AdminMapsNewMapComponent = AdminMapsNewMapComponent;
