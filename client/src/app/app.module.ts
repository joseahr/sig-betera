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

import { ReCaptchaModule } from 'angular2-recaptcha';

import 'hammerjs';
import { LoginComponent } from './dialogs/login/login.component';
import { SignupComponent } from './dialogs/signup/signup.component';
import { ForgotComponent } from './dialogs/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReCaptchaModule,
    DragulaModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents : [LoginComponent, SignupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
