import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Feature, format } from 'openlayers';

interface IFeatureResponse {
    geometry : {
        coordinates : any[],
        type : string
    },
    properties : {}
}

interface ISearchDataResponse {
    found : {
        features : IFeatureResponse[],
    },
    layername : string
}

@Injectable()
export class UserLayersService {

    wktParser : format.WKT = new format.WKT();

    constructor(private http : Http){}

    getFeatures(featureIntersect : Feature, layers) : Observable<ISearchDataResponse[]>{
        let wkt = this.wktParser.writeFeature(featureIntersect, {
            dataProjection : 'EPSG:25830',
            featureProjection : 'EPSG:25830'
        });
        console.log(featureIntersect, 'WKT', wkt, 'featureToSend');
        return this.http.post('/api/layers/features', {
            wkt, layers
        }).map( res => res.json() );
    }

    getFeatureData(layerName : string, gid : number){
        return this.http.get(`/api/layers/${layerName}/data/${gid}`)
            .map( res => res.json() )
    }

    uploadData(layerName, gid, file){
        let formData = new FormData();
        formData.append('file', file);

        return this.http.post(`/api/layers/${layerName}/data/${gid}/upload`, formData);
    }

    addFeatureData(layerName : string, gid : number, url : string){
        return this.http.post(`/api/layers/${layerName}/data/${gid}`, { url })
            .map( res => res.json() )
    }


    deleteFeatureData(layerName : string, gid : number, id : number){
        return this.http.delete(`/api/layers/${layerName}/data/${gid}`, { body : { id } })
            .map( res => res.json() )
    }

    addFeature(layerName : string, geometry, properties){
        return this.http.post(`/api/layers/${layerName}/transaction`, {
            geometry, properties
        }).map( res => res.json() )
    }

    editFeature(layerName : string, geometry, properties){
        return this.http.put(`/api/layers/${layerName}/transaction`, {
            geometry, properties
        })
    }

    deleteFeature(layerName : string, gid : number | string){
        return this.http.delete(`/api/layers/${layerName}/transaction`, {
            body : {
                gid
            }
        })
    }
}