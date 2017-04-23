"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var child_process_1 = require("child_process");
var config_1 = require("../../config");
var exec = require('bluebird').promisify(child_process_1.exec);
var sql = sqlProvider.layers;
/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
    // Devuelve las capas que aparecen en default_maps
    Repository.prototype.getDefaultLayers = function () {
        return this.db.any("\n            SELECT l.id, l.name FROM Default_Maps dm\n            INNER JOIN Map_Layers ml ON dm.id = ml.id_map\n            LEFT JOIN Layers l ON l.id = ml.id_layer\n        ");
    };
    Repository.prototype.getFeaturesIntersecting = function (wkt) {
        var _this = this;
        var layers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            layers[_i - 1] = arguments[_i];
        }
        return this.db.task(function (t) {
            return t.batch(layers.map(function (layerName) {
                return _this.getLayerSchema(layerName)
                    .then(function (schema) {
                    // Obtenemos todas las columnas de la Tabla (schema)
                    var geomColumn = schema.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; }).name;
                    // Obtenemos la columna de Geometría (para ello nos fijamos en el udt_name)
                    var properties = schema
                        .filter(function (col) { return col.name !== geomColumn; })
                        .map(function (col) { return col.name; }).join();
                    return t.manyOrNone(sql.getFeaturesIntersecting, { wkt: wkt, geomColumn: geomColumn, properties: properties, layerName: layerName });
                });
            })).then(function (founds) { return founds.map(function (el) { return el[0]; }); });
        });
    };
    Repository.prototype.exist = function (tableName) {
        return this.db.one("SELECT EXISTS( SELECT 1 FROM information_schema.tables WHERE table_name = '${tableName#}' )", { tableName: tableName })
            .then(function (result) { return result.exists; });
    };
    Repository.prototype.importSHP = function (shpPath, tableName) {
        //require('fs').readFile(`${shpPath}`, (err, file)=>console.log(err, file, 'guaa'));
        var command = "shp2pgsql -I -s 25830 -W \"LATIN1\" " + shpPath + " \"capas\".\"" + tableName + "\" | psql -d " + config_1.dbConfig.database + " -U postgres";
        console.log(command);
        return exec(command, { env: { 'PGPASSWORD': config_1.dbConfig.password } });
        /*let proceso = exec(command, { env : { 'PGPASSWORD' : dbConfig.password} })
        proceso.stdout.on('data', (data)=>{
            console.log('stdout', data);
        });
        proceso.stderr.on('data', (data)=>{
            console.log('stderr', data);
        });
        return Promise.resolve(null);*/
    };
    Repository.prototype.createTable = function () {
        return this.db.none(sql.create);
    };
    // GET TILE
    /*getTile(layer, bbox){
        this.db.one();
    }*/
    // Devuelvo el tipo de Geometría
    Repository.prototype.getLayerGeometryType = function (layerName, geomColumn) {
        return this.db.one(sql.getLayerGeometryType, {
            table: this.pgp.as.value(layerName),
            geomColumn: this.pgp.as.value(geomColumn)
        }, function (geometry) { return geometry.type; });
    };
    // Buscar por (id o name)
    Repository.prototype.findBy = function (column, value) {
        return this.db.oneOrNone(sql.findBy, {
            column: this.pgp.as.name(column),
            value: this.pgp.as.value(value)
        });
    };
    // Devuelve el ID y el nombre de una capa
    Repository.prototype.getLayerNames = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        return this.db.manyOrNone(sql.getLayerNames, {
            ids: ids
        });
    };
    // Obtener las columnas y el tipo de dato de una tabla
    Repository.prototype.getLayerSchema = function (tableName) {
        return this.db.many(sql.schema, {
            tableName: this.pgp.as.value(tableName)
        });
    };
    Repository.prototype.getAllLayers = function () {
        return this.db.manyOrNone(sql.getAllLayers);
    };
    Repository.prototype.getAllBaseLayers = function () {
        return this.db.manyOrNone(sql.getAllBaseLayers);
    };
    Repository.prototype.getBaseLayer = function (id_layer) {
        return this.db.one(sql.getBaseLayer, {
            id_layer: this.pgp.as.value(id_layer)
        });
    };
    // Obtener una capa como GeoJSON
    Repository.prototype.getLayerAsGeoJSON = function (layerName) {
        var _this = this;
        var geomColumn, properties;
        return this.getLayerSchema(layerName)
            .then(function (schema) {
            // Obtenemos todas las columnas de la Tabla (schema)
            geomColumn = schema.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; }).name;
            // Obtenemos la columna de Geometría (para ello nos fijamos en el udt_name)
            properties = schema.filter(function (col) { return col.name !== geomColumn; });
            //console.log('geomColum :', geomColumn, 'properties :', properties)
            return _this.db.one(sql.getLayerAsGeoJSON, {
                geomColumn: _this.pgp.as.name(geomColumn),
                properties: properties.map(function (prop) { return _this.pgp.as.name(prop.name); }).join(),
                layerName: layerName
            })
                .then(function (layer) { return layer.result; })
                .then(function (layer) {
                return _this.getLayerGeometryType(layerName, geomColumn)
                    .then(function (geomColumnType) { return ({ layerName: layerName, geomColumn: geomColumn, properties: properties, geomColumnType: geomColumnType, layer: layer }); });
            });
        });
    };
    return Repository;
}());
exports.Repository = Repository;
