import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { DragulaModule } from 'ng2-dragula';

import { MapComponent } from '../components/map/map.component';

import { MaterialModule } from '@angular/material';

import { ProfileComponent } from '../components/profile/profile.component';

import { ChartModule } from 'angular2-highcharts';

const mapRoutes : Route[] =  [{
    path : '',
    component : MapComponent
}]

@NgModule({
    declarations : [ MapComponent, ProfileComponent ],
    providers : [
    ],
    imports : [
        CommonModule,
        DragulaModule,
        ChartModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(mapRoutes)
    ]
})
export class MapModule {

}