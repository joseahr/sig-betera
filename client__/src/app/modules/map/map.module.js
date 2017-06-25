"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng2_dragula_1 = require("ng2-dragula");
var angular_datatables_1 = require("angular-datatables");
var components_1 = require("./components");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var angular2_highcharts_1 = require("angular2-highcharts");
var angular_pipes_1 = require("angular-pipes");
var ng2_truncate_1 = require("ng2-truncate");
var ng2_loading_animate_1 = require("ng2-loading-animate");
var components_2 = require("./components");
var measure_component_1 = require("./components/measure/measure.component");
var mouse_position_component_1 = require("./components/mouse-position/mouse-position.component");
var edit_layer_component_1 = require("./components/edit-layer/edit-layer.component");
var metadata = Reflect.getOwnMetadata('annotations', ng2_loading_animate_1.LoadingAnimateModule);
metadata[0].imports = [common_1.CommonModule, animations_1.BrowserAnimationsModule];
var mapRoutes = [{
        path: '',
        component: components_1.MapComponent
    }, {
        path: ':id',
        component: components_1.MapComponent
    }, {
        path: ':id/:name',
        component: components_1.MapComponent
    }];
var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    core_1.NgModule({
        declarations: [
            components_1.MapComponent,
            components_1.ProfileComponent,
            components_2.LayerSwitcherComponent,
            components_2.AddWmsComponent,
            components_2.SearchComponent,
            components_2.SearchComponentDialog,
            measure_component_1.MeasureComponent,
            components_2.MeasureSnackBar, mouse_position_component_1.MousePositionComponent, edit_layer_component_1.EditLayerComponent,
            components_2.FeatureEditDialog,
            components_2.FeatureDeleteDialog
        ],
        providers: [],
        imports: [
            common_1.CommonModule,
            ng2_dragula_1.DragulaModule,
            angular2_highcharts_1.ChartModule,
            forms_1.FormsModule,
            angular_datatables_1.DataTablesModule,
            angular_pipes_1.NgObjectPipesModule,
            angular_pipes_1.NgMathPipesModule,
            ng2_truncate_1.TruncateModule,
            ng2_loading_animate_1.LoadingAnimateModule.forRoot(),
            material_1.MaterialModule,
            router_1.RouterModule.forChild(mapRoutes)
        ],
        entryComponents: [
            components_2.AddWmsComponent, components_2.SearchComponentDialog, components_2.MeasureSnackBar, components_2.FeatureEditDialog, components_2.FeatureDeleteDialog
        ]
    })
], MapModule);
exports.MapModule = MapModule;
