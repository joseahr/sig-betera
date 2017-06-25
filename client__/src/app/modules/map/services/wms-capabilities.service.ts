import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WMSCapabilitiesService {

    constructor(private http : Http){}

    getCapabilities(service_url : string){
        return this.http.post('/api/layers/wms/capabilities', { service_url });
    }
}