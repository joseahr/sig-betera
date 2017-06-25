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
var ol = require("openlayers");
var services_1 = require("../../modules/map/services");
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
        var dialog = this.dialog.open(dialogs_1.SignupComponent);
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
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _b || Object, typeof (_c = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof material_1.MdDialog !== "undefined" && material_1.MdDialog) === "function" && _e || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var SelectBoxToDownloadFromGeoserverDialog = (function () {
    function SelectBoxToDownloadFromGeoserverDialog(projService, dialogRef) {
        this.projService = projService;
        this.dialogRef = dialogRef;
        this.GEOSERVER_URL = 'http://localhost:8080/geoserver';
    }
    SelectBoxToDownloadFromGeoserverDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new ol.Map({
            target: this.mapElement.nativeElement,
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12,
                maxZoom: 20
            })
        });
        this.projService.setProjection(this.map, '25830');
        var layer = new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: this.GEOSERVER_URL + "/betera/wms",
                projection: this.map.getView().getProjection(),
                params: {
                    layers: this.selectedLayer
                }
            })
        });
        var vectorLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        });
        this.map.addLayer(layer);
        this.map.addLayer(vectorLayer);
        var dragBox = new ol.interaction.DragBox({
            condition: ol.events.condition.always
        });
        this.map.addInteraction(dragBox);
        dragBox.on('boxstart', function () { return vectorLayer.getSource().clear(); });
        dragBox.on('boxend', function () {
            var geometry = dragBox.getGeometry();
            _this.bbox = geometry.getExtent();
            var feature = new ol.Feature();
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
    core_1.ViewChild('map'),
    __metadata("design:type", typeof (_f = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _f || Object)
], SelectBoxToDownloadFromGeoserverDialog.prototype, "mapElement", void 0);
SelectBoxToDownloadFromGeoserverDialog = __decorate([
    core_1.Component({
        template: "\n        <div md-dialog-title>\n            Selecciona un recuadro\n        </div>\n        <div #map style=\"width : 100%; height : 100%;\"></div>\n        <md-dialog-actions>\n            <button [disabled]=\"!bbox\" md-raised-button (click)=\"dowloadFromGeoserver()\" color=\"primary\">Descargar</button>\n        </md-dialog-actions>\n    ",
        providers: [services_1.ProjectionService]
    }),
    __metadata("design:paramtypes", [services_1.ProjectionService, typeof (_g = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _g || Object])
], SelectBoxToDownloadFromGeoserverDialog);
exports.SelectBoxToDownloadFromGeoserverDialog = SelectBoxToDownloadFromGeoserverDialog;
var _a, _b, _c, _d, _e, _f, _g;
