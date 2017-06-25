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
var material_1 = require("@angular/material");
var services_1 = require("../../services");
var AddWmsComponent = (function () {
    function AddWmsComponent(capabilitiesService, dialogRef) {
        this.capabilitiesService = capabilitiesService;
        this.dialogRef = dialogRef;
        this.capasSeleccionadas = [];
    }
    AddWmsComponent.prototype.ngOnInit = function () {
    };
    AddWmsComponent.prototype.onChangeCheckbox = function (event, name) {
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
    AddWmsComponent.prototype.getCapabilities = function () {
        var _this = this;
        if (!this.serviceUrl) {
            this.error = 'Debe añadir la url del servicio';
        }
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var url = this.serviceUrl.replace(extract, '') + '?service=WMS&request=GetCapabilities';
        this.capabilitiesService.getCapabilities(url).subscribe(function (layers) {
            _this.error = null;
            _this.capas = layers.json();
        }, function (error) {
            _this.error = error.json();
        });
    };
    AddWmsComponent.prototype.closeWithData = function () {
        var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
        var extract = (this.serviceUrl.match(regex) || []).join('');
        var serviceURL = this.serviceUrl.replace(extract, '');
        var layers = this.capasSeleccionadas;
        this.dialogRef.close({ serviceURL: serviceURL, layers: layers });
    };
    AddWmsComponent.prototype.reset = function () {
        this.capas = null;
        this.capasSeleccionadas = [];
    };
    return AddWmsComponent;
}());
AddWmsComponent = __decorate([
    core_1.Component({
        selector: 'app-add-wms',
        templateUrl: './add-wms.component.html',
        styleUrls: ['./add-wms.component.css'],
        providers: [services_1.WMSCapabilitiesService]
    }),
    __metadata("design:paramtypes", [services_1.WMSCapabilitiesService, material_1.MdDialogRef])
], AddWmsComponent);
exports.AddWmsComponent = AddWmsComponent;
