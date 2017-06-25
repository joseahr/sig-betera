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
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var ol = require("openlayers");
var services_1 = require("../../services");
var router_transitions_1 = require("../../../../router.transitions");
var _1 = require("../");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var MapComponent = (function () {
    function MapComponent(zone, dialog, el, route, router, location, loading, userMapsService, projService, profileService, exportMapService) {
        this.zone = zone;
        this.dialog = dialog;
        this.el = el;
        this.route = route;
        this.router = router;
        this.location = location;
        this.loading = loading;
        this.userMapsService = userMapsService;
        this.projService = projService;
        this.profileService = profileService;
        this.exportMapService = exportMapService;
        this.DEVELOPMENT_GEOSERVER_URL = 'http://localhost:8080/geoserver/betera/wms';
        this.customComponentsWithInteractions = [];
        this.accesibleMaps = [];
        this.actualMap = -1;
        this.mapsControlVisible = 'invisible';
        this.toolsControlVisible = 'invisible';
        this.overviewControlVisible = 'visible';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenav.onOpenStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
        this.sidenav.onCloseStart.subscribe(this.setIntervalUpdateMapSize.bind(this));
        this.sidenav.onOpen.subscribe(this.clearIntervalUpdateMapSize.bind(this));
        this.sidenav.onClose.subscribe(this.clearIntervalUpdateMapSize.bind(this));
        this.createMap();
        this.route.params.subscribe(function () { return _this.addUserMaps(); });
        //this.map.getLayers().on('change:length', ()=>{ this.updateMapAndOverview() });
        this.customComponentsWithInteractions = [
            this.searchControl, this.profileControl, this.measureControl, this.editLayerControl
        ];
    };
    MapComponent.prototype.exportMap = function (event) {
        this.exportMapService.exportMap(this.map, {}, event);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.el.nativeElement.parentNode);
        this.el.nativeElement.parentNode.parentNode.childNodes[0].style.position = 'relative';
        setTimeout(function () { window.scrollTo(0, 1); }, 1000);
        document.body.style.overflow = 'hidden';
        /*let toolbar = <HTMLElement>document.querySelector('md-toolbar');
        toolbar.style.boxShadow = '0 4px 6px 0 rgba(0,0,0,.3);';*/
        //this.createMap();
    };
    MapComponent.prototype.onChangeMap = function () {
        this.router.navigate(['/map', this.actualMap]);
    };
    MapComponent.prototype.getBackgroundColor = function (bool) {
        return bool ? '#8BC34A' : '#f7f7f7';
    };
    MapComponent.prototype.disableControls = function () {
        this.customComponentsWithInteractions.forEach(function (control) {
            control.setActive(false);
        });
    };
    MapComponent.prototype.setIntervalUpdateMapSize = function () {
        var _this = this;
        clearInterval(this.sideNavMapInterval);
        this.sideNavMapInterval = setInterval(function () { return _this.map.updateSize(); }, 20);
    };
    MapComponent.prototype.clearIntervalUpdateMapSize = function () {
        if (!this.overviewCtrl) {
            this.createOverviewMap();
        }
        else {
            this.overviewCtrl.getView().setProperties(this.map.getView().getProperties());
        }
        this.map.updateSize();
        clearInterval(this.sideNavMapInterval);
    };
    MapComponent.prototype.updateMapAndOverview = function () {
        var _this = this;
        this.map.getLayers().getArray().forEach(function (l) { return l.changed(); });
        this.map.render();
        this.map.once('postcompose', function () {
            if (_this.overviewCtrl) {
                _this.overviewCtrl.getLayers().clear();
                _this.overviewCtrl.getLayers().extend(_this.map.getLayers().getArray());
            }
        });
    };
    MapComponent.prototype.toggleMaps = function () {
        //this.layerSwitcherControl.toggleMaps.call(this.layerSwitcherControl);
        this.mapsControlVisible = (this.mapsControlVisible === 'visible') ? 'invisible' : 'visible';
    };
    MapComponent.prototype.toggleTools = function () {
        /*this.toolsContainer.forEach(element =>{
          element.nativeElement.classList.toggle('collapsed');
        });*/
        this.toolsControlVisible = (this.toolsControlVisible === 'visible') ? 'invisible' : 'visible';
    };
    MapComponent.prototype.toggleOverview = function () {
        this.overviewControlVisible = (this.overviewControlVisible === 'visible') ? 'invisible' : 'visible';
    };
    MapComponent.prototype.createMap = function () {
        var _this = this;
        this.mapProperties = {
            target: 'map',
            controls: ol.control.defaults().extend([
                new ol.control.FullScreen({
                    source: 'app-body'
                })
            ]),
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12,
                maxZoom: 20
            })
        };
        this.map = new ol.Map(this.mapProperties);
        this.projService.setProjection(this.map, '25830');
        var view = this.map.getView();
        this.map.once('postcompose', function () {
            return view.fit(ol.proj.transformExtent([-0.4958, 39.563, -0.44153, 39.633], 'EPSG:4326', _this.map.getView().getProjection()));
        });
        //this.addDummyLayers(this.map);
        //this.addUserMaps();
    };
    MapComponent.prototype.createOverviewMap = function () {
        var _this = this;
        var overviewMapProperties = {
            target: this.overviewMapEl.nativeElement,
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [-0.459108, 39.589353],
                zoom: 12
            })
        };
        this.overviewCtrl = new ol.Map(overviewMapProperties);
        this.overviewCtrl.getControls().forEach(function (c) { return _this.overviewCtrl.removeControl(c); });
        this.projService.setProjection(this.overviewCtrl, '25830');
        this.overviewCtrl.getView().on('change', function () {
            _this.map.getView().setProperties(_this.overviewCtrl.getView().getProperties());
            _this.overviewCtrl.updateSize();
        });
        //window.on('resize', ()=>this.overviewCtrl.updateSize());
        this.overviewCtrl.getLayers().clear();
        this.overviewCtrl.getLayers().extend(this.map.getLayers().getArray().slice());
    };
    MapComponent.prototype.addUserMaps = function () {
        var _this = this;
        this.disableControls();
        this.map.getLayers().clear();
        this.loading.setValue(true);
        var params = this.route.snapshot.params;
        var idMap = params.id;
        var visibleMap = false;
        this.userMapsService.getUserMaps()
            .subscribe(function (mapas) {
            console.log('mapas', mapas);
            _this.loading.setValue(false);
            if (!idMap) {
                if (!mapas[0])
                    return;
                var firstMap = mapas[0].id;
                _this.router.navigateByUrl("/map/" + firstMap);
                return;
            }
            _this.accesibleMaps = mapas;
            _this.actualMap = mapas.find(function (m) { return m.id == idMap; }).id;
            _this.location.replaceState("/map/" + _this.actualMap + "/" + mapas.find(function (m) { return m.id == _this.actualMap; }).name);
            // Obtenemos una lista de mapas con las capas ya ordenadas
            // y la recorremos 
            mapas.forEach(function (mapa, index, arr) {
                if (mapa.id != idMap)
                    return;
                //console.log('mapa', mapa);
                // Creamos un grupo de capas vacío
                var groupCapasMap = new ol.layer.Group();
                // Le damos un nombre
                groupCapasMap.set('name', mapa.name);
                groupCapasMap.set('group_capas_map', true);
                groupCapasMap.set('collapsed', 'invisible');
                // Lo añadimos al mapa
                _this.map.addLayer(groupCapasMap);
                mapa.capas.forEach(function (capa) {
                    //console.log('capaa', capa);
                    if (capa.type == 'base')
                        _this.addBaseLayerToGroup(capa, groupCapasMap);
                    else if (capa.type == 'layer')
                        _this.addLayerToGroup(capa, groupCapasMap);
                });
            });
            if (_this.overviewCtrl) {
                _this.overviewCtrl.getLayers().clear();
                _this.overviewCtrl.getLayers().extend(_this.map.getLayers().getArray().slice());
            }
        });
    };
    MapComponent.prototype.getTile = function (opts) {
        var tile = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: opts.service_url,
                gutter: opts.gutter <= 0 ? 0 : 250,
                projection: opts.projection || 'EPSG:25830',
                //crossOrigin: opts.crossOrigin || 'anonymous', // Configurar Geoserver para orígenes remotos primero
                //crossOrigin : 'anonymous',
                params: {
                    'FORMAT': 'image/png',
                    'TRANSPARENT': true,
                    'TILED': true,
                    'LAYERS': opts.layers,
                    'STYLES': ''
                }
            })
        });
        tile.set('service', opts.service_url);
        tile.set('name', opts.name);
        tile.set('type', opts.type);
        tile.set('rol', opts.rol);
        return tile;
    };
    MapComponent.prototype.addBaseLayerToGroup = function (params, group) {
        var tile = this.getTile({
            name: params.name,
            service_url: params.service_url,
            type: 'base',
            layers: params.layers,
            gutter: 250,
            wms_externo: true,
            crossOrigin: '',
        });
        tile.set('wms_externo', true);
        group.getLayers().extend([tile]);
    };
    MapComponent.prototype.addLayerToGroup = function (params, group) {
        var tile = this.getTile({
            service_url: this.DEVELOPMENT_GEOSERVER_URL,
            layers: params.name,
            name: params.name,
            type: 'layer',
            crossOrigin: '',
            rol: params.rol
        });
        group.getLayers().extend([tile]);
    };
    MapComponent.prototype.openWMSDialog = function () {
        var _this = this;
        var dialog = this.dialog.open(_1.AddWmsComponent);
        dialog.afterClosed().subscribe(function (wmsGroup) {
            if (!wmsGroup)
                return;
            var group = new ol.layer.Group();
            var idx = _this.map.getLayers().getArray().findIndex(function (l) { return l.get('showInLayerSwitcher') === false; });
            idx = (idx === -1 ? _this.map.getLayers().getArray().length : idx);
            console.log(idx);
            group.set('name', wmsGroup.serviceURL);
            group.set('removable', true);
            var layers = wmsGroup.layers
                .map(function (l) { return _this.getTile({ service_url: wmsGroup.serviceURL, layers: l.Name, name: l.Name }); });
            group.getLayers().extend(layers);
            _this.map.getLayers().insertAt(idx, group);
        });
    };
    MapComponent.prototype.toggleEditLayers = function () {
        var active = !this.editLayerControl.controlActive;
        if (active)
            this.disableControls();
        this.editLayerControl.setActive(active);
        this.sidenav.close();
    };
    MapComponent.prototype.toggleMeasureControl = function (interaction) {
        if (interaction && this.measureControl.activeInteraction != interaction) {
            this.disableControls();
            this.measureControl.setActive(true, interaction);
            this.sidenav.close();
            return;
        }
        if (!this.measureControl.active) {
            this.disableControls();
            this.measureControl.setActive(true, interaction);
        }
        else {
            this.disableControls();
            this.measureControl.setActive(false);
        }
        this.sidenav.close();
    };
    MapComponent.prototype.toggleSearchControl = function (interaction) {
        if (interaction && this.searchControl.activeInteraction != interaction) {
            this.disableControls();
            this.searchControl.setActive(true, interaction);
            this.sidenav.close();
            return;
        }
        if (!this.searchControl.active) {
            this.disableControls();
            this.searchControl.setActive(true, interaction);
        }
        else {
            this.disableControls();
            this.searchControl.setActive(false);
        }
        this.sidenav.close();
    };
    MapComponent.prototype.toggleProfileControl = function () {
        if (!this.profileControl.active) {
            this.disableControls();
            this.profileControl.setActive(true);
        }
        else {
            this.disableControls();
            this.profileControl.setActive(false);
        }
        this.sidenav.close();
    };
    return MapComponent;
}());
__decorate([
    core_1.ViewChild(core_1.forwardRef(function () { return _1.MeasureComponent; })),
    __metadata("design:type", _1.MeasureComponent)
], MapComponent.prototype, "measureControl", void 0);
__decorate([
    core_1.ViewChild(core_1.forwardRef(function () { return _1.SearchComponent; })),
    __metadata("design:type", _1.SearchComponent)
], MapComponent.prototype, "searchControl", void 0);
__decorate([
    core_1.ViewChild(core_1.forwardRef(function () { return _1.ProfileComponent; })),
    __metadata("design:type", _1.ProfileComponent)
], MapComponent.prototype, "profileControl", void 0);
__decorate([
    core_1.ViewChild(core_1.forwardRef(function () { return _1.LayerSwitcherComponent; })),
    __metadata("design:type", _1.LayerSwitcherComponent)
], MapComponent.prototype, "layerSwitcherControl", void 0);
__decorate([
    core_1.ViewChild(core_1.forwardRef(function () { return _1.EditLayerComponent; })),
    __metadata("design:type", _1.EditLayerComponent)
], MapComponent.prototype, "editLayerControl", void 0);
__decorate([
    core_1.ViewChild('overviewMap'),
    __metadata("design:type", core_1.ElementRef)
], MapComponent.prototype, "overviewMapEl", void 0);
__decorate([
    core_1.ViewChildren('mapTools'),
    __metadata("design:type", core_1.QueryList)
], MapComponent.prototype, "toolsContainer", void 0);
__decorate([
    core_1.ViewChild('sidenav'),
    __metadata("design:type", material_1.MdSidenav)
], MapComponent.prototype, "sidenav", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'app-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css'],
        providers: [services_1.ProjectionService, services_1.Profile3DService, services_1.UserMapsService, services_1.ExportMapService],
        animations: [
            router_transitions_1.routerTransition(),
            core_1.trigger('collapsed', [
                core_1.state('invisible', core_1.style({
                    transform: 'translateX(-100%)',
                    opacity: 0,
                    display: 'none'
                })),
                core_1.state('visible', core_1.style({
                    transform: 'translateX(0%)',
                    opacity: 1,
                    display: ''
                })),
                core_1.transition('invisible => visible', core_1.animate('500ms ease-in')),
                core_1.transition('visible => invisible', core_1.animate('500ms ease-out'))
            ])
        ],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [core_1.NgZone,
        material_1.MdDialog,
        core_1.ElementRef,
        router_1.ActivatedRoute,
        router_1.Router,
        common_1.Location,
        ng2_loading_animate_1.LoadingAnimateService,
        services_1.UserMapsService,
        services_1.ProjectionService,
        services_1.Profile3DService,
        services_1.ExportMapService])
], MapComponent);
exports.MapComponent = MapComponent;
