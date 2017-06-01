import * as btoa from 'btoa';
import * as request from 'request-promise';
import { exec as exec_ } from 'child_process';

const exec = require('bluebird').promisify(exec_);

let authHeader = { Authorization : 'Basic ' + btoa('admin:geoserver') };

const WORKSPACE = 'betera';
const DATA_STORE = 'betera-datastore';

let getOptsPublishLayer = (name : string) => ({
    method : 'POST', uri : `http://localhost:8080/geoserver/rest/workspaces/${WORKSPACE}/datastores/${DATA_STORE}/featuretypes`,
    headers : { ...authHeader, "Content-Type" :  'application/json' },
    body : JSON.stringify({ featureType : { name } })
});

let getOptsUnpublishLayer = (name : string) => ({
    method : 'DELETE', 
    uri : `http://localhost:8080/geoserver/rest/layers/${name}`,
    headers : authHeader
});

let getOptsDeleteFeatureType = (name : string) => ({
    method : 'DELETE', 
    uri : `http://localhost:8080/geoserver/rest/workspaces/${WORKSPACE}/datastores/${DATA_STORE}/featuretypes/${name}`,
    headers : authHeader
});

let optsGetPublishedLayers = {
    method : 'GET', uri : `http://localhost:8080/geoserver/rest/layers.json`,
    headers : authHeader
};

let getOptsCreateUser = (userName : string, password : string, enabled : boolean = false) => ({
    method : 'POST', uri : `http://localhost:8080/geofence/rest/users`,
    headers : { ...authHeader, "Content-Type" :  'application/xml' },
    body : `<user enabled="${enabled}" admin="false"><name>${userName}</name><password>${password}</password></user>`
});

export module GeoserverAdmin {

    export class Layers {
        publishLayerInGeoserver(name : string){
            let opts = getOptsPublishLayer(name);
            return request(opts);
        }
    
        unpublishLayerInGeoserver(name : string){
            let optsLayer = getOptsUnpublishLayer(name);
            let optsFeatureType = getOptsDeleteFeatureType(name);
            return request(optsLayer).then(()=> request(optsFeatureType));
        }
        
        getPublishedLayers(){
            return request(optsGetPublishedLayers);
        }
    }
    
    export class Users {
        createUserInGS(userName : string, password : string, enabled : boolean = false){
            let opts = getOptsCreateUser(userName, password, enabled);
            return request(opts);
        }
    }
}