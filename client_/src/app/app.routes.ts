import { Route } from '@angular/router';
import { HomeComponent, ValidateTokenComponent, ChangePasswordTokenComponent } from './components';
import { CanActivateAdmin } from './guards';

export const appRoutes : Route[] = [
    { path : '', component : HomeComponent },
    { path : 'map', loadChildren : './modules/map/map.module#MapModule' },
    { path : 'admin', loadChildren : './modules/admin/admin.module#AdminModule', canActivate : [CanActivateAdmin] },
    { path : 'validate/token/:token', component : ValidateTokenComponent },
    { path : 'password/token/:token', component : ChangePasswordTokenComponent },
    { path : '**', redirectTo : '' }
]