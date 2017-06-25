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
var angular_datatables_1 = require("angular-datatables");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var _1 = require("../");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var services_2 = require("../../../../services");
var AdminLayersComponent = (function () {
    function AdminLayersComponent(confirm, loading, adminService, dialogRef, snackbar, location, router, route) {
        this.confirm = confirm;
        this.loading = loading;
        this.adminService = adminService;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        this.location = location;
        this.router = router;
        this.route = route;
        this.dtInstances = [];
        this.dtOptionsLayers = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/layers',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Editar',
                    defaultContent: "\n          <button md-button class=\"mat-button edit-layer\">\n            <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n          </button>"
                },
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-layer\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
                { title: 'OID', data: 'oid' },
                { title: 'Publicada GS', data: 'published' },
                {
                    title: 'Publicar/Eliminar de GS',
                    defaultContent: "\n          <button md-button class=\"mat-button publish-layer\">\n            <md-icon style=\"color : #00bbff\" class=\"material-icons mat-icon\">publish</md-icon>\n          </button>"
                },
            ]
        };
        this.dtOptionsBase = {
            scrollX: true,
            scrollY: '50vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/baselayers',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-baselayer\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
                { title: 'Capas', data: 'layers' },
                { title: 'URL', data: 'service_url' }
            ]
        };
    }
    AdminLayersComponent.prototype.ngOnInit = function () {
    };
    AdminLayersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //console.log('dtElements', this.dtElements);
        var self = this;
        this.dtElements._results[0].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-layer', function () {
                //self.loading.setValue(true);
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar la capa " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteLayer(row.name).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted');
                        dtInstance.ajax.reload();
                        self.snackbar.open("Capa " + row.name + " eliminada correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
            dtInstance.on('click', '.edit-layer', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.openEditLayerNameDialog(row);
            });
            dtInstance.on('click', '.publish-layer', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.publishLayer(row);
            });
        });
        this.dtElements._results[1].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-baselayer', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar la capa base que contiene las siguiente capas: " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteBaseLayer(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted baselayer')
                        dtInstance.ajax.reload();
                        self.snackbar.open("Capa Base " + row.id + " eliminada correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
        });
    };
    AdminLayersComponent.prototype.goToCreateLayerPage = function () {
        this.router.navigate(['./new', 'layer'], { relativeTo: this.route });
    };
    AdminLayersComponent.prototype.goToCreateBaseLayerPage = function () {
        this.router.navigate(['./new', 'baselayer'], { relativeTo: this.route });
    };
    AdminLayersComponent.prototype.openEditLayerNameDialog = function (layerData) {
        var _this = this;
        var dialog = this.dialogRef.open(_1.AdminLayerEditComponent);
        dialog.componentInstance.layerData = layerData;
        dialog.afterClosed().subscribe(function (data) {
            if (data)
                _this.dtInstances[0].ajax.reload();
        });
    };
    AdminLayersComponent.prototype.publishLayer = function (data) {
        var _this = this;
        var published = data.published, name = data.name;
        var obs;
        this.loading.setValue(true);
        if (published) {
            obs = this.adminService.unpublishLayer(name);
        }
        else {
            obs = this.adminService.publishLayer(name);
        }
        obs.subscribe(function () {
            _this.dtInstances[0].ajax.reload();
            _this.loading.setValue(false);
        });
    };
    return AdminLayersComponent;
}());
__decorate([
    core_1.ViewChildren(angular_datatables_1.DataTableDirective),
    __metadata("design:type", Object)
], AdminLayersComponent.prototype, "dtElements", void 0);
AdminLayersComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-layers',
        templateUrl: './admin-layers.component.html',
        styleUrls: ['./admin-layers.component.css'],
        providers: [services_1.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [services_2.ConfirmDialogService,
        ng2_loading_animate_1.LoadingAnimateService,
        services_1.AdminService,
        material_1.MdDialog,
        material_1.MdSnackBar,
        common_1.Location,
        router_1.Router,
        router_1.ActivatedRoute])
], AdminLayersComponent);
exports.AdminLayersComponent = AdminLayersComponent;
