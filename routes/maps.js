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
