import { IDatabase, IMain } from 'pg-promise';
import sqlProvider = require('../sql');

var sql = sqlProvider.maps;

/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */

export class Repository {

    constructor(db:any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }

    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db:IDatabase<any>;

    private pgp:IMain;

    /*getOrder( id : (string | number) ){
        return this.db.any(sql.getOrder, { id_map : this.pgp.as.value(id_map) });
    }*/
    
    // Crea la tabla de mapas
    createMapsTable(){
        return this.db.none(sql.createMapsTable);
    }
    // Crea la tabla de mapas-users
    createMapsUsersTable(){ 
        return this.db.none(sql.createMapsUsersTable);
    }
    // Crea la tabla maps-layers
    createMapsLayersTable(){
        return this.db.none(sql.createMapsLayersTable);
    }
    // Comprobar si un usuario tiene asignado un mapa 
    hasMap( id_user : (string | number) , id_map : (string | number) ){
        return this.db.one(sql.hasMap, {
            id_user : this.pgp.as.value(id_user),
            id_map : this.pgp.as.value(id_map)
        }, hasMap => hasMap.exists);
    }
    // Obtener los mapas de un usuario
    // Devuelve una lista que contiene los ids de los mapas
    getMaps( id_user : (string | number) ){
        return this.db.any(sql.getMaps, {
            id_user : this.pgp.as.value(id_user)
        });
    }

    getDefaultMaps(){
        return this.db.any(sql.getDefaultMaps);
    }
    // Obtener el nombre de todos los mapas
    getMapNames( ...ids : any[] ){
        return this.db.manyOrNone(sql.getMapNames, {ids})
        .then(mapNames => mapNames.length ? mapNames : undefined);
    }

    getAllMaps(){
        return this.db.any(sql.getAllMaps);
    }
    // Obtener las capas que conforman un mapa
    // Devuelve una lista con las ids de las capas
    getLayers( id_map : (string | number) ){
        return this.db.manyOrNone(sql.getLayers, { id_map : this.pgp.as.value(id_map) })
        .then(layers => layers.length ? layers.map(l => l.id_layer) : undefined);
    }


    getBaseLayers( id_map : (string | number) ){
        return this.db.manyOrNone(sql.getBaseLayers, { id_map : this.pgp.as.value(id_map) })
        .then(layers => layers.length ? layers.map(l => l.id_base_layer) : undefined);
    }


    getMapsAndLayers( id_user : (string | number) ){
        let promises = [ this.getDefaultMaps() ];
        if(id_user) promises.push( this.getMaps(id_user) );

        return Promise.all(promises)
        .then(listOfMaps =>{
            let mapIds : any[] = [];
            (listOfMaps[0] || []).forEach(el => { el.default = true; return el; });
            console.log(listOfMaps[0], 'listOfMaps0');
            listOfMaps = [...(listOfMaps[1] || []), ...(listOfMaps[0] || [])];
            listOfMaps = listOfMaps.reduce( (list, el : any)=>{
                if(mapIds.indexOf(el.id) == -1){
                    mapIds.push(el.id);
                    list.push(el);
                }
                return list;
            }, []);

            console.log(listOfMaps);
            if(!listOfMaps) return Promise.resolve(null);
            return this.db.tx( t =>{
                return t.batch(listOfMaps.map( (m : any) => m.id ).map(this.getLayers))
            })
            .then(mapLayers =>{
                return this.db.tx( t =>{
                    return t.batch(listOfMaps.map( (m : any) => m.id ).map(this.getBaseLayers))
                })
                .then(mapBaseLayers =>{
                    return listOfMaps.reduce( (arr, map : any, idx) =>{
                        let obj = { 
                            id : map.id
                            , mapName : map.name
                            , maplayerIds : mapLayers[idx]
                            , orden : map.orden
                            , visible : map.visible
                        };
                        if(map.default) obj['default'] = true;
                        obj['mapbaselayerIds'] = mapBaseLayers[idx] 
                            ? mapBaseLayers[idx] 
                            : [];
                        arr.push(obj);
                        return arr;
                    }, []);
                });              
            })

        })
    }
}
