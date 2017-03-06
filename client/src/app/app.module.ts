import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';

import { appRoutes } from './app.routes';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { DragulaModule } from 'ng2-dragula';

import 'hammerjs';
import { LoginComponent } from './dialogs/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents : [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
