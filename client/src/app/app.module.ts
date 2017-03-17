import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//import { MapComponent } from './components/map/map.component';

import { MapModule } from './modules/map.module';

import { appRoutes } from './app.routes';

import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

//import { DragulaModule } from 'ng2-dragula';

import { ReCaptchaModule } from 'angular2-recaptcha';

import 'hammerjs';
import { LoginComponent } from './dialogs/login/login.component';
import { SignupComponent } from './dialogs/signup/signup.component';
import { ForgotComponent } from './dialogs/forgot/forgot.component';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsExporting from 'highcharts/modules/exporting';

import { CanActivateAdmin } from './guards';

import { AuthService } from './services/auth.service';

export function highchartsFactory() {
  highchartsExporting(highcharts);
  return highcharts;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReCaptchaModule,
    //DragulaModule,
    //MapModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents : [LoginComponent, SignupComponent],
  providers: [
    AuthService,
    CanActivateAdmin,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
