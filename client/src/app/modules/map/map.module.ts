import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { MapComponent, ProfileComponent } from './components';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { LayerSwitcherComponent } from './components/layer-switcher/layer-switcher.component';
import { ReverseLayersPipe } from './pipes';
import { AddWmsComponent } from './components/add-wms/add-wms.component';

const mapRoutes : Route[] =  [{
    path : '',
    component : MapComponent
}]

@NgModule({
    declarations : [ 
        MapComponent, 
        ProfileComponent, 
        LayerSwitcherComponent,
        AddWmsComponent
    ],
    providers : [
    ],
    imports : [
        CommonModule,
        DragulaModule,
        ChartModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(mapRoutes)
    ],
    entryComponents: [
        AddWmsComponent
    ]
})
export class MapModule {

}