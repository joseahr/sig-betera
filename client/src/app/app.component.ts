import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { MdDialog } from '@angular/material';
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
    private dialog : MdDialog, 
    private authService : AuthService,
    private ngZone : NgZone,
    private router : Router
  ){
      this.authService.getUser().subscribe(
        (user)=> { 
          this.ngZone.run( ()=> {
            console.log('useerrrr', user);
            if(!user.error){
              this.authUser = user; 
              localStorage.setItem('authUser', JSON.stringify(user));
            } else {
              this.authUser = null;
              localStorage.removeItem('authUser');  
            }
          });
        }
      );
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
