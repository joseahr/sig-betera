import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsExporting from 'highcharts/modules/exporting';
import { CanActivateAdmin } from './guards';
import { AuthService } from './services';
import 'hammerjs';
import { 
  LoginComponent,
  SignupComponent,
  ForgotComponent
} from './dialogs';

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
