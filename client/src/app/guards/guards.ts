import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

//localStorage.setItem('authUser', JSON.stringify({ rol : 'admin'}));

@Injectable()
export class CanActivateAdmin implements CanActivate {
    canActivate(){
        let user = JSON.parse( localStorage.getItem('authUser') );
        console.log(user);
        let isAdmin = ( user && user.rol == 'admin' );
        return isAdmin;
    }
}