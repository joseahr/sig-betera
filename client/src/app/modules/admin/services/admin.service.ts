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

    getAllGroups(){
        return this.http.get('/api/admin/groups');
    }

    postLayer(formData, layerName?){
        let apiEndPoint = '/api/admin/layers';
        if(layerName) apiEndPoint += `?layerName=${layerName}`;
        return this.http.post(apiEndPoint, formData);
    }

    postBaseLayer(service_url : string, layers : string[]){
        return this.http.post('/api/admin/baselayers', { service_url, layers });
    }

}