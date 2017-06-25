"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var ng2_dragula_1 = require("ng2-dragula");
var angular_datatables_1 = require("angular-datatables");
var angular_pipes_1 = require("angular-pipes");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var services_1 = require("../../services");
var components_1 = require("./components");
var adminRoutes = [{
        path: '',
        component: components_1.AdminComponent,
        children: [
            { path: 'home', component: components_1.AdminHomeComponent },
            { path: 'users', component: components_1.AdminUsersComponent },
            { path: 'users/:id', component: components_1.AdminUserDetailsComponent },
            { path: 'maps/new/map', component: components_1.AdminMapsNewMapComponent },
            { path: 'maps/edit/:id', component: components_1.AdminMapsEditComponent },
            { path: 'maps/new/default', component: components_1.AdminMapsNewDefaultMapComponent },
            { path: 'maps', component: components_1.AdminMapsComponent },
            { path: 'groups', component: components_1.AdminGroupsComponent },
            { path: 'layers', component: components_1.AdminLayersComponent },
            { path: 'layers/new/layer', component: components_1.AdminLayersNewLayerComponent },
            { path: 'layers/new/baselayer', component: components_1.AdminLayersNewBaselayerComponent },
            { path: 'mail', component: components_1.AdminMailComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }];
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        declarations: [
            components_1.AdminComponent,
            components_1.AdminUsersComponent,
            components_1.AdminGroupsComponent,
            components_1.AdminMapsComponent,
            components_1.AdminLayersComponent,
            components_1.AdminMailComponent,
            components_1.AdminUserDetailsComponent,
            components_1.AdminHomeComponent,
            components_1.AdminLayersNewLayerComponent,
            components_1.AdminLayersNewBaselayerComponent,
            components_1.AdminMapsNewMapComponent,
            components_1.AdminMapsNewDefaultMapComponent,
            components_1.AdminMapsEditComponent,
            components_1.AdminGroupEditComponent,
            components_1.AdminLayerEditComponent,
            services_1.ConfirmDialogComponent
        ],
        providers: [
            ng2_loading_animate_1.LoadingAnimateService,
            services_1.ConfirmDialogService
        ],
        imports: [
            common_1.CommonModule,
            angular_datatables_1.DataTablesModule,
            angular_pipes_1.NgMathPipesModule,
            forms_1.FormsModule,
            ng2_dragula_1.DragulaModule,
            ng2_ckeditor_1.CKEditorModule,
            ng2_loading_animate_1.LoadingAnimateModule.forRoot(),
            material_1.MaterialModule,
            router_1.RouterModule.forChild(adminRoutes)
        ],
        entryComponents: [components_1.AdminGroupEditComponent, components_1.AdminLayerEditComponent, services_1.ConfirmDialogComponent]
    })
], AdminModule);
exports.AdminModule = AdminModule;
