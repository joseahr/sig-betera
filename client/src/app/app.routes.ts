import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { CanActivateAdmin } from './guards';
//import { MapComponent } from './components/map/map.component';

export const appRoutes : Route[] = [
    { path : '', component : HomeComponent },
    { path : 'map', loadChildren : './modules/map.module#MapModule' },
    { path : 'admin', loadChildren : './modules/admin.module#AdminModule', canActivate : [CanActivateAdmin] },
    { path : '**', redirectTo : '' }
]