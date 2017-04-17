import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { MdSnackBar } from '@angular/material';
//localStorage.setItem('authUser', JSON.stringify({ rol : 'admin'}));

@Injectable()
export class CanActivateAdmin implements CanActivate {
    constructor(
        private authService : AuthService,
        private snackbar : MdSnackBar
    ){}
    canActivate() : Observable<Boolean>{
        return this
            .authService
            .isAuthenticatedAsAdmin()
            .do( result => {
                if(!result){
                    this.snackbar.open('Debes ser administrador para acceder.', 'CERRAR', { duration : 2500 } );
                }
            });
    }
}