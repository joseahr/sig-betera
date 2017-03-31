import { IDatabase, IMain } from 'pg-promise';
import sqlProvider = require('../sql');

var sql = sqlProvider.admin;

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

    // Creates the table;
    getUsers(){
        return this.db.manyOrNone(sql.getUsers);
    }

    getUserDetail(id : number){
        return this.db.one(sql.getUserDetail, { id });
    }

    addUserMap(id_user : number, id_map : number){
        let cs = new this.pgp.helpers.ColumnSet(['id_user', 'id_map'], {table: 'user_maps'});
        let values = [{id_user, id_map}];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    deleteUserMap(id_user : number, id_map : number){
        let query = 'DELETE FROM user_maps WHERE id_user = ${id_user} AND id_map = ${id_map}';
        return this.db.none(query, { id_user, id_map })
    }

    addUserRol(id_user : number, id_layer : number, rol : string){
        let cs = new this.pgp.helpers.ColumnSet(['id_user', 'id_layer', { name : 'rol', cast : 'public.roles_enum'}], {table: 'roles'});
        let values = [{id_user, id_layer, rol}];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    updateUserRol(id_user : number, id_layer : number, rol : string){
        let cs = new this.pgp.helpers.ColumnSet([{ name : 'rol', cast : 'public.roles_enum' }]);
        let values = [{ rol }];
        let query = this.pgp.helpers.update(values, cs, 'roles', { tableAlias : 'r' }) + 
            ' WHERE r.id_layer = ${id_layer} AND r.id_user = ${id_user}';
        return this.db.none(query, { id_layer, id_user });
    }

    deleteUserRol(id_user : number, id_layer : number){
        return this.db.none('DELETE FROM roles WHERE id_user = ${id_user} AND id_layer = ${id_layer}', { id_user, id_layer })
    }

    addUserGroup(id_user : number, group : string){
        let cs = new this.pgp.helpers.ColumnSet(['id_user', 'group'], {table: 'user_groups'});
        let values = [{ id_user, group }];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    deleteUserGroup(id_user : number, group : string){
        return this.db.none('DELETE FROM user_groups WHERE "id_user" = ${id_user} AND "group" = ${group}', { id_user, group });
    }

    createGroup(name : string){
        let cs = new this.pgp.helpers.ColumnSet(['name'], {table: 'groups'});
        let values = [{ name }];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    updateGroup(id : number, name : string){
        let cs = new this.pgp.helpers.ColumnSet(['name']);
        let values = [{ name }];
        let query = this.pgp.helpers.update(values, cs, 'groups', { tableAlias : 'g'}) + ' WHERE g.id = ${id}';
        return this.db.none(query, { id });
    }

    deleteGroup(id : number){
        return this.db.none('DELETE FROM groups WHERE id = ${id}', { id });
    }

    createMap(name : string){
        let cs = new this.pgp.helpers.ColumnSet(['name'], {table: 'maps'});
        let values = [{ name }];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    deleteMap(id_map : number){
        return this.db.none('DELETE FROM maps WHERE id = ${id_map}', { id_map });
    }

    addDefaultMap(id : number){
        let cs = new this.pgp.helpers.ColumnSet(['id'], {table: 'default_maps'});
        let values = [{ id }];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    deleteDefaultMap(id_map : number){
        return this.db.none('DELETE FROM default_maps WHERE id = ${id_map}', { id_map });
    }

    addMapLayer(id_map : number, id_layer : number){
        let cs = new this.pgp.helpers.ColumnSet(['id_map', 'id_layer'], {table: 'map_layers'});
        let values = [{ id_map, id_layer }];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    deleteMapLayer(id_map : number, id_layer : number){
        return this.db.none('DELETE FROM map_layers WHERE id_map = ${id_map} AND id_layer = ${id_layer}', { id_map, id_layer });
    }

    addMapBaselayer(id_map : number, id_base_layer : number){
        let cs = new this.pgp.helpers.ColumnSet(['id_map', 'id_base_layer'], {table: 'map_base_layers'});
        let values = [{ id_map, id_base_layer }];
        let query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    }

    deleteMapBaselayer(id_map : number, id_base_layer : number){
        return this.db.none('DELETE FROM map_base_layers WHERE id_map = ${id_map} AND id_base_layer = ${id_base_layer}', { id_map, id_base_layer });
    }

    addMapOrder(id_map : number, order : any){
        return this.db.tx( t => {
            let cs = new this.pgp.helpers.ColumnSet(['id_map', 'id_layer', 'layer_type', 'position'], {table: 'map_layers_order'});
            let query = this.pgp.helpers.insert(order, cs);
            let queries = [
                  t.none('DELETE FROM map_layers_order WHERE id_map = ${id_map}', { id_map })
                , t.none(query)
            ];
            return t.batch(queries);
        })
    }

    updateLayerName(oldName : string, newName : string){
        let query = 'ALTER TABLE "capas"."${oldName#}" RENAME TO ${newName#}';
        return this.db.none(query, { oldName, newName });
        /*
        let cs = new this.pgp.helpers.ColumnSet(['name']);
        let values = [{ name }];
        let query = this.pgp.helpers.update(values, cs, 'layers', { tableAlias : 'l'}) + ' WHERE l.id = ${id}';
        return this.db.none(query, { id });
        */
    }

    removeLayer(tableName : string){
        return this.db.none('DROP TABLE IF EXISTS "capas".${tableName~} CASCADE', { tableName });
    }

    createBaselayer(service_url : string, layers : string){
        return this.db.none("INSERT INTO base_layers(service_url, name) VALUES('${service_url#}', '${layers#}')", { service_url, layers });
    }

    deleteBaselayer(id : number){
        return this.db.none("DELETE FROM base_layers WHERE id = '${id#}'", { id });
    }

}

