import { Component, OnInit, ViewChild } from '@angular/core';

import { MdDialogRef } from '@angular/material';

import { AuthService } from '../../services/auth.service';

import { ReCaptchaComponent } from 'angular2-recaptcha/lib/captcha.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  userToCreate : 
    { 
      name ? : string, 
      password ? : string, 
      repassword ? : string, 
      nombre ? : string, 
      apellidos ? : string, 
      email ? : string 
    } = {};

  constructor(
    private dialogRef: MdDialogRef<SignupComponent>,
    private authService : AuthService
  ) { }

  @ViewChild(ReCaptchaComponent) captcha : ReCaptchaComponent;

  ngOnInit() {
    this.captcha.reset();
  }

  signup(){
    let token = this.captcha.getResponse();
    console.log('token', token);
    if(!token) return;
    this.authService.signup(this.userToCreate).subscribe(
      ()=> {        
        console.log('Usuario registrado con éxito')
        this.dialogRef.close();
      },
      (err) => console.log(err)
    );
  }

}
