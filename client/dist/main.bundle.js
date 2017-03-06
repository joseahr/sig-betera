webpackJsonp([1,4],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(751),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projection_service__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_openlayers__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as proj4 from 'proj4';
var MapComponent = (function () {
    function MapComponent(projService, dragulaService) {
        this.projService = projService;
        this.dragulaService = dragulaService;
        this.isPanelOpen = true;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.dragulaService.setOptions('layers', {
            moves: function (el, container, handle) { return handle.classList.contains('handle'); },
            accepts: function (el, target, source, sibling) { return target.attributes[2].value == 'layers'; }
        });
        this.dragulaService.setOptions('layerGroup', {
            moves: function (el, container, handle) { return handle.classList.contains('handleGroup'); },
            accepts: function (el, target, source, sibling) { return target.attributes[1].value == 'layerGroup' && el.parentNode == target; }
        });
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        this.createMap();
    };
    MapComponent.prototype.createMap = function () {
        //window.addEventListener('resize', this.fitMap.bind(this));
        this.fitMap();
        this.map = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["Map"]({
            target: 'map',
            controls: __WEBPACK_IMPORTED_MODULE_3_openlayers__["control"].defaults(),
            view: new __WEBPACK_IMPORTED_MODULE_3_openlayers__["View"]({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12
            })
        });
        this.projService.setProjection(this.map, '25830');
        var OSMLayer = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Tile({ source: new __WEBPACK_IMPORTED_MODULE_3_openlayers__["source"].OSM() });
        OSMLayer.set('name', 'OSM');
        var OSMLayer2 = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Tile({ source: new __WEBPACK_IMPORTED_MODULE_3_openlayers__["source"].OSM() });
        OSMLayer2.set('name', 'OSM2');
        var OSMLayer3 = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Tile({ source: new __WEBPACK_IMPORTED_MODULE_3_openlayers__["source"].OSM() });
        OSMLayer3.set('name', 'OSM3');
        var OSMLayer4 = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Tile({ source: new __WEBPACK_IMPORTED_MODULE_3_openlayers__["source"].OSM() });
        OSMLayer4.set('name', 'OSM4');
        var orto = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_3_openlayers__["source"].TileWMS({
                url: 'http://www.ign.es/wms-inspire/pnoa-ma',
                projection: this.map.getView().getProjection(),
                params: {
                    "LAYERS": 'OI.OrthoimageCoverage'
                }
            })
        });
        orto.set('name', 'Ortofoto PNOA');
        var groupCapasBase = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Group({
            layers: [OSMLayer, OSMLayer2, OSMLayer3, OSMLayer4]
        });
        groupCapasBase.set('name', 'groupp');
        var groupCapasBase2 = new __WEBPACK_IMPORTED_MODULE_3_openlayers__["layer"].Group({
            layers: [OSMLayer, OSMLayer2, OSMLayer3, orto]
        });
        groupCapasBase2.set('name', 'group2');
        this.map.addLayer(OSMLayer);
        this.map.addLayer(orto);
        this.map.addLayer(OSMLayer2);
        this.map.addLayer(OSMLayer3);
        this.map.addLayer(OSMLayer4);
        this.map.addLayer(groupCapasBase);
        this.map.addLayer(groupCapasBase2);
        /*this.map.addLayer(orto);
        this.map.addLayer(orto);
        this.map.addLayer(orto);*/
    };
    MapComponent.prototype.fitMap = function () {
        var _this = this;
        var offsetTop = this.mapElement.nativeElement.getBoundingClientRect().top;
        this.mapElement.nativeElement.style.height = "calc(100vh - " + offsetTop + "px)";
        this.sidebar.nativeElement.style.top = offsetTop + "px";
        this.sidebar.nativeElement.style.height = "calc(100vh - " + offsetTop + "px)";
        if (this.map) {
            this.map.on('postcompose', function () {
                _this.map.updateSize();
                _this.map.render();
            });
            this.map.render();
        }
    };
    MapComponent.prototype.toggleMaps = function () {
        this.mapsDetailsContainer.nativeElement.classList.toggle('collapsed');
    };
    MapComponent.prototype.changeOpacity = function (event, name) {
        this.map.getLayers().forEach(function (l) {
            if (l.get('name') == name) {
                l.setOpacity(event.value);
            }
        });
    };
    MapComponent.prototype.changeVisible = function (event, name) {
        this.map.getLayers().forEach(function (l) {
            if (l.get('name') == name) {
                l.setVisible(event.checked);
            }
        });
    };
    MapComponent.prototype.toggleMenu = function (event) {
        this.sidebar.nativeElement.classList.toggle('visible');
        this.map.on('postcompose', this.map.updateSize);
    };
    MapComponent.prototype.moveLayerUp = function (name) {
        var layers = this.map.getLayers().getArray();
        var index = -1;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].get('name') == name) {
                index = i;
                break;
            }
        }
        console.log(index);
        if (index >= 0) {
            var layer = this.map.getLayers().getArray().splice(index, 1)[0];
            this.map.getLayers().getArray().splice(index + 1, 0, layer);
        }
    };
    MapComponent.prototype.moveLayerDown = function (name) {
        var layers = this.map.getLayers().getArray();
        var index = -1;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].get('name') == name) {
                index = i;
                break;
            }
        }
        console.log(index);
        if (index > 0) {
            var layer = this.map.getLayers().getArray().splice(index, 1)[0];
            this.map.getLayers().getArray().splice((index - 1 | 0), 0, layer);
        }
    };
    MapComponent.prototype.moveLayerInGroupUp = function (groupLayersName, layerName) {
        var layers = this.map.getLayers().getArray();
        var indexGroup = -1;
        var indexLayer = -1;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].get('name') == groupLayersName && layers[i].get('layers')) {
                indexGroup = i;
                for (var j = 0; j < layers[i].get('layers').getArray().length; j++) {
                    if (layers[i].get('layers').getArray()[j].get('name') == layerName) {
                        indexLayer = j;
                        break;
                    }
                }
                break;
            }
        }
        console.log(indexGroup, groupLayersName, indexLayer, layerName);
        if (indexGroup >= 0 && indexLayer >= 0) {
            var layerGroup = this.map.getLayers().getArray()[indexGroup].get('layers').getArray();
            var layer = layerGroup.splice(indexLayer, 1)[0];
            layerGroup.splice(indexLayer + 1, 0, layer);
        }
    };
    MapComponent.prototype.moveLayerInGroupDown = function (groupLayersName, layerName) {
        var layers = this.map.getLayers().getArray();
        var indexGroup = -1;
        var indexLayer = -1;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].get('name') == groupLayersName && layers[i].get('layers')) {
                indexGroup = i;
                for (var j = 0; j < layers[i].get('layers').getArray().length; j++) {
                    if (layers[i].get('layers').getArray()[j].get('name') == layerName) {
                        indexLayer = j;
                        break;
                    }
                }
                break;
            }
        }
        console.log(indexGroup, groupLayersName, indexLayer, layerName);
        if (indexGroup >= 0 && indexLayer > 0) {
            var layerGroup = this.map.getLayers().getArray()[indexGroup].get('layers').getArray();
            var layer = layerGroup.splice(indexLayer, 1)[0];
            layerGroup.splice((indexLayer - 1 | 0), 0, layer);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapEl'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], MapComponent.prototype, "mapElement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapsDetailsContainer'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object)
    ], MapComponent.prototype, "mapsDetailsContainer", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _c) || Object)
    ], MapComponent.prototype, "sidebar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('group'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _d) || Object)
    ], MapComponent.prototype, "groups", void 0);
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(752),
            styles: [__webpack_require__(702)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_projection_service__["a" /* ProjectionService */], __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]],
            host: {
                '(window:resize)': 'fitMap()'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_projection_service__["a" /* ProjectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_projection_service__["a" /* ProjectionService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"]) === 'function' && _f) || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(634);
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
    function LoginComponent(dialogRef, authService) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.userNotLoggedParams = {};
    }
    LoginComponent.prototype.login = function () {
        var _a = this.userNotLoggedParams, nameOrEmail = _a.nameOrEmail, password = _a.password;
        this.authService.login(nameOrEmail, password).subscribe(function (result) { return console.log(result); }, function (err) { return console.log(err); });
        console.log(this.userNotLoggedParams);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(753),
            styles: [__webpack_require__(703)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 471;


/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(635);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_login_login_component__ = __webpack_require__(435);
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



var AppComponent = (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.openLoginDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_login_login_component__["a" /* LoginComponent */]);
        dialogRef.afterClosed().subscribe(function (result) { return console.log(result); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(750),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_map_map_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialogs_login_login_component__ = __webpack_require__(435);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dialogs_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* appRoutes */], { useHash: true })
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__dialogs_login_login_component__["a" /* LoginComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_map_map_component__ = __webpack_require__(434);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__components_map_map_component__["a" /* MapComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_proj4__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_proj4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_proj4__);
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




__WEBPACK_IMPORTED_MODULE_2_openlayers__["proj"].setProj4(__WEBPACK_IMPORTED_MODULE_3_proj4__);
var ProjectionService = (function () {
    function ProjectionService(http) {
        this.http = http;
        this.defaultProjections = [{
                code: '25830',
                name: 'ETRS89 / UTM zone 30N',
                proj4: '+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
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
        __WEBPACK_IMPORTED_MODULE_3_proj4__["defs"]("EPSG:" + code, proj.proj4);
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
    ProjectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ProjectionService);
    return ProjectionService;
    var _a;
}());
//# sourceMappingURL=projection.service.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
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
    AuthService.prototype.login = function (username, password) {
        return this.http.post('/user/login', {
            username: username,
            password: password
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, ".spacer {\r\n  -webkit-box-flex : 1;\r\n  -ms-flex : 1 1 auto;\r\n  flex : 1 1 auto;\r\n}\r\n\r\nmd-toolbar {\r\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\nmd-toolbar button {\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  margin-left: 5px;\r\n}\r\n\r\n.logo-betera {\r\n  height: 100%;\r\n}\r\n\r\ntitle {\r\n  box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  md-toolbar button {\r\n    visibility: hidden;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.navigation {\r\n    left: -301px;\r\n    width: 300px;\r\n}\r\n.navigation.visible ~ .full{\r\n    margin-left: 300px;\r\n    width : calc(100vw - 300px);\r\n}\r\n.navigation.visible ~ .burguer{\r\n    left : 290px;\r\n}\r\n.navigation.visible ~ .burguer md-icon {\r\n    /*color : #ff0000;*/\r\n}\r\n.navigation {\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\r\n    height: 100vh;\r\n    padding: 12px 20px;\r\n    position: fixed;\r\n    -webkit-transition: all .5s cubic-bezier(.39,.575,.565,1);\r\n    transition: all .5s cubic-bezier(.39,.575,.565,1);\r\n    top: 0;\r\n    z-index : 1;\r\n    overflow-y: scroll;\r\n}\r\n.full {\r\n    background : #f8f8f8;\r\n    width : 100%;\r\n    height : 100vh;\r\n    box-sizing: border-box;\r\n    -webkit-transition: all .5s cubic-bezier(.39,.575,.565,1);\r\n    transition: all .5s cubic-bezier(.39,.575,.565,1);\r\n\r\n}\r\n.navigation.visible {\r\n    left: 0;\r\n}\r\n\r\n.navigation ~ .full{\r\n    margin-left: 0px;\r\n}\r\n\r\n\r\n.navigation.visible ~ .burguer {\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n}\r\n\r\n.burguer {\r\n    /*background-color: #f7f7f7;*/\r\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\r\n    /*border: none;\r\n    cursor: pointer;\r\n    outline: none;\r\n    padding : 3px;\r\n\r\n    */\r\n    left: 0.5em;\r\n    position : absolute;\r\n    z-index: 1;\r\n    top: 50vh;\r\n    /*border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;*/\r\n    -webkit-transition: all .5s cubic-bezier(.39,.575,.565,1);\r\n    transition: all .5s cubic-bezier(.39,.575,.565,1);\r\n}\r\n\r\n.burguer md-icon {\r\n    -webkit-transition: all .35s cubic-bezier(.39,.575,.565,1);\r\n    transition: all .35s cubic-bezier(.39,.575,.565,1);\r\n}\r\n\r\n.menus {\r\n    list-style: none;\r\n    margin-top: 50px;\r\n}\r\n\r\n.menu a {\r\n    border-bottom: 1px dashed #aaa;\r\n    color: #333;\r\n    display: block;\r\n    font-family: 'Barrio';\r\n    padding: 15px 0;\r\n    text-decoration: none;\r\n}\r\n\r\n/*.navigation md-slider {\r\n    left : 5px;\r\n    min-width: 105px !important;\r\n    width : 50%;\r\n}\r\n\r\n\r\nmd-list-item {\r\n    margin-top : 20px;\r\n    height : auto !important;\r\n}\r\n\r\n.mat-list-item:last-child {\r\n    margin-bottom : 20px !important;\r\n}\r\n*/\r\n.group {\r\n    -webkit-transition: all 1s cubic-bezier(.39,.575,.565,1);\r\n    transition: all 1s cubic-bezier(.39,.575,.565,1);\r\n}\r\n\r\n.collapsed {\r\n    display : none;\r\n    height: 0px;\r\n}\r\n\r\n.group .list-item{\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n.list {\r\n    height: auto;\r\n}\r\n\r\n.list-item {\r\n    min-height: 100px;\r\n    height : auto;\r\n    background: #fff;\r\n    padding : 5px;\r\n    margin-bottom : 10px;\r\n    box-shadow: 0 4px 6px 0 rgba(0,0,0,.3);\r\n    border-radius: 2px;\r\n    /*border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;*/\r\n}\r\n\r\n.list-button {\r\n    width : 100%;\r\n    min-width: 100% !important;\r\n    background: #fff;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.group .list-item{\r\n    background: #f7f7f7;\r\n    border-radius: 0px;\r\n}\r\n\r\nmd-slider {\r\n    display: block;\r\n    width: 85%;\r\n    min-width: 105px;\r\n}\r\n\r\n.content .actions {\r\n    display : block;\r\n}\r\n\r\n.actions {\r\n    border-top : 1px dashed #000;\r\n    padding-top : 5px;\r\n}\r\n\r\n.actions button {\r\n    min-width: 30px !important;\r\n}\r\n\r\n.buttons {\r\n    display : block;\r\n    max-width: 50px;\r\n    max-height: 50px;\r\n    float : right;\r\n}\r\n\r\n.buttons button {\r\n    float : right;\r\n    display : block;\r\n    min-width: 30px !important;\r\n}\r\n\r\n@media only screen and (min-width:960px){\r\n    .navigation {\r\n        left: -35vw;\r\n        width: 35vw;\r\n    }\r\n    .navigation.visible ~ .full{\r\n        margin-left: 35vw;\r\n        width : 65vw;\r\n    }\r\n    .navigation.visible ~ .burguer{\r\n        left : calc(35vw - 10px);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <img src=\"assets/escudo.png\" alt=\"\" class=\"logo-betera\">\n  <span class=\"title\">SIG Bétera</span>\n  <span class=\"spacer\"></span>\n  <button md-button [routerLink]=\"['']\">\n    Inicio\n  </button>\n  <button md-button [routerLink]=\"['map']\">\n    Mapa\n  </button>\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <md-menu #userDetailsMenu=\"mdMenu\">\n    <button md-menu-item *ngIf=\"authUser\">\n      <div class=\"user-actions\">\n        <span>{{authUser.auth.displayName}} </span>\n        <img src=\"{{authUser.auth.photoURL}}\">\n      </div>\n    </button> \n  </md-menu>\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item *ngIf=\"!authUser\" (click)=\"openLoginDialog()\">\n      <md-icon>fingerprint</md-icon>\n      <span>Login</span>\n    </button>\n    <button md-menu-item *ngIf=\"authUser\" (click)=\"logout()\">\n      <md-icon>fingerprint</md-icon>\n      <span>Logout</span>\n    </button>\n    <button md-menu-item>\n      <md-icon>fingerprint</md-icon>\n      <span>Acerca de</span>\n    </button>\n  </md-menu>\n</md-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "home"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<aside #sidebar id=\"sidebar\" class=\"navigation\">\n  <button md-button class=\"list-button\" (click)=\"toggleMaps()\">\n    <md-icon style=\"float : left;\">layers</md-icon> MAPAS\n  </button>\n  <!-- control de capas -->\n  <div #mapsDetailsContainer *ngIf=\"map && map.getLayers().getArray()\" class=\"list\" [dragula]='\"layers\"' [dragulaModel]='map.getLayers().getArray()'>\n    <div class=\"list-item\" *ngFor=\"let layer of map.getLayers().getArray(); let i = index;\">\n      <div class=\"buttons\">\n        <button md-button *ngIf=\"i > 0\" (click)=\"moveLayerDown(layer.get('name'))\"><md-icon>keyboard_arrow_up</md-icon></button>\n        <button md-button *ngIf=\"i < map.getLayers().getArray().length - 1\" (click)=\"moveLayerUp(layer.get('name'))\"><md-icon>keyboard_arrow_down</md-icon></button>\n      </div>\n      <div class=\"content\">\n        <md-slide-toggle (change)=\"changeVisible($event, layer.get('name'))\" [checked]=\"layer.getVisible()\">\n          {{ layer.get('name') }}\n        </md-slide-toggle>\n        <md-slider (input)=\"changeOpacity($event, layer.get('name'))\" step=\"0.05\" [min]=\"0\" [max]=\"1\" [value]=\"layer.getOpacity()\">\n        </md-slider>\n        <div class=\"actions\">\n          <button *ngIf=\"layer.get('layers')\" md-button (click)=\"groups._results[i].nativeElement.classList.toggle('collapsed')\"><md-icon>add</md-icon></button>\n          <button md-button><md-icon>zoom_out_map</md-icon></button>\n          <button md-button><md-icon>map</md-icon></button>\n          <button md-button class=\"handle\" style=\"float : right;\"><md-icon>drag_handle</md-icon></button>\n        </div>\n      </div>\n      <div #group class=\"group collapsed\">\n        <div *ngIf=\"layer.get('layers')\" [dragula]='\"layerGroup\"' [dragulaModel]=\"layer.get('layers').getArray()\">\n          <div class=\"list-item\" *ngFor=\"let layer_ of layer.get('layers').getArray()\">\n            <div class=\"buttons\">\n              <button md-button (click)=\"moveLayerInGroupDown(layer.get('name'), layer_.get('name'))\"><md-icon>keyboard_arrow_up</md-icon></button>\n              <button md-button (click)=\"moveLayerInGroupUp(layer.get('name'), layer_.get('name'))\"><md-icon>keyboard_arrow_down</md-icon></button>\n            </div>\n            <div class=\"content\">\n              <md-slide-toggle (change)=\"changeVisible($event, layer_.get('name'))\" [checked]=\"layer.getVisible()\">\n                {{ layer_.get('name') }}\n              </md-slide-toggle>\n              <md-slider (input)=\"changeOpacity($event, layer_.get('name'))\" step=\"0.05\" [min]=\"0\" [max]=\"1\" [value]=\"layer.getOpacity()\">\n              </md-slider>\n              <div class=\"actions\">\n                <button md-button><md-icon>info</md-icon></button>\n                <button md-button><md-icon>zoom_out_map</md-icon></button>\n                <button md-button><md-icon>map</md-icon></button>\n                <button md-button class=\"handleGroup\" style=\"float : right;\"><md-icon>drag_handle</md-icon></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- control de capas -->\n  <button md-button class=\"list-button\">\n    <md-icon style=\"float : left;\">layers</md-icon> MINIATURA\n  </button>\n  <button md-button class=\"list-button\">\n    <md-icon style=\"float : left;\">layers</md-icon> DESCARGAR MAPA\n  </button>\n</aside>  \n<button md-mini-fab id=\"burguer\" class=\"burguer\" (click)=\"toggleMenu($event)\">\n  <md-icon>add</md-icon>\n</button>\n<div class=\"full\" #mapEl id=\"map\">\n</div>\n\n<!-- <md-sidenav-container fullscreen class=\"sidenav-fab-container\">\n  <md-sidenav #sidenav mode=\"side\" opened=\"isPanelOpen\">\n    <div class=\"scrolling-content\">\n      <md-list *ngIf=\"layers\">\n        <md-list-item>\n          <h3>Mapas</h3>\n        </md-list-item>\n        <md-list-item *ngFor=\"let layer of layers\">\n          <md-icon md-list-avatar>folder</md-icon>\n          <p md-line><md-slide-toggle (change)=\"changeVisible($event, layer.get('name'))\" [checked]=\"layer.getVisible()\"> {{ layer.get('name') }} </md-slide-toggle></p>\n          <p md-line><md-slider (input)=\"changeOpacity($event, layer.get('name'))\" step=\"0.05\" [min]=\"0\" [max]=\"1\" [value]=\"layer.getOpacity()\"></md-slider></p>\n        </md-list-item>\n        <md-divider></md-divider>\n      </md-list>\n\n    </div>\n  </md-sidenav>\n  <button md-mini-fab class=\"fab\" (click)=\"sidenav.toggle()\" [ngClass]=\"{'rotated': isPanelOpen }\">\n    <md-icon>add</md-icon>\n  </button>\n  <div id=\"map\" class=\"scrolling-content\">\n  </div>\n</md-sidenav-container>-->\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "\n<h1 md-dialog-title>Iniciar Sesión</h1>\n<div md-dialog-content>\n  <md-input-container style=\"width : 100%\" >\n    <input mdInput [(ngModel)]=\"userNotLoggedParams.nameOrEmail\" placeholder=\"Usuario o Email\" value=\"\">\n  </md-input-container>\n  <md-input-container style=\"width : 100%\">\n    <input mdInput [(ngModel)]=\"userNotLoggedParams.password\" placeholder=\"Contraseña\" type=\"password\" value=\"\">\n  </md-input-container>\n</div>\n<div md-dialog-actions>\n  <button md-button (click)=\"login()\">Iniciar</button>\n  <button md-button (click)=\"dialogRef.close('Option 2')\">Cancelar</button>\n</div>"

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(472);


/***/ })

},[798]);
//# sourceMappingURL=main.bundle.js.map