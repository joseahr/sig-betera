import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { AdminComponent } from '../components/admin/admin.component';

import { MaterialModule } from '@angular/material';

import { AdminUsersComponent } from '../components/admin-users/admin-users.component';
import { AdminMapsComponent } from '../components/admin-maps/admin-maps.component';
import { AdminLayersComponent } from '../components/admin-layers/admin-layers.component';
import { AdminMailComponent } from '../components/admin-mail/admin-mail.component';

import { DataTablesModule } from 'angular-datatables';

const adminRoutes : Route[] =  [{
    path : '',
    component : AdminComponent,
    children : [
        { path : 'users' , component : AdminUsersComponent },
        { path : 'maps'  , component : AdminMapsComponent },
        { path : 'layers', component : AdminLayersComponent },
        { path : 'mail'  , component : AdminMailComponent }
    ]
}]

@NgModule({
    declarations : [
        AdminComponent, 
        AdminUsersComponent,
        AdminMapsComponent,
        AdminLayersComponent,
        AdminMailComponent
    ],
    providers : [
    ],
    imports : [
        CommonModule,
        DataTablesModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminModule {

}