"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var components_1 = require("./components");
var app_routes_1 = require("./app.routes");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var angular2_recaptcha_1 = require("angular2-recaptcha");
var HighchartsService_1 = require("angular2-highcharts/dist/HighchartsService");
var highcharts = require("highcharts");
//import {HighchartsExporting} from 'highcharts/modules/exporting';
var guards_1 = require("./guards");
var services_1 = require("./services");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var dialogs_1 = require("./dialogs");
require("hammerjs");
var validate_token_component_1 = require("./components/validate-token/validate-token.component");
var change_password_token_component_1 = require("./components/change-password-token/change-password-token.component");
function highchartsFactory() {
    //HighchartsExporting(highcharts);
    return highcharts;
}
exports.highchartsFactory = highchartsFactory;
var metadata = Reflect.getOwnMetadata('annotations', ng2_loading_animate_1.LoadingAnimateModule);
metadata[0].imports = [common_1.CommonModule, animations_1.BrowserAnimationsModule];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            components_1.HomeComponent,
            dialogs_1.LoginComponent,
            dialogs_1.SignupComponent,
            dialogs_1.ForgotComponent,
            validate_token_component_1.ValidateTokenComponent,
            change_password_token_component_1.ChangePasswordTokenComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_recaptcha_1.ReCaptchaModule,
            ng2_loading_animate_1.LoadingAnimateModule,
            material_1.MaterialModule,
            router_1.RouterModule.forRoot(app_routes_1.appRoutes, { useHash: true })
        ],
        entryComponents: [dialogs_1.LoginComponent, dialogs_1.SignupComponent, dialogs_1.ForgotComponent],
        providers: [
            ng2_loading_animate_1.LoadingAnimateService,
            services_1.AuthService,
            guards_1.CanActivateAdmin,
            { provide: 'Window', useValue: window },
            {
                provide: HighchartsService_1.HighchartsStatic,
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
