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
var bytes_pipe_1 = require("angular-pipes/src/math/bytes.pipe");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var AdminLayersNewLayerComponent = (function () {
    function AdminLayersNewLayerComponent(loading, adminService) {
        this.loading = loading;
        this.adminService = adminService;
        this.files = [];
        this.layerName = '';
        this.error = null;
    }
    AdminLayersNewLayerComponent.prototype.ngOnInit = function () { };
    AdminLayersNewLayerComponent.prototype.ngAfterViewInit = function () {
        this.dropzone.nativeElement.addEventListener('drop', this.handleFileSelect.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragover', this.handleDragOver.bind(this), false);
        this.dropzone.nativeElement.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
    };
    AdminLayersNewLayerComponent.prototype.onChange = function (event) {
        this.error = null;
        this.files = event.target.files;
    };
    AdminLayersNewLayerComponent.prototype.handleFileSelect = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
        this.files = evt.dataTransfer.files; // FileList object.
    };
    AdminLayersNewLayerComponent.prototype.handleDragOver = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        this.dropzone.nativeElement.style.opacity = '0.3';
    };
    AdminLayersNewLayerComponent.prototype.handleDragLeave = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dropzone.nativeElement.style.opacity = '1';
    };
    AdminLayersNewLayerComponent.prototype.uploadSHP = function () {
        var _this = this;
        this.error = null;
        var layerName = this.layerName;
        var formData = new FormData();
        var fileCount = this.files.length;
        if (fileCount == 0) {
            return;
        }
        for (var i = 0; i < fileCount; i++) {
            formData.append('shp[]', this.files.item(i));
        }
        this.loading.setValue(true);
        this.adminService.postLayer(formData, layerName).subscribe(function (data) {
            //console.log('Sa subio');
            _this.files = [];
            _this.layerName = '';
            _this.loading.setValue(false);
        }, function (error) {
            //console.log(error.json(), 'jsooon');
            _this.error = error.json().msg;
            _this.loading.setValue(false);
        });
    };
    return AdminLayersNewLayerComponent;
}());
__decorate([
    core_1.ViewChild('dropZone'),
    __metadata("design:type", core_1.ElementRef)
], AdminLayersNewLayerComponent.prototype, "dropzone", void 0);
AdminLayersNewLayerComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-layers-new-layer',
        templateUrl: './admin-layers-new-layer.component.html',
        styleUrls: ['./admin-layers-new-layer.component.css'],
        providers: [services_1.AdminService, bytes_pipe_1.BytesPipe],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        services_1.AdminService])
], AdminLayersNewLayerComponent);
exports.AdminLayersNewLayerComponent = AdminLayersNewLayerComponent;
