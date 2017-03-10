import { Component, OnInit, ViewChild } from '@angular/core';

import { MdDialogRef, MdSnackBar } from '@angular/material';

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
      name ? : String, 
      password ? : String, 
      repassword ? : String, 
      nombre ? : String, 
      apellidos ? : String, 
      email ? : String,
      "g-recaptcha-response" ? : String
    } = {};

  constructor(
    private dialogRef: MdDialogRef<SignupComponent>,
    private authService : AuthService,
    private snackBar : MdSnackBar
  ) { }

  @ViewChild(ReCaptchaComponent) captcha : ReCaptchaComponent;

  ngOnInit() {
    this.captcha.reset();
  }

  signup(){
    let recaptcha = this.captcha.getResponse();
    console.log('token', recaptcha);
    if(!recaptcha){
      this.snackBar.open('Debes verificar el captcha', null, { duration : 1500 });
      return;
    }
    let user = this.userToCreate;
    user['g-recaptcha-response'] = recaptcha;
    this.authService.signup(user).subscribe(
      ()=> {        
        console.log('Usuario registrado con éxito');
        this.snackBar.open('Registrado con éxito', null, { duration : 1500 });
        this.dialogRef.close();
      },
      (err) => { this.snackBar.open(err, null, { duration : 1500 }); }, 
      () => { this.captcha.reset() }
    );
  }

}
