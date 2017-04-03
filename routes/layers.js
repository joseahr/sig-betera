"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
var capabilitiesParser = require("../core/capabilities-parser");
exports.router = express.Router();
exports.router.route('/features/byGeom')
    .post(function (req, res) {
    console.log('byGeom');
    if (!req.body.wkt)
        return res.status(500).json('Debe enviar una extensión, área o punto.');
    if (!req.body.layers || !req.body.layers.length)
        return res.status(500).json('Debe enviar al menos una capa en la que buscar.');
    if (typeof req.body.layers === 'string')
        req.body.layers = req.body.layers.split(',');
    (_a = db_1.db.layers).getFeaturesIntersecting.apply(_a, [req.body.wkt].concat(req.body.layers)).then(function (result) { return res.status(200).json(result); })
        .catch(function (err) { return res.status(500).json('Hubo un error durante la búsqueda.'); });
    var _a;
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
            console.log(layerName);
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
    console.log(req.params.id_layer);
    //if(!req.user) return res.status(500).json('No capas asignadas');
    db_1.db.layers.getBaseLayer(req.params.id_layer)
        .then(function (baseLayer) { return res.status(200).json(baseLayer); })
        .catch(function (err) { return res.status(404).json(err); });
});
