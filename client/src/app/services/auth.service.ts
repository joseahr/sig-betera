import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http : Http){}

    getUser(){
        return this.http.post('/api/user/isAuth', {})
        .map( res => res.json() );
    }

    isAuthenticated() : Observable<Boolean>{
        return this.http.post('/api/user/isAuth', {})
        .map((user)=>{
            return (!user.json().error);
        });
    }

    isAuthenticatedAsAdmin() : Observable<Boolean>{
        return this.http.post('/api/user/isAuth', {})
        .map((user_)=>{
            let user = user_.json();
            return (!user.error && user.rol == 'admin');
        });
    }

    login(username, password){
        return this.http.post('/api/user/login', { username, password }).map( res => res.json() );
    }

    logout(){
        return this.http.get('/api/user/logout');
    }

    signup(user){
        return this.http.post('/api/user/signup', user);
    }

    validateUserByToken(token){
        return this.http.get(`/api/user/validate/${token}`).map( res => res.json() );
    }

    sendPasswordToken(email){
        return this.http.post(`/api/user/password`, { email }).map( res => res.json() );
    }

    isValidToken(token){
        return this.http.get(`/api/user/password/${token}`).map( res => res.json() );
    }

    updatePassword(token, password, repassword){
        return this.http.put(`/api/user/password`, { token, password, repassword }).map( res => res.json() );
    }

}