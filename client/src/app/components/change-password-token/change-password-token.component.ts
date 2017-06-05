import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';

@Component({
  selector: 'app-change-password-token',
  templateUrl: './change-password-token.component.html',
  styleUrls: ['./change-password-token.component.css'],
  providers : [AuthService]
})
export class ChangePasswordTokenComponent implements OnInit {

  password : string;
  repassword : string;
  token : string;

  constructor(
    private authService : AuthService,
    private route : ActivatedRoute,
    private router : Router,
    private snackbar : MdSnackBar,
    private loading : LoadingAnimateService
  ) { }

  ngOnInit() {
    let { token } = this.route.snapshot.params;

    this.token = token;

    this.loading.setValue(true);

    this.authService.isValidToken(token)
      .subscribe(
        ()=>{
          this.loading.setValue(false);
        },
        err => {
          this.loading.setValue(false);

          this.snackbar.open('El token no es válido o ha expirado', 'CERRAR', { duration : 1500 })
            .afterDismissed()
            .subscribe( ()=>{
              this.router.navigateByUrl('/');
            });
        }
      );
  }


  updatePassword(){
    if(!this.password || this.password !== this.repassword){
      return this.snackbar.open('Las contraseñas deben coincidir', 'CERRAR', { duration : 1500 });
    }

    if(this.password.length < 5){
      return this.snackbar.open('Las contraseña debe tener al menos 5 caracteres', 'CERRAR', { duration : 1500 });
    }
    
    this.loading.setValue(true);

    this.authService.updatePassword(this.token, this.password, this.repassword)
      .subscribe(
        ()=>{
          this.loading.setValue(false);
          this.snackbar.open('Contraseña actualizada con éxito', 'CERRAR', { duration : 1500 })
            .afterDismissed()
            .subscribe( ()=>{
              this.router.navigateByUrl('/');
            });
        },
        err => {
          this.loading.setValue(false);
          this.snackbar.open('Hubo un error actualizando la contraseña', 'CERRAR', { duration : 1500 })
        }
      );
  }

}
