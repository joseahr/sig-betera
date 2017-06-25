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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var rxjs_1 = require("rxjs");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var AdminUserDetailsComponent = (function () {
    function AdminUserDetailsComponent(loading, route, location, adminService) {
        this.loading = loading;
        this.route = route;
        this.location = location;
        this.adminService = adminService;
        this.getData();
    }
    AdminUserDetailsComponent.prototype.ngOnInit = function () { };
    AdminUserDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminUserDetailsComponent.prototype.getData = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        rxjs_1.Observable.forkJoin(this.adminService.getUserDetail(params.id).map(function (res) { return res.json(); }), this.adminService.getAllGroups().map(function (res) { return res.json(); })).map(function (data) {
            var userDetail = data[0];
            userDetail.not_assigned_maps = userDetail.not_assigned_maps || [];
            userDetail.maps = userDetail.maps || [];
            var userGroups = userDetail.grupos || [];
            var allGroups = data[1] || [];
            return [userDetail, allGroups.filter(function (g) { return !userGroups.find(function (gg) { return g.id == gg.id; }); })];
        }).subscribe(function (data) {
            _this.loading.setValue(false);
            _this.userDetail = data[0];
            _this.allNotUserGroups = data[1];
        });
    };
    AdminUserDetailsComponent.prototype.addGroup = function () {
        var _this = this;
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        this.adminService.addUserGroup(params.id, this.selectedGroupToAdd).subscribe(function () {
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.deleteGroup = function (groupName) {
        var _this = this;
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        this.adminService.deleteUserGroup(params.id, groupName).subscribe(function () {
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.addUserMap = function () {
        var _this = this;
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        this.adminService.addUserMap(params.id, this.selectedMapToAdd).subscribe(function () {
            //let map = this.userDetail.not_assigned_maps.find( m => m.id == this.selectedMapToAdd );
            //console.log(map, 'map');
            //this.userDetail.maps.push(map);
            //this.userDetail.not_assigned_maps = this.userDetail.not_assigned_maps.filter( m => m.id != this.selectedMapToAdd );
            //console.log(map, 'map');
            //this.selectedMapToAdd = null;
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.deleteUserMap = function (map) {
        var _this = this;
        this.loading.setValue(true);
        //console.log(map);
        var params = this.route.snapshot.params;
        this.adminService.deleteUserMap(params.id, map.id).subscribe(function () {
            //this.userDetail.not_assigned_maps.push(map);
            //this.userDetail.maps = this.userDetail.maps.filter( m => m.id != map.id );
            _this.getData();
        });
    };
    AdminUserDetailsComponent.prototype.changeRolOfLayer = function (event, layer) {
        var _this = this;
        //console.log(event, layer);
        var params = this.route.snapshot.params;
        var id_user = params.id;
        var oldValue = layer.rol;
        var newValue = event.value;
        var query = null;
        if (oldValue == 'r') {
            /* Ejecutamos un insert PUT */
            query = this.adminService.insertUserRol(id_user, layer.id_layer, newValue);
        }
        else if (newValue == 'r') {
            /* Ejecutamos un delete */
            query = this.adminService.deleteUserRol(id_user, layer.id_layer);
        }
        else {
            /* Ejecutamos un Update */
            query = this.adminService.updateUserRol(id_user, layer.id_layer, newValue);
        }
        this.loading.setValue(true);
        query.subscribe(function () {
            layer.rol = newValue;
            _this.loading.setValue(false);
            //console.log('Actualizado correctamente');
        });
    };
    return AdminUserDetailsComponent;
}());
AdminUserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-user-details',
        templateUrl: './admin-user-details.component.html',
        styleUrls: ['./admin-user-details.component.css'],
        providers: [services_1.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        router_1.ActivatedRoute,
        common_1.Location,
        services_1.AdminService])
], AdminUserDetailsComponent);
exports.AdminUserDetailsComponent = AdminUserDetailsComponent;
