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
var openlayers_1 = require("openlayers");
var Rx_1 = require("rxjs/Rx");
var material_1 = require("@angular/material");
var keys_pipe_1 = require("angular-pipes/src/object/keys.pipe");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var angular_datatables_1 = require("angular-datatables");
var services_1 = require("../../services");
var basenameFn = function (path) { return path.split(/[\\/]/).pop(); };
var SearchInteraction;
(function (SearchInteraction) {
    SearchInteraction[SearchInteraction["Point"] = 1] = "Point";
    SearchInteraction[SearchInteraction["Box"] = 2] = "Box";
})(SearchInteraction || (SearchInteraction = {}));
var SearchComponent = (function () {
    function SearchComponent(snackbar, dialog, zone, userLayerService, loading) {
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.zone = zone;
        this.userLayerService = userLayerService;
        this.loading = loading;
        this.state = 'invisible';
        this.closeState = 'invisible';
        this.active = false;
        this.activeInteraction = null;
        this.boxInteraction = new openlayers_1.interaction.DragBox();
        this.geojsonParser = new openlayers_1.format.GeoJSON();
        this.searchLayer = new openlayers_1.layer.Vector({
            source: new openlayers_1.source.Vector()
        });
        this.selectedTabIndex = 0;
        this.boxInteraction.on('boxend', this.boxHandler.bind(this));
        this.searchLayer.set('name', 'SearchLayer');
        this.searchLayer.set('showInLayerSwitcher', false);
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        //this.map.addLayer(this.searchLayer);
    };
    SearchComponent.prototype.clickHandler = function (e) {
        var point = new openlayers_1.geom.Point(e.coordinate);
        var feature = new openlayers_1.Feature(point);
        this.search(feature);
    };
    SearchComponent.prototype.boxHandler = function () {
        var box = this.boxInteraction.getGeometry();
        var feature = new openlayers_1.Feature(box);
        this.search(feature);
    };
    SearchComponent.prototype.openDialog = function (newSearch) {
        var _this = this;
        if (!this.found)
            return;
        this.state = 'invisible';
        this.closeState = 'visible';
        //this.dialogCollapsed = false;
        var dialogRef = this.dialogRef = this.dialog.open(SearchComponentDialog);
        dialogRef.componentInstance.found = this.found;
        dialogRef.componentInstance.tabIndex = newSearch ? 0 : this.selectedTabIndex;
        dialogRef.afterClosed().subscribe(function () {
            //this.dialogCollapsed = true;
            _this.selectedTabIndex = dialogRef.componentInstance.tabIndex;
            _this.closeState = 'invisible';
            _this.state = 'visible';
        });
        dialogRef.componentInstance.rowClicked.subscribe(function (data) {
            if (!data)
                return;
            console.log('rowClicked -- ', data);
            var feature = _this.geojsonParser.readFeature(data, {
                dataProjection: _this.map.getView().getProjection(),
                featureProjection: _this.map.getView().getProjection()
            });
            _this.searchLayer.getSource().clear();
            _this.searchLayer.getSource().addFeature(feature);
            _this.searchLayer.getSource().changed();
            _this.dialogRef.close();
            var view = _this.map.getView();
            console.log(feature.getGeometry(), 'geom');
            view.fit(feature.getGeometry(), {
                duration: 1000,
                maxZoom: 15
            });
        });
    };
    SearchComponent.prototype.search = function (feature) {
        var _this = this;
        //this.addLayer();
        this.zone.run(function () { _this.loading.setValue(true); _this.dialog.closeAll(); });
        var layerNames = this.getActiveLayers();
        //console.log('layerNAmes', layerNames)
        this.userLayerService.getFeatures(feature, layerNames).subscribe(function (data) {
            _this.zone.run(function () {
                _this.selectedTabIndex = 0;
                _this.loading.setValue(false);
                var features = data
                    .filter(function (f) { return f.found.features; });
                features
                    .forEach(function (d) { return d.found.features.forEach(function (f) { return f.properties.data_urls = (f.properties.data_urls || []).map(function (du) { return du.url; }); }); });
                //features.forEach(f => console.log(f.layername))
                if (!features.length) {
                    _this.snackbar.open('No se encontraron features', null, { duration: 2000 });
                    return setTimeout(function () {
                        var msg = _this.activeInteraction == SearchInteraction.Point ? 'Haz click' : 'Dibuja un recuadro';
                        _this.snackbar.open(msg + " para realizar la b\u00FAsqueda", 'CERRAR');
                    }, 2000);
                }
                _this.found = features;
                _this.map.render();
                //console.log(features, 'featurrees');
                _this.openDialog(true);
            });
        }, function (err) {
            _this.zone.run(function () { _this.loading.setValue(false); });
        });
    };
    SearchComponent.prototype.getActiveLayers = function () {
        var layerNames = [];
        this.map.getLayers().forEach(function (l) {
            if (!l.get('layers') || !l.get('visible'))
                return;
            l.get('layers').forEach(function (al) {
                //console.log('layer', al.get('type'), al.get('visible'), al.getVisible())
                if (al.get('visible') && al.get('type') == 'layer') {
                    layerNames.push(al.get('name'));
                }
            });
        });
        return layerNames;
    };
    SearchComponent.prototype.setActive = function (value, interaction) {
        if (!value) {
            this.active = false;
            this.found = null;
            this.selectedTabIndex = 0;
            this.activeInteraction = null;
            this.map.removeInteraction(this.boxInteraction);
            openlayers_1.Observable.unByKey(this.clickInteraction);
            this.searchLayer.getSource().clear();
            //this.dialogCollapsed = false;
            this.snackbar._openedSnackBarRef ? this.snackbar._openedSnackBarRef.dismiss() : '';
            //this.map.removeLayer(this.searchLayer);
            this.searchLayer.setMap(null);
            this.state = 'invisible';
            this.closeState = 'invisible';
        }
        else {
            if (!interaction)
                return;
            this.active = true;
            this.setInteraction(interaction);
            this.addLayer();
        }
    };
    SearchComponent.prototype.addLayer = function () {
        this.searchLayer.setMap(this.map);
    };
    SearchComponent.prototype.setInteraction = function (interaction) {
        var msg = interaction == SearchInteraction.Point ? 'Haz click' : 'Dibuja un recuadro';
        this.snackbar.open(msg + " para realizar la b\u00FAsqueda", 'CERRAR');
        //console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
        if (interaction == this.activeInteraction)
            return;
        if (interaction == SearchInteraction.Point) {
            this.map.removeInteraction(this.boxInteraction);
            this.clickInteraction = this.map.on('singleclick', this.clickHandler.bind(this));
            this.activeInteraction = SearchInteraction.Point;
        }
        else {
            openlayers_1.Observable.unByKey(this.clickInteraction);
            this.map.addInteraction(this.boxInteraction);
            this.activeInteraction = SearchInteraction.Box;
        }
    };
    return SearchComponent;
}());
__decorate([
    core_1.Input('map'),
    __metadata("design:type", openlayers_1.Map)
], SearchComponent.prototype, "map", void 0);
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search',
        template: "\n    <button [@buttonVisible]=\"state\" (click)=\"openDialog()\" md-mini-fab style=\"z-index : 1002; position : absolute; bottom: 0.5em; left : 0.5em;\"><md-icon>search</md-icon></button>\n    <button [@buttonCloseVisible]=\"closeState\" (click)=\"close()\"      md-mini-fab style=\"z-index : 1002; position : absolute; top : 0.5em; right : 0.5em;\"><md-icon>close</md-icon></button>\n  ",
        providers: [services_1.UserLayersService, keys_pipe_1.KeysPipe],
        animations: [
            core_1.trigger('buttonVisible', [
                core_1.state('invisible', core_1.style({
                    display: 'none',
                    left: 'calc(100% - 0.5em - 40px)',
                    bottom: 'calc(100% - 0.5em - 40px)'
                })),
                core_1.state('visible', core_1.style({
                    display: '',
                    left: '0.5em',
                    bottom: '0.5em'
                })),
                core_1.transition('invisible => visible', core_1.animate('200ms ease-in')),
                core_1.transition('visible => invisible', core_1.animate('0ms ease-out'))
            ]),
            core_1.trigger('buttonCloseVisible', [
                core_1.state('invisible', core_1.style({
                    display: 'none',
                    right: 'calc(100% - 0.5em - 40px)',
                    top: 'calc(100% - 0.5em - 40px)'
                })),
                core_1.state('visible', core_1.style({
                    display: '',
                    right: '0.5em',
                    top: '0.5em'
                })),
                core_1.transition('invisible => visible', core_1.animate('200ms ease-in')),
                core_1.transition('visible => invisible', core_1.animate('0ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [material_1.MdSnackBar,
        material_1.MdDialog,
        core_1.NgZone,
        services_1.UserLayersService,
        ng2_loading_animate_1.LoadingAnimateService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var SearchComponentDialog = (function () {
    function SearchComponentDialog(zone, dialog) {
        this.zone = zone;
        this.dialog = dialog;
        this.rowClicked = new Rx_1.Subject();
    }
    SearchComponentDialog.prototype.ngOnInit = function () {
        //console.log('oninit');
        this.dtElement.dtOptions = this.getTableOptions(this.tabIndex);
        var subject = new Rx_1.Subject();
        this.dtElement.dtTrigger = subject;
    };
    SearchComponentDialog.prototype.ngAfterViewInit = function () {
        //console.log('AfterViewInit');
        this.dtElement.dtTrigger.next();
        this.addRowClickListener();
    };
    SearchComponentDialog.prototype.addRowClickListener = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            var table = _this.table.nativeElement;
            var tabIndex = _this.tabIndex;
            var data = _this.found[tabIndex];
            var rowClicked = _this.rowClicked;
            dtInstance
                .on('click', '.see-map', function () {
                try {
                    var row_dom = $(this).closest('tr');
                    //console.log('row_dom', row_dom);
                    //if(!row_dom) return;
                    var row_1 = $(table).DataTable().row(row_dom).data();
                    //console.log('row', row);
                    var feature = data.found.features.find(function (f) { return f.properties.gid == row_1.gid; });
                    rowClicked.next(feature);
                }
                catch (e) {
                    console.log(e);
                }
            });
        });
    };
    SearchComponentDialog.prototype.close = function () {
        this.dialog.close();
    };
    SearchComponentDialog.prototype.onChangeTab = function (event) {
        var _this = this;
        this.tabIndex = event.index;
        //console.log(event);
        //this.dtOptions = this.getTableOptions(event.index);
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            $(_this.table.nativeElement).empty();
            _this.dtElement.dtOptions = _this.getTableOptions(event.index);
            _this.dtElement.dtTrigger.next();
            _this.addRowClickListener();
        });
    };
    SearchComponentDialog.prototype.getTableOptions = function (index) {
        var features = this.found[index].found.features;
        var data = features.map(function (feature) { return feature.properties || {}; });
        var columns = [
            { title: 'Ver en Mapa', defaultContent: "\n        <button md-button class=\"mat-button see-map\">\n          <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">map</md-icon>\n        </button>\n      " }
        ].concat(Object.keys(features[0].properties).map(function (key) { return ({ title: key, data: key }); }));
        //console.log('FEATURES - ', features, 'DATA - ', data, 'COLUMNS - ', columns);
        var renderData = function (data, type, row) {
            if (!data)
                return '';
            var _data = data;
            if (!Array.isArray(data))
                _data = [data];
            return _data.map(function (url) {
                if (url.match(/\.jpg|\.jpeg|\.png|\.bmp|\.ico|\.gif|\.svg/))
                    return "<img src=\"" + url + "\" style=\"max-width : 50px; max-height : 50px;margin-left : 5px;\" >";
                return "<a target=\"_blank\" download=\"" + basenameFn(url) + "\" href=\"" + url + "\" style=\"margin-left : 5px;\">" + basenameFn(url) + "</a><br>";
            }).join('');
        };
        var indexData = Object.keys(features[0].properties).indexOf('data_urls');
        return {
            scrollX: true,
            scrollY: false,
            scrollCollapse: true,
            data: data, columns: columns,
            columnDefs: [
                { render: renderData, targets: -1 }
            ],
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            }
        };
    };
    return SearchComponentDialog;
}());
__decorate([
    core_1.ViewChild(angular_datatables_1.DataTableDirective),
    __metadata("design:type", angular_datatables_1.DataTableDirective)
], SearchComponentDialog.prototype, "dtElement", void 0);
__decorate([
    core_1.ViewChild('table'),
    __metadata("design:type", core_1.ElementRef)
], SearchComponentDialog.prototype, "table", void 0);
SearchComponentDialog = __decorate([
    core_1.Component({
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
    }),
    __metadata("design:paramtypes", [core_1.NgZone, material_1.MdDialogRef])
], SearchComponentDialog);
exports.SearchComponentDialog = SearchComponentDialog;
