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
var material_1 = require("@angular/material");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var dialogs_1 = require("./dialogs");
var auth_service_1 = require("./services/auth.service");
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
        if (event instanceof router_1.NavigationStart) {
            this.ngZone.runOutsideAngular(function () {
                _this.loading.setValue(true);
            });
        }
        if (event instanceof router_1.NavigationEnd) {
            this._hideSpinner();
        }
        if (event instanceof router_1.NavigationCancel) {
            this._hideSpinner();
        }
        if (event instanceof router_1.NavigationError) {
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
        var dialogRef = this.dialog.open(dialogs_1.LoginComponent);
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
        var dialogRef = this.dialog.open(dialogs_1.SignupComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            // Hacer algo
        });
    };
    AppComponent.prototype.openForgotDialog = function () {
        var dialogRef = this.dialog.open(dialogs_1.ForgotComponent);
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
    core_1.HostListener("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onWindowScroll", null);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdDialog,
        auth_service_1.AuthService,
        core_1.NgZone,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
