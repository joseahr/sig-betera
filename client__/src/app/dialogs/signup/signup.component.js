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
var auth_service_1 = require("../../services/auth.service");
var captcha_component_1 = require("angular2-recaptcha/lib/captcha.component");
var SignupComponent = (function () {
    function SignupComponent(dialogRef, authService, snackBar) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.snackBar = snackBar;
        this.userToCreate = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.captcha.reset();
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var recaptcha = this.captcha.getResponse();
        //console.log('token', recaptcha);
        if (!recaptcha) {
            this.snackBar.open('Debes verificar el captcha', null, { duration: 1500 });
            return;
        }
        var user = this.userToCreate;
        user['g-recaptcha-response'] = recaptcha;
        this.authService.signup(user).subscribe(function () {
            //console.log('Usuario registrado con éxito');
            _this.snackBar.open('Registrado con éxito', null, { duration: 1500 });
            _this.dialogRef.close();
        }, function (err) { _this.snackBar.open(err, null, { duration: 1500 }); }, function () { _this.captcha.reset(); });
    };
    return SignupComponent;
}());
__decorate([
    core_1.ViewChild(captcha_component_1.ReCaptchaComponent),
    __metadata("design:type", captcha_component_1.ReCaptchaComponent)
], SignupComponent.prototype, "captcha", void 0);
SignupComponent = __decorate([
    core_1.Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css'],
        providers: [auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        auth_service_1.AuthService,
        material_1.MdSnackBar])
], SignupComponent);
exports.SignupComponent = SignupComponent;
