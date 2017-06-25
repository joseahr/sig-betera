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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var dialogs_1 = require("../../dialogs");
var router_transitions_1 = require("../../router.transitions");
var HomeComponent = (function () {
    function HomeComponent(el, ngZone, http, router, dialog) {
        this.el = el;
        this.ngZone = ngZone;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.layers = [];
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLayers().subscribe(function (layers) {
            _this.layers = layers;
            console.log(layers);
        });
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
        this.dialog.open(dialogs_1.SignupComponent);
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
__decorate([
    core_1.ViewChild('full'),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "full", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.NgZone,
        http_1.Http,
        router_1.Router,
        material_1.MdDialog])
], HomeComponent);
exports.HomeComponent = HomeComponent;
