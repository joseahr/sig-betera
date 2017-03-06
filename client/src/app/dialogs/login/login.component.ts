import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  userNotLoggedParams : { nameOrEmail? : string, password? : string} = {}

  constructor(public dialogRef: MdDialogRef<LoginComponent>, private authService : AuthService) {}

  login(){
    let { nameOrEmail, password } = this.userNotLoggedParams;
    this.authService.login(nameOrEmail, password).subscribe(
      (result)=> console.log(result),
      (err) => console.log(err)
    );
    console.log(this.userNotLoggedParams);
  }
}
