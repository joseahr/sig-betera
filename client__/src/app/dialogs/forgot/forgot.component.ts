import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  providers : [AuthService]
})
export class ForgotComponent implements OnInit {

  email : string;

  constructor(
    private authService : AuthService,
    private dialogRef : MdDialogRef<ForgotComponent>,
    private loading : LoadingAnimateService,
    private snackbar : MdSnackBar,
    private router : Router
    ) { }

  ngOnInit() {
  }

  sendToken(){
    this.loading.setValue(true);

    this.authService.sendPasswordToken(this.email)
      .subscribe(
        () => {
          //console.log('GUAY');
          this.loading.setValue(false);
          this.dialogRef.close();
          this.snackbar.open('Token enviado con éxito. Revisa tu correo.', 'CERRAR', { duration : 2500 })
            .afterDismissed()
            .subscribe( () => {
              this.router.navigateByUrl('/');
            });
        },
        err => {
          //console.log(err);
          this.loading.setValue(false);
          this.snackbar.open('Hubo algún fallo enviando el token.', 'CERRAR', { duration : 2500 })
        }
      );
  }

}
