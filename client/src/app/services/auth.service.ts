import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    constructor(private http : Http){}

    login(username, password){
        return this.http.post('/api/user/login', {
            username,
            password
        });
    }

    logout(){
        return this.http.get('/api/user/logout');
    }

    signup(user){
        return this.http.post('/api/user/signup', user);
    }
}