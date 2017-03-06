"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMP_DIR_SHP = './public/uploads/shapefiles';
var multer = require("multer");
var bluebird = require("bluebird");
var fs = require("fs");
var multerOpts = function (dest, filename, fileSize) { return ({
    limits: {
        fileSize: fileSize
    },
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            console.log('destttttttttttt' + dest);
            cb(null, dest);
        },
        filename: filename
    })
}); };
var unlink = bluebird.promisify(fs.unlink);
exports.removeFiles = function () {
    var files = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        files[_i] = arguments[_i];
    }
    return Promise.all(files.map(function (path) { return unlink(path); }));
};
exports.createMulter = function (dest, filename, fileSize) {
    return multer(multerOpts(dest, filename, fileSize));
};
exports.fileNameSHP = function (req, file, cb) {
    cb(null, file.originalname);
};
