import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { 
    AdminComponent,
    AdminHomeComponent,
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
        { path : 'home'      , component : AdminHomeComponent        },
        { path : 'users'     , component : AdminUsersComponent       },
        { path : 'users/:id' , component : AdminUserDetailsComponent },
        { path : 'maps'      , component : AdminMapsComponent        },
        { path : 'layers'    , component : AdminLayersComponent      },
        { path : 'mail'      , component : AdminMailComponent        },
        { path : '**'        , redirectTo : 'home'                   }
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
        FilterListPipe,
        AdminHomeComponent
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