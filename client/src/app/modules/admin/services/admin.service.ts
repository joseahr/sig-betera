import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdminService {

    constructor(private http : Http){}
    
    getUsers(){
        return this.http.get('/api/admin/users');
    }

    getUserDetail(id : number){
        return this.http.get(`/api/admin/users/${id}`);
    }

}