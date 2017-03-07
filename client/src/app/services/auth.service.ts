import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    constructor(private http : Http){}

    login(username, password){
        return this.http.post('/user/login', {
            username,
            password
        });
    }

    logout(){
        return this.http.get('/user/logout');
    }
}