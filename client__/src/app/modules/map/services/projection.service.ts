import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import * as ol from 'openlayers';
import * as proj4 from 'proj4';

ol.proj.setProj4(proj4);

@Injectable()
export class ProjectionService {

    defaultProjections : Array<any> = [{
        code : '25830',
        name : 'ETRS89 / UTM zone 30N (X, Y)',
        proj4 : '+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
        bbox : [44, -9.6, 35.2, 4.6]
    }, {
        code : '4258', 
        name : 'ETRS89 / UTM zone 30 (lon/lat)',
        proj4 : '+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs',
        bbox : [44, -9.6, 35.2, 4.6]
    }]


    constructor(private http : Http){}

    getProjDef(epsgCode){
        return this.http.get(`http://epsg.io/${epsgCode}.proj4`);
    }

    setProjection(map : ol.Map, code){
        let proj = this.defaultProjections.find(p => p.code == `${code}`);
        if(!proj){ return; }
        
        proj4.defs(`EPSG:${code}`, proj.proj4);
        let projection = ol.proj.get(`EPSG:${code}`);

        let fromLonLat = ol.proj.getTransform('EPSG:4326', projection);

        let bbox = proj.bbox;
        var extent = ol.extent.applyTransform([bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
        projection.setExtent(extent);
        let zoom = map.getView().getZoom();
        let center = ol.proj.transform(map.getView().getCenter(), map.getView().getProjection(), projection);

        let view = new ol.View({ projection, zoom, center });
        map.setView(view);
    }

    getDefaultProjection(code){
        let proj = this.defaultProjections.find( p => p.code == code);
        if(!proj) return null;
        proj4.defs(`EPSG:${code}`, proj.proj4);
        let projection = ol.proj.get(`EPSG:${code}`);

        let fromLonLat = ol.proj.getTransform('EPSG:4326', projection);

        let bbox = proj.bbox;
        var extent = ol.extent.applyTransform([bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
        projection.setExtent(extent);
        return projection;
    }
}