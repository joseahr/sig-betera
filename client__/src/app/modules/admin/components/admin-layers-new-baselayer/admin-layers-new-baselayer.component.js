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
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../../map/services");
var services_2 = require("../../services");
var AdminLayersNewBaselayerComponent = (function () {
    function AdminLayersNewBaselayerComponent(loading, capabilitiesService, adminService) {
        this.loading = loading;
        this.capabilitiesService = capabilitiesService;
        this.adminService = adminService;
        this.capasSeleccionadas = [];
        this.serviceURLInputDisabled = false;
    }
    AdminLayersNewBaselayerComponent.prototype.ngOnInit = function () {
    };
    AdminLayersNewBaselayerComponent.prototype.onChangeCheckbox = function (event, name) {
        //console.log(event, name);
        var checked = event.checked;
        if (!checked) {
            this.capasSeleccionadas =
                this.capasSeleccionadas.filter(function (c) { return c.Name !== name; });
        }
        else {
            var capa = this.capas.find(function (c) { return c.Name === name; });
            this.capasSeleccionadas.push(capa);
        }
    };
    AdminLayersNewBaselayerComponent.prototype.getCapabilities = function () {
        var _this = this;
        if (!this.serviceUrl) {
            this.error = 'Debe añadir la url del servicio';
        }
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var url = this.serviceUrl.replace(extract, '') + '?service=WMS&request=GetCapabilities';
        this.loading.setValue(true);
        this.capabilitiesService.getCapabilities(url).subscribe(function (layers) {
            _this.loading.setValue(false);
            _this.error = null;
            _this.capas = layers.json();
            _this.serviceURLInputDisabled = true;
        }, function (error) {
            _this.loading.setValue(false);
            _this.error = error.json();
        });
    };
    AdminLayersNewBaselayerComponent.prototype.addBaseLayer = function () {
        var _this = this;
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var serviceURL = this.serviceUrl.replace(extract, '');
        var layers = this.capasSeleccionadas.map(function (l) { return l.Name; });
        //console.log(serviceURL);
        this.loading.setValue(true);
        this.adminService.postBaseLayer(this.baselayerName, serviceURL, layers).subscribe(function () {
            _this.loading.setValue(false);
            _this.serviceUrl = '';
            _this.reset();
        }, function (err) {
            _this.loading.setValue(false);
            _this.error = err.json();
        });
    };
    AdminLayersNewBaselayerComponent.prototype.reset = function () {
        this.serviceURLInputDisabled = false;
        this.serviceUrl = '';
        this.capas = null;
        this.capasSeleccionadas = [];
    };
    return AdminLayersNewBaselayerComponent;
}());
AdminLayersNewBaselayerComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-layers-new-baselayer',
        templateUrl: './admin-layers-new-baselayer.component.html',
        styleUrls: ['./admin-layers-new-baselayer.component.css'],
        providers: [services_2.AdminService, services_1.WMSCapabilitiesService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        services_1.WMSCapabilitiesService,
        services_2.AdminService])
], AdminLayersNewBaselayerComponent);
exports.AdminLayersNewBaselayerComponent = AdminLayersNewBaselayerComponent;
