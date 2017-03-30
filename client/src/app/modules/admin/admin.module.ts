import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { DataTablesModule } from 'angular-datatables';
import { NgMathPipesModule } from 'angular-pipes';

import { 
    AdminComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminUserDetailsComponent,
    AdminGroupsComponent,
    AdminMapsComponent,
    AdminMapsEditComponent,
    AdminMapsNewMapComponent,
    AdminMapsNewDefaultMapComponent,
    AdminLayersComponent,
    AdminLayersNewLayerComponent,
    AdminLayersNewBaselayerComponent,
    AdminMailComponent,
} from './components';

const adminRoutes : Route[] =  [{
    path : '',
    component : AdminComponent,
    children : [
        { path : 'home'      , component : AdminHomeComponent        },
        { path : 'users'     , component : AdminUsersComponent       },
        { path : 'users/:id' , component : AdminUserDetailsComponent },
        { path : 'maps/new/map'     , component : AdminMapsNewMapComponent        },
        { path : 'maps/edit/:id'    , component : AdminMapsEditComponent          },
        { path : 'maps/new/default' , component : AdminMapsNewDefaultMapComponent },
        { path : 'maps'      , component : AdminMapsComponent        },
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
        AdminHomeComponent,
        AdminLayersNewLayerComponent,
        AdminLayersNewBaselayerComponent,
        AdminMapsNewMapComponent,
        AdminMapsNewDefaultMapComponent,
        AdminMapsEditComponent
    ],
    providers : [
    ],
    imports : [
        CommonModule,
        DataTablesModule,
        NgMathPipesModule,
        FormsModule,
        DragulaModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminModule {

}