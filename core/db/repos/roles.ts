import { IDatabase, IMain } from 'pg-promise';
import sqlProvider = require('../sql');

var sql = sqlProvider.roles;

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

    createTable(){
        return this.db.none(sql.create);
    }
        
    createEnum(){
        return this.db.none(sql.createEnum);
    }
        
    // Devuelve (id_capa, id_usuario, rol) de las capas 
    // de un Usuario
    getLayerNamesByPerms(id_user : (string | number), ...perms : any[]){
        return this.db.manyOrNone(sql.getLayerNamesByPerms, {
            id_user : this.pgp.as.value(id_user),
            perms
        });  
    }
    // Comprobar si un usuario tiene permisos en una capa 
    hasPerms(id_user : (string | number), id_layer : (string | number), ...roles : string[]){
        return this.db.oneOrNone(sql.hasPerm, {
            id_user : this.pgp.as.value(id_user || 0),
            id_layer : this.pgp.as.value(id_layer),
            roles
        }, hasPerm => hasPerm ? hasPerm.exists : null);
    }

    // Añade permisos a un usuario en una capa
    addPerm(id_user : (string | number), id_layer : (string | number), rol : string){
        return this.db.none(sql.addPerm, {
            values_ : [id_user, id_layer, rol]               
        });
    }

    // Actualizar un permiso de usuario
    updatePerm(id_user : (string | number), id_layer : (string | number), rol : string){
        return this.db.none(sql.updatePerm, {
            id_user : this.pgp.as.value(id_user),
            id_layer : this.pgp.as.value(id_layer),
            rol : this.pgp.as.value(rol)            
        });
    }

    // Obtener el rol de un usuario en una capa
    getRol( id_user : (string | number), id_layer : (string | number) ){
        return this.db.oneOrNone(sql.getRol, {
            id_user : this.pgp.as.value(id_user || 0),
            id_layer : this.pgp.as.value(id_layer)
        }, rol => rol ? rol.rol : undefined);
    }
}
