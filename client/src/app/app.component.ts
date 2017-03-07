import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MdDialog } from '@angular/material';
import { LoginComponent } from './dialogs/login/login.component';

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
    
  }

  openLoginDialog(){
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        this.authUser = result;
      }
    )
  }

  logout(){
    if(!this.authService) return;
    this.authService.logout().subscribe(
      ()=>{
        this.authUser = null;
      }
    );
  }
}
