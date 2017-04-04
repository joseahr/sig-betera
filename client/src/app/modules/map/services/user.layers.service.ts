import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Feature, format } from 'openlayers';


@Injectable()
export class UserLayersService {

    wktParser : format.WKT = new format.WKT();

    constructor(private http : Http){}

    getFeatures(featureIntersect : Feature, layers){
        let wkt = this.wktParser.writeFeature(featureIntersect, {
            dataProjection : 'EPSG:25830',
            featureProjection : 'EPSG:25830'
        });
        console.log(featureIntersect, 'WKT', wkt, 'featureToSend');
        return this.http.post('/api/layers/features', {
            wkt, layers
        });
    }

}