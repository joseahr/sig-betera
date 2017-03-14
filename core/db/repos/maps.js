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
    // Crea la tabla de mapas
    Repository.prototype.createMapsTable = function () {
        return this.db.none(sql.createMapsTable);
    };
    // Crea la tabla de mapas-users
    Repository.prototype.createMapsUsersTable = function () {
        return this.db.none(sql.createMapsUsersTable);
    };
    // Crea la tabla maps-layers
    Repository.prototype.createMapsLayersTable = function () {
        return this.db.none(sql.createMapsLayersTable);
    };
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
    Repository.prototype.getDefaultMaps = function () {
        return this.db.any(sql.getDefaultMaps);
    };
    // Obtener el nombre de todos los mapas
    Repository.prototype.getMapNames = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        return this.db.manyOrNone(sql.getMapNames, { ids: ids })
            .then(function (mapNames) { return mapNames.length ? mapNames : undefined; });
    };
    Repository.prototype.getAllMaps = function () {
        return this.db.any(sql.getAllMaps);
    };
    // Obtener las capas que conforman un mapa
    // Devuelve una lista con las ids de las capas
    Repository.prototype.getLayers = function (id_map) {
        return this.db.manyOrNone(sql.getLayers, { id_map: this.pgp.as.value(id_map) })
            .then(function (layers) { return layers.length ? layers : undefined; });
    };
    Repository.prototype.getBaseLayers = function (id_map) {
        return this.db.manyOrNone(sql.getBaseLayers, { id_map: this.pgp.as.value(id_map) })
            .then(function (layers) { return layers.length ? layers : undefined; });
    };
    Repository.prototype.getMapsAndLayers = function (id_user) {
        var _this = this;
        var promises = [this.getDefaultMaps()];
        if (id_user)
            promises.push(this.getMaps(id_user));
        return Promise.all(promises)
            .then(function (listOfMaps) {
            var mapIds = [];
            (listOfMaps[0] || []).forEach(function (el) { el.default = true; return el; });
            //console.log(listOfMaps[0], 'listOfMaps0');
            listOfMaps = (listOfMaps[1] || []).concat((listOfMaps[0] || []));
            listOfMaps = listOfMaps.reduce(function (list, el) {
                if (mapIds.indexOf(el.id) == -1) {
                    mapIds.push(el.id);
                    list.push(el);
                }
                return list;
            }, []);
            console.log(listOfMaps);
            if (!listOfMaps)
                return Promise.resolve(null);
            return _this.db.tx(function (t) {
                return t.batch(listOfMaps.map(function (m) { return m.id; }).map(_this.getLayers.bind(_this)));
            })
                .then(function (mapLayers) {
                return _this.db.tx(function (t) {
                    return t.batch(listOfMaps.map(function (m) { return m.id; }).map(_this.getBaseLayers.bind(_this)));
                })
                    .then(function (mapBaseLayers) {
                    return listOfMaps.reduce(function (arr, map, idx) {
                        var obj = {
                            id: map.id,
                            mapName: map.name,
                            maplayerIds: mapLayers[idx],
                            orden: map.orden,
                            visible: map.visible
                        };
                        if (map.default)
                            obj['default'] = true;
                        obj['mapbaselayerIds'] = mapBaseLayers[idx]
                            ? mapBaseLayers[idx]
                            : [];
                        arr.push(obj);
                        return arr;
                    }, []);
                });
            });
        });
    };
    return Repository;
}());
exports.Repository = Repository;
