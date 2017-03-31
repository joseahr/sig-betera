"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var sql = sqlProvider.admin;
/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
    // Creates the table;
    Repository.prototype.getUsers = function () {
        return this.db.manyOrNone(sql.getUsers);
    };
    Repository.prototype.getUserDetail = function (id) {
        return this.db.one(sql.getUserDetail, { id: id });
    };
    Repository.prototype.addUserMap = function (id_user, id_map) {
        var cs = new this.pgp.helpers.ColumnSet(['id_user', 'id_map'], { table: 'user_maps' });
        var values = [{ id_user: id_user, id_map: id_map }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.deleteUserMap = function (id_user, id_map) {
        var query = 'DELETE FROM user_maps WHERE id_user = ${id_user} AND id_map = ${id_map}';
        return this.db.none(query, { id_user: id_user, id_map: id_map });
    };
    Repository.prototype.addUserRol = function (id_user, id_layer, rol) {
        var cs = new this.pgp.helpers.ColumnSet(['id_user', 'id_layer', { name: 'rol', cast: 'public.roles_enum' }], { table: 'roles' });
        var values = [{ id_user: id_user, id_layer: id_layer, rol: rol }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.updateUserRol = function (id_user, id_layer, rol) {
        var cs = new this.pgp.helpers.ColumnSet([{ name: 'rol', cast: 'public.roles_enum' }]);
        var values = [{ rol: rol }];
        var query = this.pgp.helpers.update(values, cs, 'roles', { tableAlias: 'r' }) +
            ' WHERE r.id_layer = ${id_layer} AND r.id_user = ${id_user}';
        return this.db.none(query, { id_layer: id_layer, id_user: id_user });
    };
    Repository.prototype.deleteUserRol = function (id_user, id_layer) {
        return this.db.none('DELETE FROM roles WHERE id_user = ${id_user} AND id_layer = ${id_layer}', { id_user: id_user, id_layer: id_layer });
    };
    Repository.prototype.addUserGroup = function (id_user, group) {
        var cs = new this.pgp.helpers.ColumnSet(['id_user', 'group'], { table: 'user_groups' });
        var values = [{ id_user: id_user, group: group }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.deleteUserGroup = function (id_user, group) {
        return this.db.none('DELETE FROM user_groups WHERE "id_user" = ${id_user} AND "group" = ${group}', { id_user: id_user, group: group });
    };
    Repository.prototype.createGroup = function (name) {
        var cs = new this.pgp.helpers.ColumnSet(['name'], { table: 'groups' });
        var values = [{ name: name }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.updateGroup = function (id, name) {
        var cs = new this.pgp.helpers.ColumnSet(['name']);
        var values = [{ name: name }];
        var query = this.pgp.helpers.update(values, cs, 'groups', { tableAlias: 'g' }) + ' WHERE g.id = ${id}';
        return this.db.none(query, { id: id });
    };
    Repository.prototype.deleteGroup = function (id) {
        return this.db.none('DELETE FROM groups WHERE id = ${id}', { id: id });
    };
    Repository.prototype.createMap = function (name) {
        var cs = new this.pgp.helpers.ColumnSet(['name'], { table: 'maps' });
        var values = [{ name: name }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.deleteMap = function (id_map) {
        return this.db.none('DELETE FROM maps WHERE id = ${id_map}', { id_map: id_map });
    };
    Repository.prototype.addDefaultMap = function (id) {
        var cs = new this.pgp.helpers.ColumnSet(['id'], { table: 'default_maps' });
        var values = [{ id: id }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.deleteDefaultMap = function (id_map) {
        return this.db.none('DELETE FROM default_maps WHERE id = ${id_map}', { id_map: id_map });
    };
    Repository.prototype.addMapLayer = function (id_map, id_layer) {
        var cs = new this.pgp.helpers.ColumnSet(['id_map', 'id_layer'], { table: 'map_layers' });
        var values = [{ id_map: id_map, id_layer: id_layer }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.deleteMapLayer = function (id_map, id_layer) {
        return this.db.none('DELETE FROM map_layers WHERE id_map = ${id_map} AND id_layer = ${id_layer}', { id_map: id_map, id_layer: id_layer });
    };
    Repository.prototype.addMapBaselayer = function (id_map, id_base_layer) {
        var cs = new this.pgp.helpers.ColumnSet(['id_map', 'id_base_layer'], { table: 'map_base_layers' });
        var values = [{ id_map: id_map, id_base_layer: id_base_layer }];
        var query = this.pgp.helpers.insert(values, cs);
        return this.db.none(query);
    };
    Repository.prototype.deleteMapBaselayer = function (id_map, id_base_layer) {
        return this.db.none('DELETE FROM map_base_layers WHERE id_map = ${id_map} AND id_base_layer = ${id_base_layer}', { id_map: id_map, id_base_layer: id_base_layer });
    };
    Repository.prototype.addMapOrder = function (id_map, order) {
        var _this = this;
        return this.db.tx(function (t) {
            var cs = new _this.pgp.helpers.ColumnSet(['id_map', 'id_layer', 'layer_type', 'position'], { table: 'map_layers_order' });
            var query = _this.pgp.helpers.insert(order, cs);
            var queries = [
                t.none('DELETE FROM map_layers_order WHERE id_map = ${id_map}', { id_map: id_map }),
                t.none(query)
            ];
            return t.batch(queries);
        });
    };
    Repository.prototype.updateLayerName = function (oldName, newName) {
        var query = 'ALTER TABLE "capas"."${oldName#}" RENAME TO ${newName#}';
        return this.db.none(query, { oldName: oldName, newName: newName });
        /*
        let cs = new this.pgp.helpers.ColumnSet(['name']);
        let values = [{ name }];
        let query = this.pgp.helpers.update(values, cs, 'layers', { tableAlias : 'l'}) + ' WHERE l.id = ${id}';
        return this.db.none(query, { id });
        */
    };
    Repository.prototype.removeLayer = function (tableName) {
        return this.db.none('DROP TABLE IF EXISTS "capas".${tableName~} CASCADE', { tableName: tableName });
    };
    Repository.prototype.createBaselayer = function (service_url, layers) {
        return this.db.none("INSERT INTO base_layers(service_url, name) VALUES('${service_url#}', '${layers#}')", { service_url: service_url, layers: layers });
    };
    Repository.prototype.deleteBaselayer = function (id) {
        return this.db.none("DELETE FROM base_layers WHERE id = '${id#}'", { id: id });
    };
    return Repository;
}());
exports.Repository = Repository;
