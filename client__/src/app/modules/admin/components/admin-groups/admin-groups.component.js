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
var angular_datatables_1 = require("angular-datatables");
var material_1 = require("@angular/material");
var __1 = require("..");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var router_transitions_1 = require("../../../../router.transitions");
var services_1 = require("../../../../services");
var services_2 = require("../../services");
var AdminGroupsComponent = (function () {
    function AdminGroupsComponent(confirm, loading, dialogRef, adminService) {
        this.confirm = confirm;
        this.loading = loading;
        this.dialogRef = dialogRef;
        this.adminService = adminService;
        this.dtOptions = {
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
                url: 'api/admin/groups',
                dataSrc: ''
            },
            columns: [
                {
                    title: 'Editar',
                    defaultContent: "\n          <button md-button class=\"mat-button edit-group\">\n            <md-icon style=\"color : #ffbb00\" class=\"material-icons mat-icon\">mode_edit</md-icon>\n          </button>"
                },
                {
                    title: 'Eliminar',
                    defaultContent: "\n          <button md-button class=\"mat-button remove-group\">\n            <md-icon style=\"color : #ff0000\" class=\"material-icons mat-icon\">remove_circle_outline</md-icon>\n          </button>"
                },
                { title: 'ID', data: 'id' },
                { title: 'Nombre', data: 'name' },
            ]
        };
    }
    AdminGroupsComponent.prototype.ngOnInit = function () { };
    AdminGroupsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            _this.dtInstance = dtInstance;
            dtInstance.on('click', '.remove-group', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.confirm.open("\u00BFEst\u00E1s seguro de eliminar el grupo " + row.name + "?").afterClosed().subscribe(function (removeBool) {
                    if (!removeBool)
                        return;
                    self.loading.setValue(true);
                    self.adminService.deleteGroup(row.id).subscribe(function () {
                        self.loading.setValue(false);
                        dtInstance.ajax.reload();
                    });
                });
            });
            dtInstance.on('click', '.edit-group', function () {
                var row_dom = $(this).closest('tr');
                var row = dtInstance.row(row_dom).data();
                self.openEditGroupNameDialog(row);
            });
        });
    };
    AdminGroupsComponent.prototype.createGroup = function () {
        var _this = this;
        this.loading.setValue(true);
        this.adminService.createGroup(this.newGroupName).subscribe(function () {
            _this.loading.setValue(false);
            _this.dtInstance.ajax.reload();
            _this.newGroupName = null;
        });
    };
    AdminGroupsComponent.prototype.openEditGroupNameDialog = function (groupData) {
        var _this = this;
        var dialog = this.dialogRef.open(__1.AdminGroupEditComponent);
        dialog.componentInstance.groupData = groupData;
        dialog.afterClosed().subscribe(function (data) {
            if (data)
                _this.dtInstance.ajax.reload();
        });
    };
    return AdminGroupsComponent;
}());
__decorate([
    core_1.ViewChild(angular_datatables_1.DataTableDirective),
    __metadata("design:type", angular_datatables_1.DataTableDirective)
], AdminGroupsComponent.prototype, "datatableElement", void 0);
AdminGroupsComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-groups',
        templateUrl: './admin-groups.component.html',
        styleUrls: ['./admin-groups.component.css'],
        providers: [services_2.AdminService],
        animations: [router_transitions_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [services_1.ConfirmDialogService,
        ng2_loading_animate_1.LoadingAnimateService,
        material_1.MdDialog,
        services_2.AdminService])
], AdminGroupsComponent);
exports.AdminGroupsComponent = AdminGroupsComponent;
