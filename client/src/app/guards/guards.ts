import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
//localStorage.setItem('authUser', JSON.stringify({ rol : 'admin'}));

@Injectable()
export class CanActivateAdmin implements CanActivate {
    constructor(private authService : AuthService){}
    canActivate() : Observable<Boolean>{
        return this.authService.isAuthenticatedAsAdmin();
    }
}