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
var services_1 = require("../../services");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var ChangePasswordTokenComponent = (function () {
    function ChangePasswordTokenComponent(authService, route, router, snackbar, loading) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.snackbar = snackbar;
        this.loading = loading;
    }
    ChangePasswordTokenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.params.token;
        this.token = token;
        this.loading.setValue(true);
        this.authService.isValidToken(token)
            .subscribe(function () {
            _this.loading.setValue(false);
        }, function (err) {
            _this.loading.setValue(false);
            _this.snackbar.open('El token no es válido o ha expirado', 'CERRAR', { duration: 1500 })
                .afterDismissed()
                .subscribe(function () {
                _this.router.navigateByUrl('/');
            });
        });
    };
    ChangePasswordTokenComponent.prototype.updatePassword = function () {
        var _this = this;
        if (!this.password || this.password !== this.repassword) {
            return this.snackbar.open('Las contraseñas deben coincidir', 'CERRAR', { duration: 1500 });
        }
        if (this.password.length < 5) {
            return this.snackbar.open('Las contraseña debe tener al menos 5 caracteres', 'CERRAR', { duration: 1500 });
        }
        this.loading.setValue(true);
        this.authService.updatePassword(this.token, this.password, this.repassword)
            .subscribe(function () {
            _this.loading.setValue(false);
            _this.snackbar.open('Contraseña actualizada con éxito', 'CERRAR', { duration: 1500 })
                .afterDismissed()
                .subscribe(function () {
                _this.router.navigateByUrl('/');
            });
        }, function (err) {
            _this.loading.setValue(false);
            _this.snackbar.open('Hubo un error actualizando la contraseña', 'CERRAR', { duration: 1500 });
        });
    };
    return ChangePasswordTokenComponent;
}());
ChangePasswordTokenComponent = __decorate([
    core_1.Component({
        selector: 'app-change-password-token',
        templateUrl: './change-password-token.component.html',
        styleUrls: ['./change-password-token.component.css'],
        providers: [services_1.AuthService]
    }),
    __metadata("design:paramtypes", [services_1.AuthService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _c || Object, typeof (_d = typeof ng2_loading_animate_1.LoadingAnimateService !== "undefined" && ng2_loading_animate_1.LoadingAnimateService) === "function" && _d || Object])
], ChangePasswordTokenComponent);
exports.ChangePasswordTokenComponent = ChangePasswordTokenComponent;
var _a, _b, _c, _d;
