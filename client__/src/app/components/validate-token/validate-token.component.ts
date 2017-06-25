import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services';
import { MdSnackBar } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';

@Component({
  selector: 'app-validate-token',
  templateUrl: './validate-token.component.html',
  styleUrls: ['./validate-token.component.css'],
  providers : [AuthService, LoadingAnimateService]
})
export class ValidateTokenComponent implements OnInit {

  constructor(
    private authService : AuthService, 
    private route : ActivatedRoute,
    private router : Router,
    private snackbar : MdSnackBar,
    private loading : LoadingAnimateService
  ) { }

  ngOnInit() {
    let { token } = this.route.snapshot.params;

    this.loading.setValue(true);

    this.authService.validateUserByToken(token)
      .subscribe(
        ()=>{
          console.log('OK');
          this.snackbar.open('Usuario validado con éxito', 'CERRAR', { duration : 1500 })
            .afterDismissed()
            .subscribe( ()=> {
              this.loading.setValue(false);
              this.router.navigateByUrl('/')
            });
        },
        err => {
          console.log(err);
          this.snackbar.open('Fallo al validar usuario', 'CERRAR', { duration : 1500 })
            .afterDismissed()
            .subscribe( ()=> {
              this.loading.setValue(false);
              this.router.navigateByUrl('/')
            });
        }
      )
  }



}
