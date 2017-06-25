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
var auth_service_1 = require("../services/auth.service");
var material_1 = require("@angular/material");
//localStorage.setItem('authUser', JSON.stringify({ rol : 'admin'}));
var CanActivateAdmin = (function () {
    function CanActivateAdmin(authService, snackbar) {
        this.authService = authService;
        this.snackbar = snackbar;
    }
    CanActivateAdmin.prototype.canActivate = function () {
        var _this = this;
        return this
            .authService
            .isAuthenticatedAsAdmin()
            .do(function (result) {
            if (!result) {
                _this.snackbar.open('Debes ser administrador para acceder.', 'CERRAR', { duration: 2500 });
            }
        });
    };
    return CanActivateAdmin;
}());
CanActivateAdmin = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        material_1.MdSnackBar])
], CanActivateAdmin);
exports.CanActivateAdmin = CanActivateAdmin;
