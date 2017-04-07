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

}