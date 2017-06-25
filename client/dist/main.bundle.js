webpackJsonp([3,7],{

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(529);


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUser = function () {
        return this.http.post('/api/user/isAuth', {})
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.http.post('/api/user/isAuth', {})
            .map(function (user) {
            return (!user.json().error);
        });
    };
    AuthService.prototype.isAuthenticatedAsAdmin = function () {
        return this.http.post('/api/user/isAuth', {})
            .map(function (user_) {
            var user = user_.json();
            return (!user.error && user.rol == 'admin');
        });
    };
    AuthService.prototype.login = function (username, password) {
        return this.http.post('/api/user/login', { username: username, password: password }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        return this.http.get('/api/user/logout');
    };
    AuthService.prototype.signup = function (user) {
        return this.http.post('/api/user/signup', user);
    };
    AuthService.prototype.validateUserByToken = function (token) {
        return this.http.get("/api/user/validate/" + token).map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendPasswordToken = function (email) {
        return this.http.post("/api/user/password", { email: email }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.isValidToken = function (token) {
        return this.http.get("/api/user/password/" + token).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePassword = function (token, password, repassword) {
        return this.http.put("/api/user/password", { token: token, password: password, repassword: repassword }).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(119);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_service__ = __webpack_require__(708);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_service__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(699);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__ = __webpack_require__(700);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__(698);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(696);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_token_validate_token_component__ = __webpack_require__(697);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__validate_token_validate_token_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_token_change_password_token_component__ = __webpack_require__(695);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__change_password_token_change_password_token_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards__ = __webpack_require__(701);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__guards__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin/admin.module": [
		1103,
		0
	],
	"./modules/map/map.module": [
		1104,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 528;


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(709);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.transitions.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile3d_service__ = __webpack_require__(703);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__profile3d_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projection_service__ = __webpack_require__(704);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__projection_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_maps_service__ = __webpack_require__(706);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__user_maps_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wms_capabilities_service__ = __webpack_require__(707);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__wms_capabilities_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_layers_service__ = __webpack_require__(705);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__user_layers_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__export_map_service__ = __webpack_require__(702);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__export_map_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
var AppComponent = (function () {
    function AppComponent(loading, dialog, authService, ngZone, router) {
        var _this = this;
        this.loading = loading;
        this.dialog = dialog;
        this.authService = authService;
        this.ngZone = ngZone;
        this.router = router;
        this.menuNav = [
            { title: 'INICIO', link: '', exact: true, icon: 'home' },
            { title: 'MAPA', link: 'map', exact: false, icon: 'map' },
            { title: 'DESCARGAS', link: 'download', icon: 'file_download' }
        ];
        this.showButtonScrollUp = false;
        this.authService.getUser().subscribe(function (user) {
            _this.ngZone.run(function () {
                if (!user.error) {
                    _this.authUser = user;
                }
                else {
                    _this.authUser = null;
                }
            });
        });
        router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
        });
    }
    AppComponent.prototype.onWindowScroll = function () {
        //console.log(window.scrollY, window.innerHeight);
        this.showButtonScrollUp = window.scrollY >= window.innerHeight;
    };
    AppComponent.prototype.toggleNavigation = function () {
        document.querySelector('.cd-nav-container').classList.toggle('is-visible');
        document.querySelector('.cd-overlay').classList.toggle('is-visible');
        document.querySelector('#app-body').classList.toggle('scale-down');
        document.querySelector('md-toolbar').classList.toggle('scale-down');
        document.querySelector('html').classList.toggle('overflow-hidden');
    };
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype._navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
            this.ngZone.runOutsideAngular(function () {
                _this.loading.setValue(true);
            });
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationEnd */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* NavigationCancel */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* NavigationError */]) {
            this._hideSpinner();
        }
    };
    AppComponent.prototype._hideSpinner = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.loading.setValue(false);
        });
    };
    AppComponent.prototype.openLoginDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs__["a" /* LoginComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result)
                return;
            _this.authUser = result;
            _this.router.navigate(['']);
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        if (!this.authService)
            return;
        this.authService.logout().subscribe(function () {
            _this.authUser = null;
            _this.router.navigate(['']);
        });
    };
    AppComponent.prototype.openSignupDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs__["b" /* SignupComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            // Hacer algo
        });
    };
    AppComponent.prototype.openForgotDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs__["c" /* ForgotComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            // Hacer algo
        });
    };
    // main function
    AppComponent.prototype.scrollToY = function (scrollTargetY, speed, easing) {
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // easing: easing equation to use
        var scrollY = window.scrollY, scrollTargetY = scrollTargetY || 0, speed = speed || 2000, easing = easing || 'easeOutSine', currentTime = 0;
        // min time .1, max time .8 seconds
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        var PI_D2 = Math.PI / 2, easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };
        // add animation loop
        function tick() {
            currentTime += 1 / 60;
            var p = currentTime / time;
            var t = easingEquations[easing](p);
            if (p < 1) {
                window.requestAnimFrame(tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            }
            else {
                console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }
        // call it once to get started
        tick();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onWindowScroll", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(834),
        styles: [__webpack_require__(767)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highcharts__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_loading_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialogs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import * as highchartsExporting from 'highcharts/modules/exporting';



//import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";


function highchartsFactory() {
    //highchartsExporting(highcharts);
    return __WEBPACK_IMPORTED_MODULE_11_highcharts__;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            //MnFullpageDirective,
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dialogs__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dialogs__["b" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dialogs__["c" /* ForgotComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* ValidateTokenComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* ChangePasswordTokenComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["d" /* SelectBoxToDownloadFromGeoserverDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha__["ReCaptchaModule"],
            __WEBPACK_IMPORTED_MODULE_14_ng2_loading_animate__["LoadingAnimateModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* appRoutes */], { useHash: true })
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_15__dialogs__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_15__dialogs__["b" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_15__dialogs__["c" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_5__components__["d" /* SelectBoxToDownloadFromGeoserverDialog */]],
        providers: [
            //MnFullpageService,
            __WEBPACK_IMPORTED_MODULE_14_ng2_loading_animate__["LoadingAnimateService"],
            __WEBPACK_IMPORTED_MODULE_13__services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__guards__["a" /* CanActivateAdmin */],
            { provide: 'Window', useValue: window },
            {
                provide: __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* HomeComponent */] },
    { path: 'map', loadChildren: './modules/map/map.module#MapModule' },
    { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards__["a" /* CanActivateAdmin */]] },
    { path: 'validate/token/:token', component: __WEBPACK_IMPORTED_MODULE_0__components__["b" /* ValidateTokenComponent */] },
    { path: 'password/token/:token', component: __WEBPACK_IMPORTED_MODULE_0__components__["c" /* ChangePasswordTokenComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordTokenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password-token',
        template: __webpack_require__(835),
        styles: [__webpack_require__(768)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _e || Object])
], ChangePasswordTokenComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=change-password-token.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_transitions__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_map_services__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectBoxToDownloadFromGeoserverDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(el, ngZone, http, router, dialog) {
        this.el = el;
        this.ngZone = ngZone;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.GEOSERVER_URL = 'http://localhost:8080/geoserver';
        this.formats = [
            { name: 'GML2', mime: 'GML2' },
            { name: 'GML3', mime: 'GML3' },
            { name: 'Shapefile', mime: 'shape-zip' },
            { name: 'GeoJSON', mime: 'application/json' },
        ];
        this.layers = this.getLayers();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
        //$.fn.fullpage.destroy('all');
        console.log('destroyyy');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.toolbar = this.el.nativeElement.parentNode.parentNode.childNodes[0];
        document.body.style.overflow = '';
        //console.log(this.el.nativeElement.parentNode.childNodes[0], this.el.nativeElement, 'toooooool')
    };
    HomeComponent.prototype.dowloadFromGeoserver = function () {
        var url = this.GEOSERVER_URL + "/betera/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=betera:" + this.selectedLayer + "&maxFeatures=10000&outputFormat=" + this.selectedFormat;
        window.open(url);
    };
    HomeComponent.prototype.openMapBBOXDialog = function () {
        var dialog = this.dialog.open(SelectBoxToDownloadFromGeoserverDialog, {
            width: '90vw',
            height: 'auto',
            disableClose: false
        });
        dialog.componentInstance.selectedLayer = this.selectedLayer;
        dialog.componentInstance.selectedFormat = this.selectedFormat;
    };
    HomeComponent.prototype.scrollTo = function (selector) {
        var node = document.querySelector(selector), val = 0;
        if (node.offsetParent) {
            do {
                val += node.offsetTop;
            } while (node = node.offsetParent);
        }
        else {
            val = node.offsetTop;
        }
        this.scrollToY(val, 1000, 'easeInOutQuint');
        //console.log(node, val, selector, node.getBoundingClientRect().top, node.offsetHeight);
    };
    HomeComponent.prototype.getHeight = function (element) {
        var height = element.clientHeight;
        var computedStyle = window.getComputedStyle(element);
        height += parseInt(computedStyle.marginTop, 10);
        height += parseInt(computedStyle.marginBottom, 10);
        height += parseInt(computedStyle.borderTopWidth, 10);
        height += parseInt(computedStyle.borderBottomWidth, 10);
        return height;
    };
    HomeComponent.prototype.getLayers = function () {
        return this.http.get('/api/maps')
            .map(function (res) { return res.json(); })
            .map(function (res) { return [].concat.apply([], res.map(function (m) { return m.layers.map(function (l) { return l.name; }); })); });
    };
    HomeComponent.prototype.openSignupDialog = function () {
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs__["b" /* SignupComponent */]);
    };
    // main function
    HomeComponent.prototype.scrollToY = function (scrollTargetY, speed, easing) {
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // easing: easing equation to use
        var scrollY = window.scrollY, scrollTargetY = scrollTargetY || 0, speed = speed || 2000, easing = easing || 'easeOutSine', currentTime = 0;
        // min time .1, max time .8 seconds
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        var PI_D2 = Math.PI / 2, easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };
        // add animation loop
        function tick() {
            currentTime += 1 / 60;
            var p = currentTime / time;
            var t = easingEquations[easing](p);
            if (p < 1) {
                window.requestAnimFrame(tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            }
            else {
                console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }
        // call it once to get started
        tick();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(836),
        styles: [__webpack_require__(769)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__router_transitions__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _e || Object])
], HomeComponent);

var SelectBoxToDownloadFromGeoserverDialog = (function () {
    function SelectBoxToDownloadFromGeoserverDialog(projService, dialogRef) {
        this.projService = projService;
        this.dialogRef = dialogRef;
        this.GEOSERVER_URL = 'http://localhost:8080/geoserver';
    }
    SelectBoxToDownloadFromGeoserverDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["Map"]({
            target: this.mapElement.nativeElement,
            layers: [
                new __WEBPACK_IMPORTED_MODULE_6_openlayers__["layer"].Tile({
                    source: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["source"].OSM()
                })
            ],
            view: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["View"]({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12,
                maxZoom: 20
            })
        });
        this.projService.setProjection(this.map, '25830');
        var layer = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["source"].TileWMS({
                url: this.GEOSERVER_URL + "/betera/wms",
                projection: this.map.getView().getProjection(),
                params: {
                    layers: this.selectedLayer
                }
            })
        });
        var vectorLayer = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["source"].Vector()
        });
        this.map.addLayer(layer);
        this.map.addLayer(vectorLayer);
        var dragBox = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["interaction"].DragBox({
            condition: __WEBPACK_IMPORTED_MODULE_6_openlayers__["events"].condition.always
        });
        this.map.addInteraction(dragBox);
        dragBox.on('boxstart', function () { return vectorLayer.getSource().clear(); });
        dragBox.on('boxend', function () {
            var geometry = dragBox.getGeometry();
            _this.bbox = geometry.getExtent();
            var feature = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["Feature"]();
            feature.setGeometry(geometry);
            vectorLayer.getSource().addFeature(feature);
        });
    };
    SelectBoxToDownloadFromGeoserverDialog.prototype.dowloadFromGeoserver = function () {
        var url = this.GEOSERVER_URL + "/betera/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=betera:" + this.selectedLayer + "&bbox=" + this.bbox.join() + "&outputFormat=" + this.selectedFormat;
        window.open(url);
        this.dialogRef.close();
    };
    return SelectBoxToDownloadFromGeoserverDialog;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], SelectBoxToDownloadFromGeoserverDialog.prototype, "mapElement", void 0);
SelectBoxToDownloadFromGeoserverDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n        <div md-dialog-title>\n            Selecciona un recuadro\n        </div>\n        <div #map style=\"width : 100%; height : 100%;\"></div>\n        <md-dialog-actions>\n            <button [disabled]=\"!bbox\" md-raised-button (click)=\"dowloadFromGeoserver()\" color=\"primary\">Descargar</button>\n        </md-dialog-actions>\n    ",
        providers: [__WEBPACK_IMPORTED_MODULE_7__modules_map_services__["d" /* ProjectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__modules_map_services__["d" /* ProjectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__modules_map_services__["d" /* ProjectionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */]) === "function" && _h || Object])
], SelectBoxToDownloadFromGeoserverDialog);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateTokenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ValidateTokenComponent = (function () {
    function ValidateTokenComponent(authService, route, router, snackbar, loading) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.snackbar = snackbar;
        this.loading = loading;
    }
    ValidateTokenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.route.snapshot.params.token;
        this.loading.setValue(true);
        this.authService.validateUserByToken(token)
            .subscribe(function () {
            console.log('OK');
            _this.snackbar.open('Usuario validado con éxito', 'CERRAR', { duration: 1500 })
                .afterDismissed()
                .subscribe(function () {
                _this.loading.setValue(false);
                _this.router.navigateByUrl('/');
            });
        }, function (err) {
            console.log(err);
            _this.snackbar.open('Fallo al validar usuario', 'CERRAR', { duration: 1500 })
                .afterDismissed()
                .subscribe(function () {
                _this.loading.setValue(false);
                _this.router.navigateByUrl('/');
            });
        });
    };
    return ValidateTokenComponent;
}());
ValidateTokenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-validate-token',
        template: __webpack_require__(837),
        styles: [__webpack_require__(770)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _e || Object])
], ValidateTokenComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=validate-token.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__(838),
        styles: [__webpack_require__(771)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_loading_animate__["LoadingAnimateService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ForgotComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(dialogRef, authService, snackBar) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.snackBar = snackBar;
        this.userNotLoggedParams = {};
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.snackBar.open('Iniciando Sesión ...');
        var _a = this.userNotLoggedParams, nameOrEmail = _a.nameOrEmail, password = _a.password;
        this.authService.login(nameOrEmail, password).subscribe(function (user) {
            _this.dialogRef.close(user);
            _this.snackBar.open("\u00A1Hola de nuevo, " + user.name + "!", null, { duration: 1000 });
        }, function (err) {
            //console.log(err);
            _this.isLoading = false;
            _this.snackBar.open(err.json(), null, { duration: 1000 });
        }, function () {
            //console.log('end - login');
            _this.isLoading = false;
        });
        //console.log(this.userNotLoggedParams);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(839),
        styles: [__webpack_require__(772)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha_lib_captcha_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha_lib_captcha_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha_lib_captcha_component__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha_lib_captcha_component__["ReCaptchaComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha_lib_captcha_component__["ReCaptchaComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha_lib_captcha_component__["ReCaptchaComponent"]) === "function" && _a || Object)
], SignupComponent.prototype, "captcha", void 0);
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(840),
        styles: [__webpack_require__(773)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdSnackBar */]) === "function" && _b || Object])
], CanActivateAdmin);

var _a, _b;
//# sourceMappingURL=guards.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jspdf__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportMapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExportMapService = (function () {
    function ExportMapService() {
        this.DEVELOPMENT_GEOSERVER_URL = 'http://localhost:8080/geoserver/betera-workspace/wms';
    }
    ExportMapService.prototype.exportMap = function (map, options, e) {
        var _this = this;
        if (true) {
            var ext = 'pdf'; //$(this).attr("download").split('.').pop();
            if (ext == 'jpg')
                ext = 'jpeg';
            // Try to change resolution
            if (options.dpi) {
                map.once('precompose', function (event) {
                    var canvas = event.context.canvas;
                    var scaleFactor = options.dpi / 96;
                    canvas.width = Math.ceil(canvas.width * scaleFactor);
                    canvas.height = Math.ceil(canvas.height * scaleFactor);
                    event.context.scale(scaleFactor, scaleFactor);
                });
            }
            //var label = $(e.target).text();
            // Draw a white background before draw (transparent background)
            if (ext != 'png') {
                map.once('precompose', function (e) {
                    e.context.fillStyle = "white";
                    e.context.fillRect(0, 0, e.context.canvas.width, e.context.canvas.height);
                });
            }
            // Copy the map
            map.once('postcompose', function (event) {
                _this.saveCanvas(e.target, event.context.canvas, ext, e, map, options);
                // Redraw map (if dpi change)
                setTimeout(function () { map.renderSync(); }, 500);
            });
            map.renderSync();
        }
        else {
        }
    };
    ExportMapService.prototype.saveCanvas = function (input, canvas, ext, e, map, options) {
        if (ext == 'pdf') {
            console.log(input.href);
            var data = canvas.toDataURL('image/jpeg');
            var size, w, h, orient, format = 'a4';
            var margin = Number($(input).data('margin')) || 20;
            // Todo en portrait
            orient = 'landscape';
            size = [297, 210];
            var sc = Math.min((size[0] - 90 - 2 * margin) / canvas.width, (size[1] - 40 - 2 * margin) / canvas.height);
            w = sc * canvas.width;
            h = sc * canvas.height;
            // Center
            var mx = (size[0] - w) / 2;
            var my = (size[1] - h - 10) / 2;
            // Export!
            var pdf = new __WEBPACK_IMPORTED_MODULE_1_jspdf__(orient, "mm", format);
            pdf.addImage(data, 'JPEG', 20, 20, size[0] - 90, size[1] - 40);
            // pdf.save('map.pdf');
            // Ayto Betera Escudo
            //var urlAyto = '/images/betera-logo.png';
            console.log('toDataURL');
            pdf.setTextColor(48, 63, 159);
            pdf.setFontType("bold");
            pdf.setFontSize(20);
            pdf.text('Ayuntamiento de Bétera', 30, 12.5);
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(7);
            pdf.text('Departamento de Urbanismo', 30, 16.5);
            pdf.text('Sistema de referencia ETRS89 UTM H30 N (EPSG 25830)', size[0] / 2, 16.5);
            pdf.setTextColor(150);
            var date = new Date();
            var fecha = 'Fecha de impresión : ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
            pdf.text(fecha, 20, size[1] - 17);
            var nombreMapa;
            map.getLayers().forEach(function (m) {
                if (m.getVisible() && m.get('mapa'))
                    nombreMapa = m.get('name');
            });
            pdf.setTextColor(255, 187, 0);
            pdf.text('Mapa : ' + nombreMapa, size[0] - 60, 16.5);
            pdf.setTextColor(150, 0, 0);
            pdf.setFontSize(6);
            var extent = map.getView().calculateExtent(map.getSize()).map(function (coord) { return coord.toFixed(3); });
            pdf.text('Coordenadas de las esquinas : ' + extent.join(', '), (size[0] / 2), size[1] - 17);
            //pdf.line(20, 20, size[0] - 70, 20);
            //pdf.line(size[0] - 70, 20, size[0] - 70, size[1] - 20);
            //pdf.line(size[0] - 70, size[1] - 20, 20, size[1] - 20);
            //pdf.line(20, size[1] - 20, 20, 20);
            pdf.rect(20, 20, size[0] - 90, size[1] - 40);
            this.toDataUrl('http://www.betera.es/fileadmin/templates/ayto/home/images/escudo_moderno.png', function (base64) {
                console.log('Inside toDataURL');
                pdf.addImage(base64, 'JPEG', 20, 2, 10, 16);
                pdf.setTextColor(150, 0, 0);
                this.getLegend().then(function (canvasArray) {
                    var heightTotal = 0;
                    var heights = canvasArray.reduce(function (array, c, index) {
                        var canvas = c.canvas;
                        var h = canvasArray[index - 1 || 0]
                            ? (canvasArray[index - 1 || 0].canvas.height / 5) + 3
                            : 0;
                        array.push(h + (array[index - 1 || 0] || 0));
                        heightTotal = heightTotal + 1 + (canvas.height / 5);
                        return array;
                    }, []);
                    var scaleHeight = (size[1] - 42) / heightTotal;
                    scaleHeight = scaleHeight > 1 ? 1 : scaleHeight;
                    console.log(heights);
                    canvasArray.reverse().forEach(function (layerCanvas, index) {
                        var canvas_ = layerCanvas.canvas;
                        var layerName = layerCanvas.layerName;
                        console.log('layerCanvas', layerCanvas);
                        pdf.text(layerName, size[0] - 65, (heights[index] * scaleHeight) + 20);
                        pdf.addImage(canvas_.toDataURL(), 'JPEG', size[0] - 65, ((heights[index] + 1) * scaleHeight) + 20, +canvas_.width / 5, +(canvas_.height / 5) * scaleHeight);
                    });
                    var inp = document.createElement('a');
                    inp.setAttribute('href', pdf.output('datauristring'));
                    inp.setAttribute('download', 'mapa.pdf');
                    inp.style.display = 'none';
                    document.body.appendChild(inp);
                    inp.click();
                    document.body.removeChild(inp);
                    e.stopPropagation();
                    e.preventDefault();
                    console.log('done');
                });
            }, null);
        }
        else {
            var inp = document.createElement('a');
            inp.setAttribute('href', canvas.toDataURL('image/' + (options.format || ext), options.quality));
            inp.setAttribute('download', 'mapa.pdf');
            inp.style.display = 'none';
            document.body.appendChild(inp);
            inp.click();
            document.body.removeChild(inp);
        }
    };
    ExportMapService.prototype.toDataUrl = function (src, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
            canvas = null;
        };
        img.src = src;
    };
    ExportMapService.prototype.getLegend = function (map) {
        var _this = this;
        var imagesLegend = [];
        map.getLayers().forEach(function (l) {
            if (l.getVisible() && l.get('layers') && l.get('type') == 'layer')
                l.getLayers().forEach(function (ll) {
                    //console.log(ll.getSource().getUrls()[0]);
                    if (ll.getVisible() && ll.getSource().getUrls()[0] == _this.DEVELOPMENT_GEOSERVER_URL) {
                        imagesLegend.push({
                            url: _this.DEVELOPMENT_GEOSERVER_URL + '?request=GetLegendGraphic&format=image/png&layer=' + ll.get('name'),
                            name: ll.get('name')
                        });
                    }
                });
        });
        return this.mergeImages(imagesLegend);
    };
    ExportMapService.prototype.mergeImages = function (images) {
        console.log('images', images);
        return Promise.all(images.map(function (img) {
            return this.loadImageAsync(img.url)
                .catch(function (e) {
                console.log(e);
                return Promise.resolve(null);
            });
        }))
            .then(function (allImages) {
            console.log('allImages', allImages);
            var canvasArray = [];
            allImages.forEach(function (img, index) {
                if (!img)
                    return;
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                canvasArray.push({ canvas: canvas, layerName: images[index].name });
            });
            console.log('canvasArray', canvasArray);
            return canvasArray;
        });
    };
    ExportMapService.prototype.loadImageAsync = function (url) {
        console.log('loadAsync', url);
        return new Promise(function (res, rej) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = res.bind(res, img);
            img.onerror = rej;
            //img.onerror = console.log.bind(console);
        });
    };
    return ExportMapService;
}());
ExportMapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ExportMapService);

//# sourceMappingURL=export-map.service.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile3DService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Profile3DService = (function () {
    function Profile3DService(http) {
        this.http = http;
        this.wktParser = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].WKT();
    }
    Profile3DService.prototype.getProfile = function (featureLS) {
        if (featureLS.getGeometry().getType() != 'LineString') {
            console.log('[ProfileService] - Debe pasar como parámetro un Feature de tipo LS');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw('[ProfileService] - Debe pasar como parámetro un Feature de tipo LS');
        }
        else {
            var wkt = this.wktParser.writeFeature(featureLS);
            return this.http.post('/api/raster/perfil', {
                wkt: wkt
            });
        }
    };
    return Profile3DService;
}());
Profile3DService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Profile3DService);

var _a;
//# sourceMappingURL=profile3d.service.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_proj4__ = __webpack_require__(801);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var proj4 = __WEBPACK_IMPORTED_MODULE_3_proj4__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].setProj4(proj4);
var ProjectionService = (function () {
    function ProjectionService(http) {
        this.http = http;
        this.defaultProjections = [{
                code: '25830',
                name: 'ETRS89 / UTM zone 30N (X, Y)',
                proj4: '+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
                bbox: [44, -9.6, 35.2, 4.6]
            }, {
                code: '4258',
                name: 'ETRS89 / UTM zone 30 (lon/lat)',
                proj4: '+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs',
                bbox: [44, -9.6, 35.2, 4.6]
            }];
    }
    ProjectionService.prototype.getProjDef = function (epsgCode) {
        return this.http.get("http://epsg.io/" + epsgCode + ".proj4");
    };
    ProjectionService.prototype.setProjection = function (map, code) {
        var proj = this.defaultProjections.find(function (p) { return p.code == "" + code; });
        if (!proj) {
            return;
        }
        proj4.defs;
        proj4.defs("EPSG:" + code, proj.proj4);
        var projection = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].get("EPSG:" + code);
        var fromLonLat = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].getTransform('EPSG:4326', projection);
        var bbox = proj.bbox;
        var extent = __WEBPACK_IMPORTED_MODULE_2_openlayers__["extent"].applyTransform([bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
        projection.setExtent(extent);
        var zoom = map.getView().getZoom();
        var center = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].transform(map.getView().getCenter(), map.getView().getProjection(), projection);
        var view = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["View"]({ projection: projection, zoom: zoom, center: center });
        map.setView(view);
    };
    ProjectionService.prototype.getDefaultProjection = function (code) {
        var proj = this.defaultProjections.find(function (p) { return p.code == code; });
        if (!proj)
            return null;
        proj4.defs("EPSG:" + code, proj.proj4);
        var projection = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].get("EPSG:" + code);
        var fromLonLat = __WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].getTransform('EPSG:4326', projection);
        var bbox = proj.bbox;
        var extent = __WEBPACK_IMPORTED_MODULE_2_openlayers__["extent"].applyTransform([bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
        projection.setExtent(extent);
        return projection;
    };
    return ProjectionService;
}());
ProjectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProjectionService);

var _a;
//# sourceMappingURL=projection.service.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLayersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLayersService = (function () {
    function UserLayersService(http) {
        this.http = http;
        this.wktParser = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].WKT();
    }
    UserLayersService.prototype.getFeatures = function (featureIntersect, layers) {
        var wkt = this.wktParser.writeFeature(featureIntersect, {
            dataProjection: 'EPSG:25830',
            featureProjection: 'EPSG:25830'
        });
        console.log(featureIntersect, 'WKT', wkt, 'featureToSend');
        return this.http.post('/api/layers/features', {
            wkt: wkt, layers: layers
        }).map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.getFeatureData = function (layerName, gid) {
        return this.http.get("/api/layers/" + layerName + "/data/" + gid)
            .map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.uploadData = function (layerName, gid, file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post("/api/layers/" + layerName + "/data/" + gid + "/upload", formData);
    };
    UserLayersService.prototype.addFeatureData = function (layerName, gid, url) {
        return this.http.post("/api/layers/" + layerName + "/data/" + gid, { url: url })
            .map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.deleteFeatureData = function (layerName, gid, id) {
        return this.http.delete("/api/layers/" + layerName + "/data/" + gid, { body: { id: id } })
            .map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.addFeature = function (layerName, geometry, properties) {
        return this.http.post("/api/layers/" + layerName + "/transaction", {
            geometry: geometry, properties: properties
        }).map(function (res) { return res.json(); });
    };
    UserLayersService.prototype.editFeature = function (layerName, geometry, properties) {
        return this.http.put("/api/layers/" + layerName + "/transaction", {
            geometry: geometry, properties: properties
        });
    };
    UserLayersService.prototype.deleteFeature = function (layerName, gid) {
        return this.http.delete("/api/layers/" + layerName + "/transaction", {
            body: {
                gid: gid
            }
        });
    };
    return UserLayersService;
}());
UserLayersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserLayersService);

var _a;
//# sourceMappingURL=user.layers.service.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMapsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserMapsService = (function () {
    function UserMapsService(http) {
        this.http = http;
    }
    UserMapsService.prototype.getUserMaps = function () {
        var _this = this;
        return this.http.get('/api/maps')
            .map(function (res) {
            //console.log(res.json());
            var listOfMaps = res.json();
            return listOfMaps.map(function (mapa, index, arr) {
                mapa.layers = (mapa.layers || []);
                mapa.baselayers = (mapa.baselayers || []);
                var capas = (mapa.baselayers || []).concat((mapa.layers || []));
                var orden = mapa.orden;
                capas.sort(function (a, b) {
                    var num = (_this.findPositionInOrder(a.id, a.type, orden) > _this.findPositionInOrder(b.id, b.type, orden))
                        ? 1 : -1;
                    return num;
                })
                    .reverse();
                mapa.capas = capas;
                return mapa;
            });
        });
    };
    UserMapsService.prototype.findPositionInOrder = function (lid, ltype, orderList) {
        return orderList.reduce(function (a, b) {
            if (b.layer_type == ltype && lid === b.id_layer)
                a = b.position;
            return a;
        }, null);
    };
    return UserMapsService;
}());
UserMapsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserMapsService);

var _a;
//# sourceMappingURL=user.maps.service.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WMSCapabilitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WMSCapabilitiesService = (function () {
    function WMSCapabilitiesService(http) {
        this.http = http;
    }
    WMSCapabilitiesService.prototype.getCapabilities = function (service_url) {
        return this.http.post('/api/layers/wms/capabilities', { service_url: service_url });
    };
    return WMSCapabilitiesService;
}());
WMSCapabilitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WMSCapabilitiesService);

var _a;
//# sourceMappingURL=wms-capabilities.service.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConfirmDialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogService = (function () {
    function ConfirmDialogService(dialog) {
        this.dialog = dialog;
    }
    ConfirmDialogService.prototype.open = function (text) {
        var dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.componentInstance.text = text;
        return dialogRef;
    };
    return ConfirmDialogService;
}());
ConfirmDialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], ConfirmDialogService);

var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.close = function (option) {
        this.dialogRef.close(option);
    };
    return ConfirmDialogComponent;
}());
ConfirmDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <h4>{{text}}</h4>\n    <button md-button (click)=\"close(true)\">ACEPTAR</button>\n    <button md-button (click)=\"close(false)\">CANCELAR</button>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _b || Object])
], ConfirmDialogComponent);

var _a, _b;
//# sourceMappingURL=confirm-dialog.service.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex : 1;\n  -ms-flex : 1 1 auto;\n  flex : 1 1 auto;\n}\n\nmd-toolbar {\n    height: 50px !important;\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\n    position: relative;\n    z-index: 2;\n}\n\nmd-toolbar button {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-left: 5px;\n}\n\n.logo-betera {\n  height: 100%;\n}\n\ntitle {\n  box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\n}\n\n\n/*\n@media screen and (max-width: 480px) {\n  md-toolbar button {\n    visibility: hidden;\n  }\n\n}\n*/\n\n.container-router {\n  position : absolute;\n  top : 64px;\n  bottom : 0px;\n  left: 0px;\n  right: 0px;\n}\n\n@media (max-width:600px) and (orientation:portrait) {\n  .container-router {\n    position : absolute;\n    top : 56px;\n    bottom : 0px;\n    left: 0px;\n    right: 0px;\n  }\n}\n@media (max-width:960px) and (orientation:landscape) {\n  .container-router {\n    position : absolute;\n    top : 48px;\n    bottom : 0px;\n    left: 0px;\n    right: 0px;\n  }\n}\n\n\n.cd-nav-container {\n  z-index : 1002;\n  background: #fff;\n  overflow-y: scroll;\n  box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.75);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom : 0;\n  width: 80%;\n  -webkit-transform: translateX(120%);\n          transform: translateX(120%);\n  transition : -webkit-transform 0.4s;\n  transition : transform 0.4s;\n  transition: transform 0.4s, -webkit-transform 0.4s;\n}\n\n.cd-nav-container.is-visible {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n\n.cd-nav-container header {\n  background: #f7f7f7;\n  padding: 10px;\n}\n\n.cd-nav-container header h3, \n.cd-nav-container header button  {\n  display: inline-block;\n} \n\n.cd-nav-container header h3 {\n  margin-left: 0.5em;\n}\n\n.cd-nav-container header button {\n  float : right;\n  margin: 0.5em;\n}\n\n#app-body, md-toolbar {\n  transition : -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition : transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n#app-body.scale-down, md-toolbar.scale-down {\n  -webkit-transform: scale(0.2) rotate(-10deg) translateX(-50%) translateY(50%) ;\n          transform: scale(0.2) rotate(-10deg) translateX(-50%) translateY(50%) ;\n}\n\n.cd-overlay.is-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.cd-overlay {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index : 1001;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.35);\n  visibility: hidden;\n  opacity: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: opacity 0.4s 0s, visibility 0s 0.4s;\n}\n\n.menu-header {\n  background: #fff;\n  box-shadow: 0px 2px 12px #000;\n}\n\nmd-grid-tile:not(.active-link):not(.menu-header):hover {\n  background: rgba(0,0,0,0.125);\n  color : #673ab7;\n}\n\nmd-grid-tile:not(.menu-header) {\n  cursor: pointer;\n}\n\nmd-grid-list:not(.navigation-grid){\n  background: #f7f7f7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".container-sections {\r\n    width: 100%;\r\n    height : auto;\r\n    text-align: center;\r\n    background: rgba(66, 143, 244, .1)\r\n}\r\n\r\n.mat-card-image {\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.card {\r\n    margin : 10px auto;\r\n    width : 40%;\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n@media only screen and (max-width:900px){\r\n    .card {\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n.fp-table:not(.has-slides) .fp-tableCell {\r\n    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    -webkit-transform: rotate(-5deg) scale(0.2) rotate(-45deg);\r\n            transform: rotate(-5deg) scale(0.2) rotate(-45deg);\r\n    -webkit-filter : blur(5px);\r\n            filter : blur(5px);\r\n    border-radius: 100%;\r\n    opacity: 0.2;\r\n    box-shadow: 0 2px 12px 8px rgba(0,0,0,0.25);\r\n}\r\n\r\n.fp-table.active:not(.has-slides) .fp-tableCell {\r\n    -webkit-transform: rotate(0deg) scale(0.9) rotate(0deg);\r\n            transform: rotate(0deg) scale(0.9) rotate(0deg);\r\n    opacity: 0.7;\r\n    border-radius : 4px;\r\n    -webkit-filter: blur(0px);\r\n            filter: blur(0px);\r\n    background-size: cover !important;\r\n    background-repeat: no-repeat !important;\r\n    background-position: center !important;\r\n}\r\n\r\n.fp-table.active .caption {\r\n    -webkit-transform: translateX(0%);\r\n            transform: translateX(0%);\r\n    background: rgba(0,0,0,0.4);\r\n}\r\n\r\n.caption {\r\n    transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715);\r\n    -webkit-transform: translateX(-200%);\r\n            transform: translateX(-200%);\r\n    position: absolute;\r\n    background: rgba(0,0,0,0);\r\n    top : 5%;\r\n    left : 5%;\r\n    right: 5%;\r\n    z-index: 1001;\r\n    border-radius: 4px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n\r\n.caption h1 {\r\n    color : #fff;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".mat-dialog-title {\n    color: #673ab7;\n    font-family: Roboto;\n    border-bottom: 2px solid #673ab7;\n    padding-bottom : 5px;\n}\n\n.mat-dialog-content {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".mat-dialog-title {\n    color: #673ab7;\n    font-family: Roboto;\n    border-bottom: 2px solid #673ab7;\n    padding-bottom : 5px;\n}\n\n.mat-dialog-content {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<md-toolbar #toolbarMenu color=\"primary\">\n  <img src=\"assets/escudo.png\" alt=\"\" class=\"logo-betera\">\n  <span class=\"title\">SIG Bétera</span>\n  <span class=\"spacer\"></span>\n\n  <button md-icon-button (click)=\"toggleNavigation()\">\n    <md-icon>menu</md-icon>\n  </button>\n  <button *ngIf=\"!authUser\" md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n\n\n  <!-- Menú usuario no logueado -->\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item *ngIf=\"!authUser\" (click)=\"openLoginDialog()\">\n      <md-icon>fingerprint</md-icon>\n      <span>Login</span>\n    </button>\n    <button md-menu-item (click)=\"openSignupDialog()\">\n      <md-icon>accessibility</md-icon>\n      <span>Registrarse</span>\n    </button>\n    <button md-menu-item (click)=\"openForgotDialog()\">\n      <md-icon>vpn_key</md-icon>\n      <span>¿Olvidaste credenciales?</span>\n    </button>\n  </md-menu>\n</md-toolbar>\n\n<div class=\"cd-overlay\" (click)=\"toggleNavigation()\"></div>\n<nav class=\"cd-nav-container\" id=\"cd-nav\">\n\n  <md-grid-list cols=\"1\" rowHeight=\"50px\">\n    <md-grid-tile\n        class=\"menu-header\"\n        (click)=\"toggleNavigation()\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\"\n    >\n      <h4>Menú</h4>\n    </md-grid-tile>\n    <button md-icon-button (click)=\"toggleNavigation()\" style=\"float:right; margin-right: 0.5em; margin-top: 0.5em;\">\n      <md-icon>close</md-icon>\n    </button>\n  </md-grid-list>\n\n  <md-grid-list cols=\"8\" rowHeight=\"45px\" *ngIf=\"authUser\">\n    <md-grid-tile\n        (click)=\"toggleNavigation()\"\n        [colspan]=\"4\"\n        [rowspan]=\"1\"\n    >\n      <img style=\"height : 35px; border-radius: 20px; margin-left : 10px; margin-right: 10px;\" src=\"{{authUser.gravatar}}\">\n      {{authUser.nombre}} {{authUser.apellidos}}\n    </md-grid-tile>\n    <md-grid-tile\n        (click)=\"toggleNavigation()\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\"\n    >\n      <md-icon>assignment_ind</md-icon>\n    </md-grid-tile>\n    <md-grid-tile\n        (click)=\"toggleNavigation()\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\"\n    >\n      <md-icon>notifications</md-icon>\n    </md-grid-tile>\n    <md-grid-tile\n        (click)=\"toggleNavigation(); logout();\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\"\n    >\n      <md-icon>exit_to_app</md-icon>\n    </md-grid-tile>\n  </md-grid-list>\n\n  <md-grid-list cols=\"2\" rowHeight=\"150px\" class=\"navigation-grid\">\n    <md-grid-tile\n        class=\"navigation-link\"\n        (click)=\"toggleNavigation()\"\n        *ngFor=\"let item of menuNav\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\"\n        [routerLink]=\"[item.link]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: item.exact }\"\n    >\n      <md-icon>{{item.icon}}</md-icon> {{item.title}}\n    </md-grid-tile>\n    <md-grid-tile\n        *ngIf=\"authUser && authUser.rol == 'admin'\"\n        (click)=\"toggleNavigation()\"\n        [colspan]=\"1\"\n        [rowspan]=\"1\"\n        [routerLink]=\"['admin']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: false }\"\n    >\n     <md-icon>dashboard</md-icon> ADMIN\n    </md-grid-tile>\n  </md-grid-list>\n\n</nav>\n\n<div id=\"app-body\" class=\"container-router\">\n  <router-outlet></router-outlet>  \n  <button md-icon-button color=\"primary\" *ngIf=\"showButtonScrollUp\" (click)=\"scrollToY(0, 1000, 'easeInOutQuint')\" style=\"position : fixed; bottom : 0.5em; right : 0.5em;\"><md-icon>arrow_upward</md-icon></button>\n</div>"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n\n<md-card style=\"width : 80%; margin : 0 auto; margin-top : 20px;\">\n  <md-card-header>Recupera tu cuenta</md-card-header>\n  <md-card-content>\n    <md-input-container>\n      <input [(ngModel)]=\"password\" placeholder =\"Contraseña\" mdInput type=\"password\">\n    </md-input-container>\n    <md-input-container>\n      <input [(ngModel)]=\"repassword\" placeholder = \"Repetir contraseña\" mdInput type=\"password\">\n    </md-input-container>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button (click)=\"updatePassword()\">Actualizar</button>\n  </md-card-actions>\n</md-card>"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]=\"\" style=\"position : absolute; top : 0px; bottom : 0px; left : 0px; right : 0px;\">\r\n  <video height=\"100%\" ontimeupdate=\"if(this.currentTime >= 60 ){ this.pause(); }\" onpause=\"this.currentTime= 10; this.play();\" width=\"100%\" onloadedmetadata=\"this.muted = true\" muted loop autoplay style=\"filter : blur(3px); object-fit : cover; opacity : 0.6; position : fixed; top : 0px; bottom : 0px; left : 0px; right : 0px;\">\r\n    <source src=\"http://localhost:3000/static/video.webm\" type=\"video/webm\" >\r\n  </video>\r\n</div>\r\n\r\n<div class=\"container-sections\" [@routerTransition]=\"\" style=\"background: rgba(0,0,0,0);\">\r\n\r\n  <md-card style=\"text-align-last : left; background: #303030; line-height : 0.8; color : #fff; width : 80%; margin : 0px auto; margin-top : 5%; mix-blend-mode: multiply;\">\r\n    <h1 style=\"line-height : 0.9\">\r\n      <md-icon color=\"primary\">pin_drop</md-icon><br>SIG<br>Bétera<br><span style=\"color : #673ab7; font-size : 0.6em; float : left;\">GEOPORTAL</span>\r\n    </h1>\r\n  </md-card>\r\n\r\n\r\n  <md-card style=\"width : 80%; margin : 0px auto; margin-top : 10px; background: rgba(255,255,255,0.6);\">\r\n    <md-card-content>\r\n      <button md-icon-button color=\"primary\" (click)=\"scrollTo('#descargas', 1000)\"><md-icon>cloud_download</md-icon></button>\r\n      <button md-icon-button (click)=\"scrollTo('#visit-map', 1000)\"><md-icon>map</md-icon></button>\r\n      <button md-icon-button color=\"primary\" (click)=\"scrollTo('#noticias', 1000)\"><md-icon>fiber_new</md-icon></button>\r\n      <!--<button md-icon-button><md-icon>account_box</md-icon></button>-->\r\n      <a md-icon-button href=\"http://sig.betera.es/visor/ventanaContacto.php\" target=\"__blank\" color=\"primary\"><md-icon>contact_mail</md-icon></a>\r\n    </md-card-content>\r\n  </md-card>\r\n\r\n  <button (click)=\"scrollTo('#info', 1000)\" md-icon-button style=\"background : #673ab7; margin-top : -20px;\"><md-icon style=\"color : #fff;\">arrow_downward</md-icon></button>\r\n\r\n  <div id=\"home-sections-container\" style=\"position : absolute; top : 100%; left : 0; right : 0; padding-top : 10vh; background : rgba(255, 255, 255, .3)\">\r\n    <md-card id=\"info\" style=\"width : 80%; margin : 0px auto;\">\r\n      <md-card-title  style=\"color : #673ab7;\">¿Qué ofrece SIG Bétera?</md-card-title>\r\n      <img md-card-image src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Estaci%C3%B3n_de_B%C3%A9tera_03.JPG/1500px-Estaci%C3%B3n_de_B%C3%A9tera_03.JPG\" alt=\"\">\r\n      <md-card-content>\r\n        <ul style=\"text-align : left;\">\r\n          <li>Diversidad de información geográfica</li>\r\n          <li>Visor Web y descargas</li>\r\n          <li>Noticias y actualidad</li>\r\n          <li>Notificaciones (Hazte usuario)</li>  \r\n        </ul> \r\n      </md-card-content>\r\n    </md-card>\r\n\r\n    <md-card id=\"visit-map\" style=\"width : 80%; margin : 0px auto; margin-top : 25vh;\">\r\n      <md-card-title style=\"color : #673ab7;\">Visita el mapa</md-card-title>\r\n      <img md-card-image src=\"assets/mapaSB.png\" style=\"filter: invert(1) contrast(0.4);\">\r\n      <md-card-content>\r\n        <p>Dispondrás de distintas funcionalidades para interactuar con la Información Geográfica</p>\r\n        <h4 color=\"primary\">¡¡¿A qué esperas?!!</h4>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n        <a color=\"primary\" md-raised-button href=\"/#/map\">Visitar el Mapa</a>\r\n      </md-card-actions>\r\n    </md-card>\r\n\r\n    <md-card id=\"descargas\" style=\"width : 80%; margin : 0px auto; margin-top : 25vh;\">\r\n      <md-card-title style=\"color : #673ab7;\">Descargas</md-card-title>\r\n      <md-card-content>\r\n        <p>Disponemos de <a href=\"{{GEOSERVER_URL}}\" target=\"_blank\">numerosas capas</a> que puedes descargar en distintos formatos.</p>\r\n        <p>Puedes utilizar la siguiente utilidad para descargar desde aquí: </p>\r\n        <form style=\"margin-top : 10px;\">\r\n          <md-select placeholder=\"Selecciona una capa\" [(ngModel)]=\"selectedLayer\" name=\"layerDownload\" style=\"width : 80%\">\r\n            <md-option *ngFor=\"let layer of layers | async\" [value]=\"layer\">\r\n              {{layer}}\r\n            </md-option>\r\n          </md-select>\r\n        </form>\r\n        <br>\r\n        <form style=\"margin-top : 10px;\">\r\n          <md-select placeholder=\"Selecciona un formato\" [(ngModel)]=\"selectedFormat\" name=\"formatDownload\" style=\"width : 80%\">\r\n            <md-option *ngFor=\"let format of formats\" [value]=\"format.mime\">\r\n              {{format.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </form>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n        <button [disabled]=\"!seledtedLayer && !selectedFormat\" md-raised-button (click)=\"dowloadFromGeoserver()\" color=\"primary\">Descargar</button>\r\n        <button [disabled]=\"!seledtedLayer && !selectedFormat\" md-raised-button (click)=\"openMapBBOXDialog()\" color=\"primary\">Descargar (Por recuadro)</button>\r\n      </md-card-actions>\r\n    </md-card>\r\n\r\n    <md-card id=\"noticias\" style=\"width : 80%; margin : 0px auto; margin-top : 25vh;\">\r\n      <md-card-title style=\"color : #673ab7;\">Noticias</md-card-title>\r\n      <md-card-content>\r\n        En mantenimiento...\r\n      </md-card-content>\r\n    </md-card>\r\n\r\n\r\n\r\n    <md-toolbar color=\"primary\" style=\"position : relative !important; margin-top : 25vh;\">\r\n      <span>Geoportal SIG Bétera</span>\r\n\r\n      <md-toolbar-row>\r\n        <a md-raised-button href=\"http://www.betera.es\" target=\"__blank\" style=\"color : #673ab7; margin: 2px;\">Betera.es</a>\r\n        <a md-raised-button href=\"http://sig.betera.es/visor/noticias/Terminos_Condiciones.pdf\" target=\"__blank\" style=\"color : #673ab7; margin: 2px;\">Términos y condiciones</a>\r\n        <a md-raised-button href=\"http://sig.betera.es/visor/ventanaRecomendaciones.php\" target=\"__blank\" style=\"color : #673ab7; margin: 2px;\">Recomendaciones</a>\r\n        <a md-raised-button href=\"http://sig.betera.es/visor/ventanaFAQs.php\" target=\"__blank\" style=\"color : #673ab7; margin: 2px;\">Preguntas Frecuentas</a>\r\n        <a md-raised-button href=\"http://sig.betera.es/visor/ventanaContacto.php\" target=\"__blank\" style=\"color : #673ab7; margin: 2px;\">Contacto</a>\r\n\r\n      </md-toolbar-row>\r\n    </md-toolbar>\r\n    <md-toolbar style=\"position : relative !important; background : #4527a0; color : #fff; text-align : center;\">\r\n      <span style=\"margin : 0px auto;\">&copy; 2017 SIG Bétera</span>\r\n    </md-toolbar>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<loading-animate></loading-animate>\n<div md-dialog-content>\n  <p>Escribe tu correo y te enviaremos los pasos necesarios para recuperar tu cuenta</p>\n  <md-input-container>\n    <input mdInput [(ngModel)]=\"email\" placeholder=\"Correo electrónico\" type=\"email\">\n  </md-input-container>\n</div>\n\n<div md-dialog-actions>\n  <button md-button (click)=\"sendToken()\">Enviar email</button>\n  <button md-button md-dialog-close=\"\">Cancelar</button>\n</div>"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title color=\"primary\"><md-icon>fingerprint</md-icon>Iniciar Sesión</h1>\n<div md-dialog-content>\n  <div #progress>\n  </div>\n  <img src=\"https://ukla.org/images/icons/user-icon.svg\" alt=\"\" style=\"margin : 0 auto; border-radius : 50px; max-height: 100px;\">\n  <md-input-container  style=\"width : 100%\" >\n    <input mdInput [(ngModel)]=\"userNotLoggedParams.nameOrEmail\" placeholder=\"Usuario o Email\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\">\n    <input mdInput [(ngModel)]=\"userNotLoggedParams.password\" placeholder=\"Contraseña\" type=\"password\" value=\"\">\n  </md-input-container>\n</div>\n<div md-dialog-actions>\n  <button md-button (click)=\"login()\" [disabled]=\"isLoading\">Iniciar</button>\n  <button md-button (click)=\"dialogRef.close()\" [disabled]=\"isLoading\">Cancelar</button>\n</div>"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "\n<!-- { name, password, repassword, nombre, apellidos, email } -->\n<h1 md-dialog-title color=\"primary\"><md-icon>accessibility</md-icon>Registrarse en SIG Bétera</h1>\n<div md-dialog-content>\n  <img src=\"https://ukla.org/images/icons/user-icon.svg\" alt=\"\" style=\"margin : 0 auto; border-radius : 50px; max-height: 100px;\">\n  <md-input-container style=\"width : 100%\" >\n    <input mdInput [(ngModel)]=\"userToCreate.name\" placeholder=\"Nombre de usuario\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\" >\n    <input mdInput [(ngModel)]=\"userToCreate.email\" type=\"email\" placeholder=\"Email\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\" >\n    <input mdInput [(ngModel)]=\"userToCreate.nombre\" placeholder=\"Nombre\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\" >\n    <input mdInput [(ngModel)]=\"userToCreate.apellidos\" placeholder=\"Apellidos\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\">\n    <input mdInput [(ngModel)]=\"userToCreate.password\" placeholder=\"Contraseña\" type=\"password\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\">\n    <input mdInput [(ngModel)]=\"userToCreate.repassword\" placeholder=\"Repetir Contraseña\" type=\"password\" value=\"\">\n  </md-input-container>\n  <div style=\"width : 100%; text-align: center;\">\n    <re-captcha site_key=\"6LfjRAsUAAAAAEav71yglI9Mntr_z5faCBs3QTyw\"></re-captcha>\n  </div>\n</div>\n<div md-dialog-actions>\n  <button md-button (click)=\"signup()\">Registrarse</button>\n  <button md-button (click)=\"dialogRef.close('Option 2')\">Cancelar</button>\n</div>"

/***/ })

},[1100]);
//# sourceMappingURL=main.bundle.js.map