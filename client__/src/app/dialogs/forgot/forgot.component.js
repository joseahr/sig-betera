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
var services_1 = require("../../services");
var material_1 = require("@angular/material");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var ForgotComponent = (function () {
    function ForgotComponent(authService, dialogRef, loading, snackbar, router) {
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.loading = loading;
        this.snackbar = snackbar;
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.sendToken = function () {
        var _this = this;
        this.loading.setValue(true);
        this.authService.sendPasswordToken(this.email)
            .subscribe(function () {
            //console.log('GUAY');
            _this.loading.setValue(false);
            _this.dialogRef.close();
            _this.snackbar.open('Token enviado con éxito. Revisa tu correo.', 'CERRAR', { duration: 2500 })
                .afterDismissed()
                .subscribe(function () {
                _this.router.navigateByUrl('/');
            });
        }, function (err) {
            //console.log(err);
            _this.loading.setValue(false);
            _this.snackbar.open('Hubo algún fallo enviando el token.', 'CERRAR', { duration: 2500 });
        });
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    core_1.Component({
        selector: 'app-forgot',
        templateUrl: './forgot.component.html',
        styleUrls: ['./forgot.component.css'],
        providers: [services_1.AuthService]
    }),
    __metadata("design:paramtypes", [services_1.AuthService,
        material_1.MdDialogRef,
        ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdSnackBar,
        router_1.Router])
], ForgotComponent);
exports.ForgotComponent = ForgotComponent;
