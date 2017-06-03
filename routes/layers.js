"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
var capabilitiesParser = require("../core/capabilities-parser");
var jsts = require("jsts");
var wktReader = new jsts.io.WKTReader();
exports.router = express.Router();
var getFeatureDataGuard = function () {
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var id, layerName, maps, layersIcanSee, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = (req.user || { id: null }).id;
                    layerName = req.params.layerName;
                    if (!layerName)
                        return [2 /*return*/, res.status(500).json('Debe seleccionar la capa')];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, db_1.db.maps.getMapsAndLayers(id)];
                case 2:
                    maps = (_a.sent()) || [];
                    layersIcanSee = []
                        .concat.apply([], maps.map(function (m) { return m.layers; })).map(function (l) { return l.name; });
                    if (!layersIcanSee.includes(layerName)) {
                        return [2 /*return*/, res.status(403).json({ msg: 'No permitido' })];
                    }
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(500).json({ msg: e_1 });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
var getFeaturesGuard = function () {
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var id, layers, maps, layersIcanSee_1, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = (req.user || { id: null }).id;
                    layers = req.body.layers;
                    if (!layers || !layers.length)
                        return [2 /*return*/, res.status(500).json('Debe enviar al menos una capa en la que buscar.')];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, db_1.db.maps.getMapsAndLayers(id)];
                case 2:
                    maps = (_a.sent()) || [];
                    layersIcanSee_1 = []
                        .concat.apply([], maps.map(function (m) { return m.layers; })).map(function (l) { return l.name; });
                    req.body.layers = layers.filter(function (l) { return layersIcanSee_1.includes(l); });
                    console.log(layersIcanSee_1, layers);
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    res.status(500).json({ msg: e_2 });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
var rolesGuardMiddleware = function () {
    var checkPerms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        checkPerms[_i] = arguments[_i];
    }
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var id, layerName, layersWithPerms, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.user.id;
                    layerName = req.params.layerName;
                    return [4 /*yield*/, (_a = db_1.db.roles).getLayerNamesByPerms.apply(_a, [id].concat(checkPerms))];
                case 1:
                    layersWithPerms = (_b.sent())
                        .map(function (l) { return l.name; });
                    if (!layersWithPerms.includes(layerName)) {
                        return [2 /*return*/, res.status(403).json({ msg: 'No permitido' })];
                    }
                    next();
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.router.route('/features')
    .post([getFeaturesGuard()], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var user, _a, wkt, layers, features, e_3, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                user = req.user;
                _a = req.body, wkt = _a.wkt, layers = _a.layers;
                //console.log('byGeom');
                if (!wkt)
                    return [2 /*return*/, res.status(500).json('Debe enviar una extensión, área o punto.')];
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (_b = db_1.db.layers).getFeaturesIntersecting.apply(_b, [wkt].concat(layers))];
            case 2:
                features = _c.sent();
                res.status(200).json(features);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _c.sent();
                res.status(500).json('Hubo un error durante la búsqueda.');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router
    .post('/wms/capabilities', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var serviceUrl, layers, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                serviceUrl = req.body.service_url;
                //console.log(serviceUrl, req.body);
                if (!serviceUrl)
                    return [2 /*return*/, res.status(500).json('Introduce una url')];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, capabilitiesParser.parser(serviceUrl)];
            case 2:
                layers = _a.sent();
                if (!layers || !layers.length)
                    return [2 /*return*/, res.status(500).json('No es un capabilities válido')];
                res.status(200).json(layers);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.status(500).json(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/schema/:layerName', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var layerName, layerSchema, geomColumn, geometryType, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                layerName = req.params.layerName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, db_1.db.layers.getLayerSchema(layerName)];
            case 2:
                layerSchema = _a.sent();
                geomColumn = layerSchema.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; }).name;
                return [4 /*yield*/, db_1.db.layers.getLayerGeometryType(layerName, geomColumn)];
            case 3:
                geometryType = _a.sent();
                res.status(200).json({ layerSchema: layerSchema, geometryType: geometryType });
                return [3 /*break*/, 5];
            case 4:
                e_4 = _a.sent();
                res.status(500).json({ msg: e_4 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.router.
    route('/:layerName/data/:gid')
    .get([getFeatureDataGuard()], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, layerName, gid, data, e_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.params, layerName = _a.layerName, gid = _a.gid;
                return [4 /*yield*/, db_1.db.any('SELECT * from datos WHERE capa = $1 and gid = $2', [layerName, gid])];
            case 1:
                data = _b.sent();
                console.log(data);
                res.status(200).json(data);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _b.sent();
                res.status(500).json({ msg: e_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })
    .post([rolesGuardMiddleware('e', 'd')], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, url, _a, layerName, gid, data, e_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.user.id;
                url = req.body.url;
                _a = req.params, layerName = _a.layerName, gid = _a.gid;
                return [4 /*yield*/, db_1.db.any('INSERT INTO datos(capa, gid, url, id_user) VALUES($1, $2, $3, $4)', [layerName, gid, url, id])];
            case 1:
                data = _b.sent();
                console.log(data);
                res.status(200).json(data);
                return [3 /*break*/, 3];
            case 2:
                e_6 = _b.sent();
                res.status(500).json({ msg: e_6 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router
    .route('/:layerName/transaction')
    .post([rolesGuardMiddleware('c', 'e', 'd')], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var layerName, _a, geometry, properties, layerSchema, geomColumn, fields, values, cs, query, gid, e_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                layerName = req.params.layerName;
                _a = req.body, geometry = _a.geometry, properties = _a.properties;
                console.log(geometry, properties);
                return [4 /*yield*/, db_1.db.layers.getLayerSchema(layerName)];
            case 1:
                layerSchema = _b.sent();
                geomColumn = layerSchema.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; }).name;
                fields = Object.keys(properties);
                values = properties;
                console.log(geomColumn, 'geomColumn');
                //fields.push(geomColumn);
                //properties[geomColumn] = 'SRID=25830;' + geometry;
                //let values = fields.map( field => properties[field] );
                if (!geometry) {
                    return [2 /*return*/, res.status(500).json({ msg: 'Error, debes añadir una geometría' })];
                }
                try {
                    wktReader.read(geometry);
                    fields.push({
                        name: geomColumn,
                        cast: 'geometry'
                    });
                    values[geomColumn] = 'SRID=25830;' + geometry;
                }
                catch (e) {
                    return [2 /*return*/, res.status(500).json({ msg: 'Geometría no válida' })];
                }
                console.log(fields, values);
                //let layerSchema = await db.layers.getLayerSchema(layerName);
                //console.log(layersWithPerms);
                console.log(layerName);
                cs = new db_1.pgp.helpers.ColumnSet(fields, { table: { table: layerName, schema: 'capas' } });
                query = db_1.pgp.helpers.insert(values, cs) + ' RETURNING gid';
                return [4 /*yield*/, db_1.db.one(query)];
            case 2:
                gid = (_b.sent()).gid;
                res.status(200).json({ msg: 'OK', gid: gid });
                return [3 /*break*/, 4];
            case 3:
                e_7 = _b.sent();
                console.log(e_7);
                res.status(500).json({ msg: e_7 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })
    .put([rolesGuardMiddleware('e', 'd')], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var layerName, _a, geometry, properties, gid, layerSchema, geomColumn, fields, values, cs, query, response, e_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                layerName = req.params.layerName;
                _a = req.body, geometry = _a.geometry, properties = _a.properties;
                gid = properties.gid;
                delete properties['gid'];
                return [4 /*yield*/, db_1.db.layers.getLayerSchema(layerName)];
            case 1:
                layerSchema = _b.sent();
                geomColumn = layerSchema.find(function (col) { return col.type === 'USER-DEFINED' && col.udt === 'geometry'; }).name;
                fields = Object.keys(properties);
                values = properties;
                console.log(values);
                if (geometry) {
                    try {
                        wktReader.read(geometry);
                        fields.push({
                            name: geomColumn,
                            cast: 'geometry'
                        });
                        values[geomColumn] = 'SRID=25830;' + geometry;
                    }
                    catch (e) {
                        return [2 /*return*/, res.status(500).json({ msg: 'Geometría no válida' })];
                    }
                }
                cs = new db_1.pgp.helpers.ColumnSet(fields, { table: { table: layerName, schema: 'capas' } });
                query = db_1.pgp.helpers.update(values, cs);
                return [4 /*yield*/, db_1.db.none(query + ' WHERE gid = ${gid}', { gid: gid })];
            case 2:
                response = _b.sent();
                res.status(200).json({ msg: 'OK' });
                return [3 /*break*/, 4];
            case 3:
                e_8 = _b.sent();
                console.log(e_8);
                res.status(500).json({ msg: e_8 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })
    .delete([rolesGuardMiddleware('d')], function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var gid, layerName, table, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                gid = req.body.gid;
                layerName = req.params.layerName;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                table = new db_1.pgp.helpers.TableName(layerName, 'capas');
                return [4 /*yield*/, db_1.db.none('DELETE FROM $1 WHERE gid = $2', [table, gid])];
            case 2:
                _a.sent();
                res.status(200).json({ msg: 'OK' });
                return [3 /*break*/, 4];
            case 3:
                e_9 = _a.sent();
                res.status(500).json({ msg: e_9 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*
router
.route('/:id_layer')
.get( async (req, res)=>{
    //if(!req.user) return res.status(500).json('No capas asignadas');
    var id = req.user ? req.user.id : null;
    try {
        // Buscamos qué rol tiene sobre la capa
        let rol = await db.roles.getRol(id, req.params.id_layer);
            rol = rol || 'r';
        
        let [layerName, ..._] = await db.layers.getLayerNames(req.params.id_layer);
        res.status(200).json({ rol, layerName });
    } catch(err){
        res.status(500).json(err)
    }

});

router
.route('/base/:id_layer')
.get( async (req, res)=>{
    //console.log(req.params.id_layer);
    //if(!req.user) return res.status(500).json('No capas asignadas');
    try {
        let baseLayer = await db.layers.getBaseLayer(req.params.id_layer);
        res.status(200).json(baseLayer)
    } catch(err){
        res.status(404).json(err)
    }
});

router
.get('/:id_layer/geojson', async (req, res, next)=>{
    if(!req.user) return res.status(401).json({ msg : 'No permitido' });
    let { id_layer } = req.params;
    console.log('id_layer as geojson', id_layer);
    try {
        // Solo se permitirá el acceso si tiene permiso de editar/eliminar
        let perm = await db.roles.hasPerms(req.user.id, id_layer, 'e', 'd');
    
        if(!perm) return res.status(403).json({ msg : 'No permitido' });
    
        let [layerName, ..._] = await db.layers.getLayerNames(id_layer);
    
        if(!layerName) return res.status(404).json({ msg : 'No existe la capa' });
    
        let layer = await db.layers.getLayerAsGeoJSON(layerName);
        res.status(200).json(layer)
    } catch(err){
        res.status(500).json(err)
    }

});

*/ 
