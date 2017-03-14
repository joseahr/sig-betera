import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

declare interface IUserMap {
    default : boolean;
    id : number;
    mapName : string;
    mapbaselayerIds : IBaseLayer[];
    maplayerIds : ILayer[];
    orden : IOrden[];
    visible ? : boolean;
    capas ? : (IBaseLayer | ILayer)[];
}

declare interface IBaseLayer {
    id : number;
    id_map : number;
    name : string;
    service_url : string;
    type : string;
}

declare interface ILayer {
    id : number;
    id_map : number;
    name : string;
    oid : string;
    type : string;
}

declare interface IOrden {
    id_layer : number;
    layer_type : string;
    position : number;
}

@Injectable()
export class UserMapsService {

    constructor(private http : Http){}

    getUserMaps(){
        return this.http.get('/api/maps')
            .map( (res : Response) : IUserMap[] =>{
                let listOfMaps : IUserMap[] = res.json();
                return listOfMaps.map( (mapa, index, arr) =>{
                    mapa.maplayerIds = ( mapa.maplayerIds|| [] );
                    mapa.mapbaselayerIds = ( mapa.mapbaselayerIds|| [] );
                    mapa.mapbaselayerIds.forEach( l => { l.type = 'base' });
                    mapa.maplayerIds.forEach( l => { l.type = 'layer' })
                    let capas = [...mapa.mapbaselayerIds, ...mapa.maplayerIds];
                    let orden = mapa.orden;
                    capas.sort((a : (IBaseLayer | ILayer), b : (IBaseLayer | ILayer))  : number =>{
                        let num : number =  (this.findPositionInOrder(a.id, a.type, orden) > this.findPositionInOrder(b.id, b.type, orden))
                            ? 1 : -1;
                        return num;
                    })
                    .reverse()
                    mapa.capas = capas;
                    return mapa;
                });
            })
    }

    findPositionInOrder(lid : number, ltype : string, orderList : any[]) : number {
        return orderList.reduce(function(a, b){
            if(b.layer_type == ltype && lid === b.id_layer) a = b.position;
            return a;
        }, null);
    }


}