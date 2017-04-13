import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  userNotLoggedParams : { nameOrEmail? : string, password? : string} = {}
  
  isLoading : Boolean = false;

  constructor(
    private dialogRef: MdDialogRef<LoginComponent>, 
    private authService : AuthService, 
    private snackBar : MdSnackBar
  ) {}

  ngOnInit(){
  }

  login(){
    this.isLoading = true;
    this.snackBar.open('Iniciando Sesión ...');
    let { nameOrEmail, password } = this.userNotLoggedParams;

    this.authService.login(nameOrEmail, password).subscribe(
      (result)=> {
        this.dialogRef.close(result.json());
        this.snackBar.open(`¡Hola de nuevo, ${result.json().name}!`, null, { duration : 1000 });
      },
      (err) =>{
        //console.log(err);
        this.isLoading = false;
        this.snackBar.open(err.json(), null, { duration : 1000 });
      },
      ()=>{
        //console.log('end - login');
        this.isLoading = false;
      }
    );
    //console.log(this.userNotLoggedParams);
  }
}
