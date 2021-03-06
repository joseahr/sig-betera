import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { DataTablesModule } from 'angular-datatables';
import { MapComponent, ProfileComponent } from './components';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { NgObjectPipesModule, NgMathPipesModule } from 'angular-pipes';
import { TruncateModule } from 'ng2-truncate';
import { LoadingAnimateModule } from 'ng2-loading-animate';
import { AddWmsComponent, LayerSwitcherComponent, SearchComponent, SearchComponentDialog, MeasureSnackBar, FeatureEditDialog, FeatureDeleteDialog } from './components';
import { MeasureComponent } from './components/measure/measure.component';
import { MousePositionComponent } from './components/mouse-position/mouse-position.component';
import { EditLayerComponent } from './components/edit-layer/edit-layer.component';

const mapRoutes : Route[] =  [{
    path : '',
    component : MapComponent
}, {
    path : ':id',
    component : MapComponent   
}, {
    path : ':id/:name',
    component : MapComponent   
}]

@NgModule({
    declarations : [ 
        MapComponent, 
        ProfileComponent, 
        LayerSwitcherComponent,
        AddWmsComponent,
        SearchComponent,
        SearchComponentDialog,
        MeasureComponent, 
        MeasureSnackBar, MousePositionComponent, EditLayerComponent,
        FeatureEditDialog, 
        FeatureDeleteDialog
    ],
    providers : [
    ],
    imports : [
        CommonModule,
        DragulaModule,
        ChartModule,
        FormsModule,
        DataTablesModule,
        NgObjectPipesModule,
        NgMathPipesModule,
        TruncateModule,
        LoadingAnimateModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(mapRoutes)
    ],
    entryComponents: [
        AddWmsComponent, SearchComponentDialog, MeasureSnackBar, FeatureEditDialog, FeatureDeleteDialog
    ]
})
export class MapModule {

}