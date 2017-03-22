import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { FilterListPipe } from './pipes';

import { 
    AdminComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminMapsComponent,
    AdminLayersComponent,
    AdminLayersNewLayerComponent,
    AdminLayersNewBaselayerComponent,
    AdminMailComponent,
    AdminUserDetailsComponent
} from './components';


const adminRoutes : Route[] =  [{
    path : '',
    component : AdminComponent,
    children : [
        { path : 'home'      , component : AdminHomeComponent        },
        { path : 'users'     , component : AdminUsersComponent       },
        { path : 'users/:id' , component : AdminUserDetailsComponent },
        { path : 'maps'      , component : AdminMapsComponent        },
        { path : 'layers'    , component : AdminLayersComponent      },
        { path : 'layers/new/layer'     , component : AdminLayersNewLayerComponent     },
        { path : 'layers/new/baselayer' , component : AdminLayersNewBaselayerComponent },
        { path : 'mail'      , component : AdminMailComponent        },
        { path : '**'        , redirectTo : 'home'                   }
    ]
}];

@NgModule({
    declarations : [
        AdminComponent, 
        AdminUsersComponent,
        AdminMapsComponent,
        AdminLayersComponent,
        AdminMailComponent,
        AdminUserDetailsComponent,
        FilterListPipe,
        AdminHomeComponent,
        AdminLayersNewLayerComponent,
        AdminLayersNewBaselayerComponent
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