import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CanActivateAdmin } from './guards';

export const appRoutes : Route[] = [
    { path : '', component : HomeComponent },
    { path : 'map', loadChildren : './modules/map/map.module#MapModule' },
    { path : 'admin', loadChildren : './modules/admin/admin.module#AdminModule', canActivate : [CanActivateAdmin] },
    { path : '**', redirectTo : '' }
]