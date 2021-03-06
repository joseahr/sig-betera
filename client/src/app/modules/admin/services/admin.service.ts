import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdminService {

    constructor(private http : Http){}

    getAllLayers(){
        return this.http.get('/api/admin/layers');
    }

    getAllBaseLayers(){
        return this.http.get('/api/admin/baselayers');
    }
    
    getUsers(){
        return this.http.get('/api/admin/users');
    }

    getUserDetail(id : number){
        return this.http.get(`/api/admin/users/${id}`);
    }

    getAllGroups(){
        return this.http.get('/api/admin/groups');
    }

    getAllMaps(){
        return this.http.get('/api/admin/maps');
    }

    getMapById(id : number){
        return this.http.get(`/api/admin/map/${id}`);
    }

    getAllDefaultMaps(){
        return this.http.get('/api/admin/default-maps')
    }

    postLayer(formData, layerName? : string){
        let apiEndPoint = '/api/admin/layers';
        if(layerName) apiEndPoint += `?layerName=${layerName}`;
        return this.http.post(apiEndPoint, formData);
    }

    updateLayerName(old_name : string, new_name : string){
        return this.http.put('/api/admin/layers', { old_name, new_name });
    }

    deleteLayer(tableName : string){
        return this.http.delete('/api/admin/layers', {
            body : { tableName }
        });
    }

    postBaseLayer(baselayer_name : string, service_url : string, layers : string[]){
        return this.http.post('/api/admin/baselayers', { baselayer_name, service_url, layers });
    }

    deleteBaseLayer(id : number){
        return this.http.delete('/api/admin/baselayers', {
            body : { id }
        });
    }

    createMap(name : string){
        return this.http.post('/api/admin/maps', { name })
    }

    deleteMap(id_map : number){
        return this.http.delete('/api/admin/maps', {
            body : { id_map }
        });
    }
    
    createDefaultMap(id_map : number){
        return this.http.post('/api/admin/maps/defaults', { id_map })
    }

    deleteDefaultMap(id_map : number){
        return this.http.delete('/api/admin/maps/defaults', {
            body : { id_map }
        });  
    }

    setMapOrder(id_map, order : {id_map, id_layer, layer_type, position}[]){
        return this.http.post('/api/admin/maps/order', { order, id_map });
    }

    addLayerToMap(id_map : number, id_layer : number){
        return this.http.post('/api/admin/maps/layers', { id_map, id_layer });
    }

    deleteMapLayer(id_map : number, id_layer : number){
        return this.http.delete('/api/admin/maps/layers', { body : { id_map, id_layer } });
    }

    addBaseLayerToMap(id_map : number, id_layer : number){
        return this.http.post('/api/admin/maps/baselayers', { id_map, id_layer });
    }

    deleteMapBaseLayer(id_map : number, id_layer : number){
        return this.http.delete('/api/admin/maps/baselayers', { body : { id_map, id_layer } });
    }

    addUserGroup(id_user, group){
        return this.http.post('/api/admin/user/group', { id_user, group });
    }

    deleteUserGroup(id_user, group){
        return this.http.delete('/api/admin/user/group', { body : { id_user, group } });
    }

    addUserMap(id_user, id_map){
        return this.http.post('/api/admin/user/map', { id_user, id_map });
    }

    deleteUserMap(id_user, id_map){
        return this.http.delete('/api/admin/user/map', { body : { id_user, id_map } });
    }
    
    insertUserRol(id_user, id_layer, rol){
        return this.http.post('/api/admin/user/rol', { id_user, id_layer, rol });
    }

    updateUserRol(id_user, id_layer, rol){
        return this.http.put('/api/admin/user/rol', { id_user, id_layer, rol });
    }

    deleteUserRol(id_user, id_layer){
        return this.http.delete('/api/admin/user/rol', { body : { id_user, id_layer } });
    }

    createGroup(name : string){
        return this.http.post('/api/admin/groups', { name });
    }

    updateGroup(id : number, new_name : string){
        return this.http.put('/api/admin/groups', { id, new_name });
    }

    deleteGroup(id : number){
        return this.http.delete('/api/admin/groups', { body : { id } });
    }

    sendMail(titulo : string, cuerpo : string, destinatarios : string[]){
        return this.http.post('/api/admin/mail/send', { titulo, cuerpo, destinatarios });
    }

    publishLayer(name : string){
        return this.http.get(`/api/admin/layers/geoserver/${name}`);
    }

    unpublishLayer(name : string){
        return this.http.delete(`/api/admin/layers/geoserver/${name}`);
    }

}