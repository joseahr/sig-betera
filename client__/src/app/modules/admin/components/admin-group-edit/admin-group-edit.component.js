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
var ng2_loading_animate_1 = require("ng2-loading-animate");
var services_1 = require("../../services");
var AdminGroupEditComponent = (function () {
    function AdminGroupEditComponent(loading, adminService, dialogRef) {
        this.loading = loading;
        this.adminService = adminService;
        this.dialogRef = dialogRef;
    }
    AdminGroupEditComponent.prototype.ngOnInit = function () { };
    AdminGroupEditComponent.prototype.ngAfterViewInit = function () { };
    AdminGroupEditComponent.prototype.changeGroupName = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.updateGroup(this.groupData.id, this.groupData.name).subscribe(function () {
            _this.loading.setValue(false);
            _this.dialogRef.close('OK');
        });
    };
    return AdminGroupEditComponent;
}());
AdminGroupEditComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-group-edit',
        templateUrl: './admin-group-edit.component.html',
        styleUrls: ['./admin-group-edit.component.css'],
        providers: [services_1.AdminService]
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        services_1.AdminService,
        material_1.MdDialogRef])
], AdminGroupEditComponent);
exports.AdminGroupEditComponent = AdminGroupEditComponent;
