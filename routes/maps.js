"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
exports.router = express.Router();
exports.router
    .route('/')
    .get(function (req, res) {
    var id = req.user ? req.user.id : null;
    db_1.db.maps.getMapsAndLayers(id)
        .then(function (mapsAndLayers) { return res.status(200).json(mapsAndLayers); })
        .catch(function (err) {
        console.log(err);
        res.status(500).json(err);
    });
});
exports.router.use(function (req, res, next) {
    if (!req.isAuthenticated())
        return res.status(500).json('Debe estar autentificado');
    next();
});
exports.router.post('/setVisible', function (req, res) {
    if (!req.body.id_map)
        return res.status(500).json('Debe añadir mapa que hacer visible');
    db_1.db.users.setVisibleMap(req.user.id, req.body.id_map)
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json(err); });
});
