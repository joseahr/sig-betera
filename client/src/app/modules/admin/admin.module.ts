import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { 
    AdminComponent,
    AdminUsersComponent,
    AdminMapsComponent,
    AdminLayersComponent,
    AdminMailComponent,
    AdminUserDetailsComponent
} from './components';
import { FilterListPipe } from './pipes';
const adminRoutes : Route[] =  [{
    path : '',
    component : AdminComponent,
    children : [
        { path : 'users' , component : AdminUsersComponent },
        { path : 'users/:id' , component : AdminUserDetailsComponent },
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
        AdminMailComponent,
        AdminUserDetailsComponent,
        FilterListPipe
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