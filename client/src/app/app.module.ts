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
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';
import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";
import { 
  LoginComponent,
  SignupComponent,
  ForgotComponent
} from './dialogs';
import 'hammerjs';
import { ValidateTokenComponent } from './components/validate-token/validate-token.component';
import { ChangePasswordTokenComponent } from './components/change-password-token/change-password-token.component';

export function highchartsFactory() {
  highchartsExporting(highcharts);
  return highcharts;
}

@NgModule({
  declarations: [
    MnFullpageDirective,
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    ValidateTokenComponent,
    ChangePasswordTokenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReCaptchaModule,
    LoadingAnimateModule.forRoot(),
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents : [LoginComponent, SignupComponent, ForgotComponent],
  providers: [
    MnFullpageService,
    LoadingAnimateService,
    AuthService,
    CanActivateAdmin,
    { provide : 'Window', useValue : window },
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
