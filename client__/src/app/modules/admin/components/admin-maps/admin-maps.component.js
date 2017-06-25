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
var angular_datatables_1 = require("angular-datatables");
var material_1 = require("@angular/material");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var services_1 = require("../../../../services");
var router_transitions_1 = require("../../../../router.transitions");
var services_2 = require("../../services");
var AdminMapsComponent = (function () {
    function AdminMapsComponent(confirm, loading, router, adminService, snackbar) {
        this.confirm = confirm;
        this.loading = loading;
        this.router = router;
        this.adminService = adminService;
        this.snackbar = snackbar;
        this.dtInstances = [];
        this.dtOptionsMaps = {
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
                url: 'api/admin/maps',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Editar',
                    defaultContent: "\n          <button md-button class=\"mat-button edit-map\">\n            <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n          </button>"
                },
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-map\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' }, { title: 'Nombre', data: 'name' }, { title: 'Capas', data: 'layers' }, { title: 'Capas Base', data: 'baselayers' }
            ],
            columnDefs: [{
                    render: function (data, type, row) {
                        return (data || []).length;
                    }, targets: [4, 5]
                }]
        };
        this.dtOptionsDefaultMaps = {
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
                url: 'api/admin/default-maps',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-default-map\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
            ]
        };
    }
    AdminMapsComponent.prototype.ngOnInit = function () {
    };
    AdminMapsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.dtElements._results[0].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-map', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar el mapa " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteMap(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted');
                        self.dtInstances.forEach(function (dtI) { return dtI.ajax.reload(); });
                        //dtInstance.ajax.reload();
                        self.snackbar.open("Mapa " + row.name + " eliminado correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
            dtInstance.on('click', '.edit-map', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.goToEditMap(row.id);
            });
        });
        this.dtElements._results[1].dtInstance.then(function (dtInstance) {
            _this.dtInstances.push(dtInstance);
            dtInstance.on('click', '.remove-default-map', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("El mapa " + row.name + " dejar\u00E1 de ser visible por todos los usuarios. \u00BFEliminar como mapa por defecto?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteDefaultMap(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        //console.log('deleted baselayer')
                        dtInstance.ajax.reload();
                        self.snackbar.open("Mapa por defecto " + row.name + " eliminado correctamente", 'CERRAR', {
                            duration: 2000
                        });
                    });
                });
            });
        });
    };
    AdminMapsComponent.prototype.goToCreateMap = function () {
        this.router.navigateByUrl('/admin/maps/new/map');
    };
    AdminMapsComponent.prototype.goToCreateDefaultMap = function () {
        this.router.navigateByUrl('/admin/maps/new/default');
    };
    AdminMapsComponent.prototype.goToEditMap = function (id) {
        this.router.navigateByUrl("/admin/maps/edit/" + id);
    };
    return AdminMapsComponent;
}());
__decorate([
    core_1.ViewChildren(angular_datatables_1.DataTableDirective),
    __metadata("design:type", Object)
], AdminMapsComponent.prototype, "dtElements", void 0);
AdminMapsComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-maps',
        templateUrl: './admin-maps.component.html',
        styleUrls: ['./admin-maps.component.css'],
        providers: [services_2.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [services_1.ConfirmDialogService,
        ng2_loading_animate_1.LoadingAnimateService,
        router_1.Router,
        services_2.AdminService,
        material_1.MdSnackBar])
], AdminMapsComponent);
exports.AdminMapsComponent = AdminMapsComponent;
