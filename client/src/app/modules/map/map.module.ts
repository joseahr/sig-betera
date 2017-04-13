import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { DataTablesModule } from 'angular-datatables';
import { MapComponent, ProfileComponent } from './components';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { NgObjectPipesModule } from 'angular-pipes';
import { ReverseLayersPipe } from './pipes';
import { AddWmsComponent, LayerSwitcherComponent, SearchComponent, SearchComponentDialog } from './components';

const mapRoutes : Route[] =  [{
    path : '',
    component : MapComponent
}]

@NgModule({
    declarations : [ 
        MapComponent, 
        ProfileComponent, 
        LayerSwitcherComponent,
        AddWmsComponent,
        SearchComponent,
        SearchComponentDialog
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
        MaterialModule.forRoot(),
        RouterModule.forChild(mapRoutes)
    ],
    entryComponents: [
        AddWmsComponent, SearchComponentDialog
    ]
})
export class MapModule {

}