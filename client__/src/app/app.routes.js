"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
var guards_1 = require("./guards");
exports.appRoutes = [
    { path: '', component: components_1.HomeComponent },
    { path: 'map', loadChildren: './modules/map/map.module#MapModule' },
    { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [guards_1.CanActivateAdmin] },
    { path: 'validate/token/:token', component: components_1.ValidateTokenComponent },
    { path: 'password/token/:token', component: components_1.ChangePasswordTokenComponent },
    { path: '**', redirectTo: '' }
];
