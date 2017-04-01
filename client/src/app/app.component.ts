import { Component, NgZone } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { MdDialog } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';

import { LoginComponent } from './dialogs/login/login.component';
import { SignupComponent } from './dialogs/signup/signup.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {

  authUser : any;

  constructor(
    private loading : LoadingAnimateService,
    private dialog : MdDialog, 
    private authService : AuthService,
    private ngZone : NgZone,
    private router : Router
  ){
    this.authService.getUser().subscribe(
      (user)=> { 
        this.ngZone.run( ()=> {
          if(!user.error){
            this.authUser = user; 
          } else {
            this.authUser = null;
          }
        });
      }
    );
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
          this.ngZone.runOutsideAngular(() => {
            this.loading.setValue(true);
          });
      }
      if (event instanceof NavigationEnd) {
          this._hideSpinner();
      }
      if (event instanceof NavigationCancel) {
          this._hideSpinner();
      }
      if (event instanceof NavigationError) {
          this._hideSpinner();
      }
  }

  private _hideSpinner(): void {
      this.ngZone.runOutsideAngular(() => {
        this.loading.setValue(false);
      });
  }

  openLoginDialog(){
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        this.authUser = result;
        this.router.navigate(['']);
      }
    )
  }

  logout(){
    if(!this.authService) return;
    this.authService.logout().subscribe(
      ()=>{
        this.authUser = null;
        this.router.navigate(['']);
      }
    );
  }

  openSignupDialog(){
    let dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        // Hacer algo
      }
    )
  }
}
