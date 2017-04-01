"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
var mailer = require("../core/mailer");
var capabilitiesParser = require("../core/capabilities-parser");
var path = require("path");
var Multer = require("../core/multer");
var multer = Multer.createMulter(Multer.TEMP_DIR_SHP, Multer.fileNameSHP, 50 * 1024 * 1024).array('shp[]', 3); // .shp .dbf .shx;
exports.router = express.Router();
exports.router.use(function (req, res, next) {
    if (!req.isAuthenticated())
        return res.status(406).json({ msg: 'Permiso denegado' });
    if (req.user.rol != 'admin')
        return res.status(406).json({ msg: 'Permiso denegado' });
    next();
});
exports.router.get('/users', function (req, res) {
    handleWithData(db_1.db.admin.getUsers(), res);
});
exports.router.get('/users/:id', function (req, res) {
    var id = req.params.id;
    handleWithData(db_1.db.admin.getUserDetail(id), res);
});
exports.router.get('/map/:id', function (req, res) {
    var id = req.params.id;
    handleWithData(db_1.db.maps.getMapById(id), res);
});
exports.router.get('/default-maps', function (req, res) {
    handleWithData(db_1.db.maps.getDefaultMaps(), res);
});
/**************************
 * AÑADIR / ELIMINAR UN MAPA
 *  A UN USUARIO
 **************************/
exports.router.route('/user/map')
    .post(function (req, res) {
    var _a = req.body, id_user = _a.id_user, id_map = _a.id_map;
    handle(db_1.db.admin.addUserMap(req.body.id_user, req.body.id_map), res);
})
    .delete(function (req, res) {
    var _a = req.body, id_user = _a.id_user, id_map = _a.id_map;
    handle(db_1.db.admin.deleteUserMap(req.body.id_user, req.body.id_map), res);
});
/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  ROL DE UN USUARIO SOBRE UNA CAPA
 **************************/
exports.router.route('/user/rol')
    .post(function (req, res) {
    var _a = req.body, id_user = _a.id_user, id_layer = _a.id_layer, rol = _a.rol;
    if (!id_user || !id_layer || !rol)
        return res.status(404).json('Error : Faltan parámetros');
    handle(db_1.db.admin.addUserRol(id_user, id_layer, rol), res);
})
    .put(function (req, res) {
    var _a = req.body, id_user = _a.id_user, id_layer = _a.id_layer, rol = _a.rol;
    if (!id_user || !id_layer || !rol)
        return res.status(404).json('Error : Faltan parámetros');
    handle(db_1.db.admin.updateUserRol(id_user, id_layer, rol), res);
})
    .delete(function (req, res) {
    var _a = req.body, id_user = _a.id_user, id_layer = _a.id_layer;
    handle(db_1.db.admin.deleteUserRol(id_user, id_layer), res);
});
/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  GRUPO DE UN USUARIO
 **************************/
exports.router.route('/user/group')
    .post(function (req, res) {
    var _a = req.body, id_user = _a.id_user, group = _a.group;
    if (!id_user || !group)
        return res.status(404).json('Error : Faltan parámetros');
    handle(db_1.db.admin.addUserGroup(id_user, group), res);
})
    .delete(function (req, res) {
    var _a = req.body, id_user = _a.id_user, group = _a.group;
    handle(db_1.db.admin.deleteUserGroup(id_user, group), res);
});
/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  UN NUEVO GRUPO DE USUARIOS
 **************************/
exports.router.route('/groups')
    .get(function (req, res) {
    handleWithData(db_1.db.users.getAllGroups(), res);
})
    .post(function (req, res) {
    var name = req.body.name;
    handle(db_1.db.admin.createGroup(name), res);
})
    .put(function (req, res) {
    var _a = req.body, id = _a.id, new_name = _a.new_name;
    if (!id || !new_name)
        return res.status(404).json('Error : Faltan parámetros');
    handle(db_1.db.admin.updateGroup(id, new_name), res);
})
    .delete(function (req, res) {
    var id = req.body.id;
    handle(db_1.db.admin.deleteGroup(id), res);
});
exports.router.route('/maps')
    .get(function (req, res) {
    handleWithData(db_1.db.maps.getAllMaps(), res);
})
    .post(function (req, res) {
    var name = req.body.name;
    handle(db_1.db.admin.createMap(name), res);
})
    .delete(function (req, res) {
    var id_map = req.body.id_map;
    handle(db_1.db.admin.deleteMap(id_map), res);
});
exports.router.route('/maps/defaults')
    .post(function (req, res) {
    var id_map = req.body.id_map;
    handle(db_1.db.admin.addDefaultMap(id_map), res);
})
    .delete(function (req, res) {
    var id_map = req.body.id_map;
    handle(db_1.db.admin.deleteDefaultMap(id_map), res);
});
exports.router.route('/maps/layers')
    .post(function (req, res) {
    var _a = req.body, id_map = _a.id_map, id_layer = _a.id_layer;
    handle(db_1.db.admin.addMapLayer(id_map, id_layer), res);
})
    .delete(function (req, res) {
    var _a = req.body, id_map = _a.id_map, id_layer = _a.id_layer;
    handle(db_1.db.admin.deleteMapLayer(id_map, id_layer), res);
});
exports.router.route('/maps/baselayers')
    .post(function (req, res) {
    var _a = req.body, id_map = _a.id_map, id_layer = _a.id_layer;
    handle(db_1.db.admin.addMapBaselayer(id_map, id_layer), res);
})
    .delete(function (req, res) {
    var _a = req.body, id_map = _a.id_map, id_layer = _a.id_layer;
    handle(db_1.db.admin.deleteMapBaselayer(id_map, id_layer), res);
});
exports.router.route('/maps/order')
    .post(function (req, res) {
    var _a = req.body, id_map = _a.id_map, order = _a.order;
    handle(db_1.db.admin.addMapOrder(id_map, order), res);
});
exports.router.route('/layers')
    .get(function (req, res) {
    handleWithData(db_1.db.layers.getAllLayers(), res);
})
    .put(function (req, res) {
    var _a = req.body, old_name = _a.old_name, new_name = _a.new_name;
    handle(db_1.db.admin.updateLayerName(old_name, new_name), res);
})
    .post(function (req, res) {
    multer(req, res, function (error) {
        if (error)
            return res.status(500).json('No se pudo subir el archivo SHP : ' + error);
        //console.log(req.files);
        var filesExt = req.files;
        filesExt = filesExt.map(function (f) { return path.extname(f.originalname).toLocaleLowerCase(); });
        //console.log(filesExt, 'fffff');
        if (!['.shp', '.shx', '.dbf'].every(function (ext) { return filesExt.includes(ext); })) {
            return Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; })).then(function () { return res.status(500).json({ msg: 'Debe añadir al menos los archivos .shp .shx .dbf' }); })
                .catch(function (err) { return res.status(500).json(err); });
        }
        var shpPath = path.join('./', path.dirname(req.files[0].path), path.basename(req.files[0].path, path.extname(req.files[0].path)) + '.shp');
        var tableName = (req.query.layerName || path.basename(req.files[0].path, path.extname(req.files[0].path))).toLowerCase();
        //console.log(shpPath, tableName);
        db_1.db.layers.exist(tableName)
            .then(function (exist) {
            if (exist) {
                Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; }));
                return res.status(500).json({ msg: "La tabla " + tableName + " ya existe" });
            }
            db_1.db.layers.importSHP(shpPath, tableName)
                .then(function (table) { return res.status(200).json(table); })
                .catch(function (err) { return res.status(500).json(err); })
                .finally(function () { return Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; })); });
        })
            .catch(function (err) { return Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; })).then(function () { return res.status(500).json(err); }); });
    });
})
    .delete(function (req, res) {
    var tableName = req.body.tableName;
    handle(db_1.db.admin.removeLayer(tableName), res);
});
exports.router.route('/baselayers')
    .get(function (req, res) {
    handleWithData(db_1.db.layers.getAllBaseLayers(), res);
})
    .post(function (req, res) {
    var _a = req.body, service_url = _a.service_url, layers = _a.layers;
    //console.log(req.body);
    if (!service_url)
        return res.status(500).json('Debe introducir una url del servicio');
    if (!layers || !layers.length)
        return res.status(500).json('Debe seleccionar al menos una capa');
    capabilitiesParser.parser(service_url)
        .then(function (layersCap) {
        var service_url_ = service_url.split('?')[0];
        var layers_ = layers.join();
        var layerCapNames = layersCap.map(function (l) { return l['Name']; });
        if (!layersCap || !layersCap.length)
            return res.status(500).json('No es un capabilities válido');
        if (layers.some(function (l) { return !layerCapNames.find(function (lcn) { return lcn === l; }); }))
            return res.status(500).json('El nombre de algunas capas seleccionadas no aparece en el doc de capacidades');
        // Actualizar bdd
        handle(db_1.db.admin.createBaselayer(service_url_, layers_), res);
    });
})
    .delete(function (req, res) {
    var id = req.body.id;
    handle(db_1.db.admin.deleteBaselayer(id), res);
});
exports.router.route('/mail/send')
    .post(function (req, res) {
    var _a = req.body, titulo = _a.titulo, cuerpo = _a.cuerpo, destinatarios = _a.destinatarios;
    console.log(titulo, cuerpo, destinatarios);
    if (!titulo || !cuerpo || !destinatarios)
        return res.status(500).json('Faltan parámetros');
    handle(mailer.sendHTMLMailTo.apply(mailer, [titulo, decodeURIComponent(cuerpo)].concat(destinatarios)), res);
});
function handle(promise, res) {
    promise
        .then(function () { return res.status(200).json({ msg: 'OK' }); })
        .catch(function (err) { return res.status(500).json({ msg: err }); });
}
function handleWithData(promise, res) {
    promise
        .then(function (data) { return res.status(200).json(data); })
        .catch(function (err) { return res.status(500).json({ msg: err }); });
}
