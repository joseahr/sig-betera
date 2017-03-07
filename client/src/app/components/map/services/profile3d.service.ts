import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import * as ol from 'openlayers';

import { Observable } from 'rxjs';

@Injectable()
export class Profile3DService {
    
    wktParser : ol.format.WKT = new ol.format.WKT();

    constructor(private http : Http){}

    getProfile( featureLS : ol.Feature ){
        if(featureLS.getGeometry().getType() != 'LineString'){
            console.log('[ProfileService] - Debe pasar como parámetro un Feature de tipo LS');
            return Observable.throw('[ProfileService] - Debe pasar como parámetro un Feature de tipo LS');
        } else {
            let wkt = this.wktParser.writeFeature(featureLS);
            return this.http.get('/api/raster/perfil');
        }
    }

}