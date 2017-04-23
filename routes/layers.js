"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
var capabilitiesParser = require("../core/capabilities-parser");
exports.router = express.Router();
exports.router.route('/features')
    .post(function (req, res) {
    var user = req.user;
    var _a = req.body, wkt = _a.wkt, layers = _a.layers;
    //console.log('byGeom');
    if (!wkt)
        return res.status(500).json('Debe enviar una extensión, área o punto.');
    if (!layers || !layers.length)
        return res.status(500).json('Debe enviar al menos una capa en la que buscar.');
    //if(typeof req.body.layers === 'string') req.body.layers = req.body.layers.split(',');
    db_1.db.layers.getDefaultLayers().then(function (defaultLayers) {
        if (defaultLayers === void 0) { defaultLayers = []; }
        if (!user) {
            layers = layers.filter(function (l) { return defaultLayers.find(function (dl) { return dl.name == l; }); });
        }
        (_a = db_1.db.layers).getFeaturesIntersecting.apply(_a, [wkt].concat(layers)).then(function (result) { return res.status(200).json(result); })
            .catch(function (err) { return res.status(500).json('Hubo un error durante la búsqueda.'); });
        var _a;
    });
});
exports.router
    .post('/wms/capabilities', function (req, res) {
    var serviceUrl = req.body.service_url;
    //console.log(serviceUrl, req.body);
    if (!serviceUrl)
        return res.status(500).json('Introduce una url');
    capabilitiesParser.parser(serviceUrl)
        .then(function (layers) {
        if (!layers || !layers.length)
            return res.status(500).json('No es un capabilities válido');
        res.status(200).json(layers);
    })
        .catch(function (err) { return res.status(500).json('eeer' + err); });
});
exports.router
    .route('/:id_layer')
    .get(function (req, res) {
    //if(!req.user) return res.status(500).json('No capas asignadas');
    var id = req.user ? req.user.id : null;
    // Buscamos qué rol tiene sobre la capa
    db_1.db.roles.getRol(id, req.params.id_layer)
        .then(function (rol) {
        // Qué nombre tiene la capa
        rol = rol || 'r';
        db_1.db.layers.getLayerNames(req.params.id_layer)
            .then(function (layerName) {
            //console.log(layerName);
            layerName = layerName[0];
            // Obtener la capa como GeoJSON
            res.status(200).json({
                rol: rol,
                layerName: layerName
            });
        });
    })
        .catch(function (err) { return res.status(500).json(err); });
});
exports.router
    .route('/base/:id_layer')
    .get(function (req, res) {
    //console.log(req.params.id_layer);
    //if(!req.user) return res.status(500).json('No capas asignadas');
    db_1.db.layers.getBaseLayer(req.params.id_layer)
        .then(function (baseLayer) { return res.status(200).json(baseLayer); })
        .catch(function (err) { return res.status(404).json(err); });
});
exports.router
    .get('/:id_layer/geojson', function (req, res, next) {
    if (!req.user)
        return res.status(401).json({ msg: 'No permitido' });
    var id_layer = req.params.id_layer;
    console.log('id_layer as geojson', id_layer);
    // Solo se permitirá el acceso si tiene permiso de editar/eliminar
    db_1.db.roles.hasPerms(req.user.id, id_layer, 'e', 'd').then(function (perm) {
        if (!perm)
            return res.status(403).json({ msg: 'No permitido' });
        db_1.db.layers.getLayerNames(id_layer).then(function (layerName) {
            if (!layerName[0])
                return res.status(404).json({ msg: 'No existe la capa' });
            layerName = layerName[0].name;
            db_1.db.layers.getLayerAsGeoJSON(layerName).then(function (layer) { return res.status(200).json(layer); });
        });
    })
        .catch(function (err) { return res.status(500).json(err); });
});
