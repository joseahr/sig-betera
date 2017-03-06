"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
exports.router = express.Router();
exports.router.get('/perfil', function (req, res) {
    if (!req.query.wkt) {
        res.status(404).json('Debe pasar como parámetro un WKT');
    }
    db_1.db.raster.getProfile(req.query.wkt)
        .then(function (lineString3d) {
        res.status(300).json(lineString3d.perfil);
    })
        .catch(function (err) { return res.status(500).json(err); });
});
