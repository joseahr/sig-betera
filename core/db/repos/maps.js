"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var sql = sqlProvider.maps;
/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
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
    Repository.prototype.hasMap = function (id_user, id_map) {
        return this.db.one(sql.hasMap, {
            id_user: this.pgp.as.value(id_user),
            id_map: this.pgp.as.value(id_map)
        }, function (hasMap) { return hasMap.exists; });
    };
    // Obtener los mapas de un usuario
    // Devuelve una lista que contiene los ids de los mapas
    Repository.prototype.getMaps = function (id_user) {
        return this.db.any(sql.getMaps, {
            id_user: this.pgp.as.value(id_user)
        });
    };
    Repository.prototype.getDefaultMaps = function (id_user) {
        return this.db.any(sql.getDefaultMaps, { id_user: id_user });
    };
    Repository.prototype.getMapById = function (id) {
        return this.db.one(sql.byId, { id: id });
    };
    Repository.prototype.getAllMaps = function () {
        return this.db.any(sql.getAllMaps);
    };
    Repository.prototype.getMapsAndLayers = function (id_user) {
        return this.db.task(function (t) {
            var queries = [t.maps.getDefaultMaps(id_user)];
            if (id_user) {
                queries.push(t.maps.getMaps(id_user));
            }
            return t.batch(queries)
                .then(function (listOfMaps) {
                var mapIds = [];
                //(listOfMaps[0] || []).forEach(el => { el.default = true; return el; });
                //console.log(listOfMaps[0], 'listOfMaps0');
                listOfMaps = (listOfMaps[1] || []).concat((listOfMaps[0] || []));
                return listOfMaps.reduce(function (list, el) {
                    if (mapIds.indexOf(el.id) == -1) {
                        mapIds.push(el.id);
                        list.push(el);
                    }
                    return list;
                }, []);
            });
        });
    };
    return Repository;
}());
exports.Repository = Repository;
