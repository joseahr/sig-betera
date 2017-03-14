import { Component } from '@angular/core';
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

  constructor(private dialog : MdDialog, private authService : AuthService){
    if(localStorage.getItem('authUser')){
      this.authUser = JSON.parse(localStorage.getItem('authUser'));
    }
    console.log(this.authUser);
  }

  openLoginDialog(){
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        this.authUser = result;
        localStorage.setItem('authUser', JSON.stringify(result));
      }
    )
  }

  logout(){
    if(!this.authService) return;
    this.authService.logout().subscribe(
      ()=>{
        this.authUser = null;
        localStorage.removeItem('authUser');
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
