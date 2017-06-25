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
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../services");
var angular_datatables_1 = require("angular-datatables");
var router_1 = require("@angular/router");
var AdminUsersComponent = (function () {
    function AdminUsersComponent(adminService, zone, router) {
        this.adminService = adminService;
        this.zone = zone;
        this.router = router;
        this.dtOptions = {
            scrollX: true,
            scrollY: '60vh',
            scrollCollapse: true,
            dom: 'frtlip',
            language: {
                "lengthMenu": "_MENU_",
                "search": "",
                "searchPlaceholder": "Search...",
            },
            ajax: {
                url: 'api/admin/users',
                dataSrc: ''
            },
            columns: [{
                    title: 'Editar',
                    defaultContent: "\n        <button md-button class=\"mat-button edit-user\">\n          <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n        </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
                { title: 'Email', data: 'email' },
                { title: 'Rol', data: 'rol' },
                { title: 'Válido', data: 'valid' }
            ]
        };
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
    };
    AdminUsersComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.on('click', '.edit-user', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.router.navigate(["admin/users/", "" + row.id]);
            });
        });
    };
    return AdminUsersComponent;
}());
__decorate([
    core_1.ViewChild(angular_datatables_1.DataTableDirective),
    __metadata("design:type", angular_datatables_1.DataTableDirective)
], AdminUsersComponent.prototype, "datatableElement", void 0);
AdminUsersComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-users',
        templateUrl: './admin-users.component.html',
        styleUrls: ['./admin-users.component.css'],
        providers: [services_1.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [services_1.AdminService,
        core_1.NgZone,
        router_1.Router])
], AdminUsersComponent);
exports.AdminUsersComponent = AdminUsersComponent;
