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
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var ng2_dragula_1 = require("ng2-dragula");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var AdminMapsEditComponent = (function () {
    function AdminMapsEditComponent(loading, zone, route, snackBar, dragulaService, adminService) {
        var _this = this;
        this.loading = loading;
        this.zone = zone;
        this.route = route;
        this.snackBar = snackBar;
        this.dragulaService = dragulaService;
        this.adminService = adminService;
        this.hasChangedOrder = false;
        this.getData();
        // Configurar Drag&Drop para que solo funcione apretando al botón
        this.dragulaService.setOptions('order', {
            moves: function (el, container, handle) { return handle.classList.contains('handle'); }
        });
        // Escuchamos al evento dropModel
        this.dragulaService.dropModel.subscribe(function () {
            // Asignamos la posición al parámetro position de cada capa
            _this.map.orden.forEach(function (c, i) { return c.position = i; });
            // Llamamos a la función compareOrder
            _this.compareOrder();
        });
    }
    AdminMapsEditComponent.prototype.ngOnInit = function () { };
    AdminMapsEditComponent.prototype.getData = function () {
        var _this = this;
        // Parámetros de la ruta
        var params = this.route.snapshot.params;
        //console.log(params.id);
        // Obtenemos el mapa
        rxjs_1.Observable.forkJoin(this.adminService.getAllLayers().map(function (res) { return res.json(); }), this.adminService.getAllBaseLayers().map(function (res) { return res.json(); }), this.adminService.getMapById(params.id).map(function (res) { return res.json(); }))
            .map(function (res) {
            var allLayers = res[0], allBaseLayers = res[1], map = res[2];
            //map = map[0];
            //console.log(res);
            _this.originalOrder = [];
            map.orden = (map.orden || []).sort(function (a, b) { return a.position - b.position; });
            map.orden.forEach(function (c) { c.id_map = params.id; _this.originalOrder.push(c); });
            //console.log(allLayers, 'allLayers', allBaseLayers, 'allBaseLayers', map, 'map');
            return [map, allLayers, allBaseLayers];
        }).subscribe(function (data) {
            _this.loading.setValue(false);
            var map = data[0], allLayers = data[1], allBaseLayers = data[2];
            var mapLayers = map.layers || [];
            var mapBaselayers = map.baselayers || [];
            //console.log('orden', map, 'allLayers', allLayers, 'allBaselayers', allBaseLayers);
            _this.map = map;
            _this.AllLayersNotInMap = allLayers.filter(function (l) { return !mapLayers.find(function (ll) { return l.id == ll.id; }); });
            _this.AllBaseLayersNotInMap = allBaseLayers.filter(function (l) { return !mapBaselayers.find(function (ll) { return l.id == ll.id; }); });
            //console.log(this.AllLayersNotInMap, this.AllBaseLayersNotInMap);
            //console.log(data, 'data');
        });
    };
    AdminMapsEditComponent.prototype.compareOrder = function () {
        var _this = this;
        var actualOrder = this.map.orden;
        //console.log('actual', actualOrder)
        //console.log(this.originalOrder);
        this.hasChangedOrder = !actualOrder.every(function (value, idx) { return value.id_layer == _this.originalOrder[idx].id_layer; });
    };
    AdminMapsEditComponent.prototype.getColor = function (capa) {
        return capa.layer_type == 'layer' ? '#ffbb00' : '#00bbff';
    };
    AdminMapsEditComponent.prototype.saveOrder = function () {
        var _this = this;
        var actualOrder = this.map.orden;
        var params = this.route.snapshot.params;
        this.loading.setValue(true);
        this.adminService.setMapOrder(params.id, actualOrder).subscribe(function () {
            _this.loading.setValue(false);
            //console.log('order saved');
            _this.originalOrder = [];
            _this.map.orden.forEach(function (c) { return _this.originalOrder.push(c); });
            _this.compareOrder();
            _this.snackBar.open('Orden guardado correctamente', 'CERRAR', { duration: 2500 });
        });
    };
    AdminMapsEditComponent.prototype.addSelectedLayer = function () {
        var _this = this;
        var id_layer = this.selectedLayerToAdd;
        //console.log(id_layer, '');
        var id_map = this.map.id;
        var layer = this.AllLayersNotInMap.find(function (l) { return l.id == id_layer; });
        this.loading.setValue(true);
        this.adminService.addLayerToMap(id_map, id_layer).subscribe(function () {
            _this.selectedLayerToAdd = null;
            /*
            let newLayer = { id_map, id_layer, position : this.map.orden.length, layer_type : 'layer', name : layer.name };
            this.AllLayersNotInMap = this.AllLayersNotInMap.filter( l => l.id != id_layer);
    
            this.map.orden.push(newLayer);
            this.originalOrder.push(newLayer);
            */
            _this.getData();
        });
    };
    AdminMapsEditComponent.prototype.deleteLayerFromMap = function (id_layer) {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.deleteMapLayer(this.map.id, id_layer).subscribe(function () {
            /*
            let capa = this.map.orden.find( c => c.id == id_layer && c.layer_type == 'layer');
            this.AllLayersNotInMap.push(Object.create(null, capa));
            //console.log(this.map.orden.filter( l => !(l.id == id_layer && l.layer_type == 'layer') ));
            this.map.orden = this.map.orden.filter( l => !(l.id_layer == id_layer && l.layer_type == 'layer') );
            this.map.orden.forEach( (c, i)=> c.position = i );
            this.originalOrder = this.originalOrder.filter( l => !(l.id_layer == id_layer && l.layer_type == 'layer') );
            console.log(capa)
            */
            _this.getData();
        });
    };
    AdminMapsEditComponent.prototype.deleteBaseLayerFromMap = function (id_layer) {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.deleteMapBaseLayer(this.map.id, id_layer).subscribe(function () {
            /*let capa = this.map.orden.find( c => c.id == id_layer && c.layer_type == 'base');
            this.AllBaseLayersNotInMap.push(Object.create(null, capa));
            //console.log(this.map.orden.filter( l => !(l.id == id_layer && l.layer_type == 'layer') ));
            this.map.orden = this.map.orden.filter( l => !(l.id_layer == id_layer && l.layer_type == 'base') );
            this.map.orden.forEach( (c, i)=> c.position = i );
            this.originalOrder = this.originalOrder.filter( l => !(l.id_layer == id_layer && l.layer_type == 'base') );
            */
            _this.getData();
        });
    };
    AdminMapsEditComponent.prototype.addSelectedBaseLayer = function () {
        var _this = this;
        this.loading.setValue(true);
        var id_layer = this.selectedBaseLayerToAdd;
        var id_map = this.map.id;
        var layer = this.AllBaseLayersNotInMap.find(function (l) { return l.id == id_layer; });
        this.adminService.addBaseLayerToMap(id_map, id_layer).subscribe(function () {
            _this.selectedBaseLayerToAdd = null;
            /*let newLayer = { id_map, id_layer, position : this.map.orden.length, layer_type : 'base', name : layer.name };
            this.AllBaseLayersNotInMap = this.AllBaseLayersNotInMap.filter( l => l.id != id_layer);
    
            this.map.orden.push(newLayer);
            this.originalOrder.push(newLayer);*/
            _this.getData();
        });
    };
    return AdminMapsEditComponent;
}());
AdminMapsEditComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-maps-edit',
        templateUrl: './admin-maps-edit.component.html',
        styleUrls: ['./admin-maps-edit.component.css'],
        providers: [services_1.AdminService, ng2_dragula_1.DragulaService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [ng2_loading_animate_1.LoadingAnimateService,
        core_1.NgZone,
        router_1.ActivatedRoute,
        material_1.MdSnackBar,
        ng2_dragula_1.DragulaService,
        services_1.AdminService])
], AdminMapsEditComponent);
exports.AdminMapsEditComponent = AdminMapsEditComponent;
