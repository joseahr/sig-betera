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
    private db:any;

    private pgp:IMain;

    /*getOrder( id : (string | number) ){
        return this.db.any(sql.getOrder, { id_map : this.pgp.as.value(id_map) });
    }*/
    
    /*// Crea la tabla de mapas
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
    }*/

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


    getAllMaps(){
        return this.db.any(sql.getAllMaps);
    }

  	getMapsAndLayers(id_user: (string | number)) {
  		return this.db.task(t => {
  			var queries = [t.maps.getDefaultMaps()];
  			if (id_user) {
  				queries.push(t.maps.getMaps(id_user));
  			}
  			return t.batch(queries)
  				.then(listOfMaps => {
  					let mapIds: any[] = [];
  					//(listOfMaps[0] || []).forEach(el => { el.default = true; return el; });
  					//console.log(listOfMaps[0], 'listOfMaps0');
  					listOfMaps = [...(listOfMaps[1] || []), ...(listOfMaps[0] || [])];
  					return listOfMaps.reduce((list: any, el: any) => {
  						if (mapIds.indexOf(el.id) == -1) {
  							mapIds.push(el.id);
  							list.push(el);
  						}
  						return list;
  					}, []);
  				});
  		});
	  }

}
