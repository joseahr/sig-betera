import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { DataTablesModule } from 'angular-datatables';
import { NgMathPipesModule } from 'angular-pipes';
import { CKEditorModule } from 'ng2-ckeditor';
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';

import { 
    AdminComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminUserDetailsComponent,
    AdminGroupsComponent,
    AdminGroupEditComponent,
    AdminMapsComponent,
    AdminMapsEditComponent,
    AdminMapsNewMapComponent,
    AdminMapsNewDefaultMapComponent,
    AdminLayersComponent,
    AdminLayersNewLayerComponent,
    AdminLayersNewBaselayerComponent,
    AdminLayerEditComponent,
    AdminMailComponent
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
        { path : 'groups'    , component : AdminGroupsComponent      },
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
        AdminGroupsComponent,
        AdminMapsComponent,
        AdminLayersComponent,
        AdminMailComponent,
        AdminUserDetailsComponent,
        AdminHomeComponent,
        AdminLayersNewLayerComponent,
        AdminLayersNewBaselayerComponent,
        AdminMapsNewMapComponent,
        AdminMapsNewDefaultMapComponent,
        AdminMapsEditComponent,
        AdminGroupEditComponent,
        AdminLayerEditComponent
    ],
    providers : [
       LoadingAnimateService 
    ],
    imports : [
        CommonModule,
        DataTablesModule,
        NgMathPipesModule,
        FormsModule,
        DragulaModule,
        CKEditorModule,
        LoadingAnimateModule.forRoot(),
        MaterialModule.forRoot(),
        RouterModule.forChild(adminRoutes)
    ],
    entryComponents : [ AdminGroupEditComponent, AdminLayerEditComponent ]
})
export class AdminModule {

}