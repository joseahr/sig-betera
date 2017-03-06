"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../core/db");
var mailer = require("../core/mailer");
var capabilitiesParser = require("../core/capabilities-parser");
var path = require("path");
var Multer = require("../core/multer");
var multer = Multer.createMulter(Multer.TEMP_DIR_SHP, Multer.fileNameSHP, 50 * 1024 * 1024).array('shps[]', 3); // .shp .dbf .shx;
exports.router = express.Router();
exports.router.use(function (req, res, next) {
    if (!req.isAuthenticated())
        return res.status(406).json('Permiso denegado');
    if (req.user.rol != 'admin')
        return res.status(406).json('Permiso denegado');
    next();
});
exports.router.get('/', function (req, res) {
    Promise.all([
        db_1.db.layers.getAllLayers(),
        db_1.db.layers.getAllBaseLayers(),
        db_1.db.admin.getUsers(),
        db_1.db.maps.getAllMaps(),
        db_1.db.maps.getDefaultMaps(),
        db_1.db.users.getAllGroups()
    ])
        .then(function (result) {
        console.log(result);
        res.json({
            allLayers: result[0],
            allBaseLayers: result[1],
            allUsers: result[2],
            allMaps: result[3],
            allDefaultMaps: result[4],
            allGroups: result[5]
        });
    });
});
/**************************
 * AÑADIR / ELIMINAR UN MAPA
 *  A UN USUARIO
 **************************/
exports.router.route('/user/map')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['id_user', 'id_map'], { table: 'user_maps' });
    // input values:
    var values = [{ id_user: req.body.id_user, id_map: req.body.id_map }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error'); });
})
    .delete(function (req, res) {
    var query = 'DELETE FROM user_maps WHERE id_user = ${id_user} AND id_map = ${id_map}';
    db_1.db.query(query, {
        id_user: db_1.pgp.as.value(req.body.id_user),
        id_map: db_1.pgp.as.value(req.body.id_map)
    })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error'); });
});
/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  ROL DE UN USUARIO SOBRE UNA CAPA
 **************************/
exports.router.route('/user/rol')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['id_user', 'id_layer', { name: 'rol', cast: 'public.roles_enum' }], { table: 'roles' });
    var _a = req.body, id_user = _a.id_user, id_layer = _a.id_layer, rol = _a.rol;
    if (!id_user || !id_layer || !rol)
        return res.status(404).json('Error : Faltan parámetros');
    // input values:
    var values = [{ id_user: +id_user, id_layer: +id_layer, rol: rol }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .put(function (req, res) {
    // performance-optimized, reusable set of columns:
    var _a = req.body, id_user = _a.id_user, id_layer = _a.id_layer, rol = _a.rol;
    if (!id_user || !id_layer || !rol)
        return res.status(404).json('Error : Faltan parámetros');
    var cs = new db_1.pgp.helpers.ColumnSet([{ name: 'rol', cast: 'public.roles_enum' }]);
    //console.log({ id_layer : +id_layer, id_user : +id_user, rol });
    // input values:
    var values = [{ rol: rol }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.update(values, cs, 'roles', { tableAlias: 'r' }) + ' WHERE r.id_layer = ${id_layer} AND r.id_user = ${id_user}';
    db_1.db.query(query, { id_layer: db_1.pgp.as.value(+id_layer), id_user: db_1.pgp.as.value(+id_user) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM roles WHERE id_user = ${id_user} AND id_layer = ${id_layer}', {
        id_user: db_1.pgp.as.value(req.body.id_user),
        id_layer: db_1.pgp.as.value(req.body.id_layer)
    })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error'); });
});
/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  GRUPO DE UN USUARIO
 **************************/
exports.router.route('/user/group')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['id_user', 'group'], { table: 'user_groups' });
    var _a = req.body, id_user = _a.id_user, group = _a.group;
    if (!id_user || !group)
        return res.status(404).json('Error : Faltan parámetros');
    // input values:
    var values = [{ id_user: +id_user, group: group }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM user_groups WHERE "id_user" = ${id_user} AND "group" = ${group}', { id_user: db_1.pgp.as.value(+req.body.id_user), group: db_1.pgp.as.value(req.body.group) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
});
/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  UN NUEVO GRUPO DE USUARIOS
 **************************/
exports.router.route('/groups')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['name'], { table: 'groups' });
    // input values:
    //console.log(req.body);
    var values = [req.body];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error'); });
})
    .put(function (req, res) {
    var _a = req.body, name = _a.name, new_name = _a.new_name;
    if (!name || !new_name)
        return res.status(404).json('Error : Faltan parámetros');
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['name']);
    // input values:
    var values = [{ name: new_name }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.update(values, cs, 'groups', { tableAlias: 'g' }) + ' WHERE g.name = ${name}';
    db_1.db.query(query, { name: db_1.pgp.as.value(name) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM groups WHERE name = ${group}', { group: db_1.pgp.as.value(req.body.name) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error'); });
});
exports.router.route('/maps')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['name'], { table: 'maps' });
    // input values:
    //console.log(req.body);
    var values = [{ name: req.body.name }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs) + ' RETURNING *';
    db_1.db.query(query)
        .then(function (result) { return res.status(200).json(result); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM maps WHERE id = ${id_map}', { id_map: db_1.pgp.as.value(req.body.id_map) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
});
exports.router.route('/maps/defaults')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['id'], { table: 'default_maps' });
    // input values:
    //console.log(req.body);
    var values = [{ id: req.body.id_map }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function (result) { return res.status(200).json(result); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM default_maps WHERE id = ${id_map}', { id_map: db_1.pgp.as.value(req.body.id_map) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
});
exports.router.route('/maps/layers')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['id_map', 'id_layer'], { table: 'map_layers' });
    // input values:
    //console.log(req.body);
    var values = [{ id_map: req.body.id_map, id_layer: req.body.id_layer }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function (result) { return res.status(200).json(result); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM map_layers WHERE id_map = ${id_map} AND id_layer = ${id_layer}', { id_map: db_1.pgp.as.value(req.body.id_map), id_layer: db_1.pgp.as.value(req.body.id_layer) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
});
exports.router.route('/maps/baselayers')
    .post(function (req, res) {
    // performance-optimized, reusable set of columns:
    var cs = new db_1.pgp.helpers.ColumnSet(['id_map', 'id_base_layer'], { table: 'map_base_layers' });
    // input values:
    //console.log(req.body);
    var values = [{ id_map: req.body.id_map, id_base_layer: req.body.id_layer }];
    // generating a multi-row insert query:
    var query = db_1.pgp.helpers.insert(values, cs);
    db_1.db.query(query)
        .then(function (result) { return res.status(200).json(result); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
})
    .delete(function (req, res) {
    db_1.db.query('DELETE FROM map_base_layers WHERE id_map = ${id_map} AND id_base_layer = ${id_layer}', { id_map: db_1.pgp.as.value(req.body.id_map), id_layer: db_1.pgp.as.value(req.body.id_layer) })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error' + err); });
});
exports.router.route('/maps/order')
    .post(function (req, res) {
    db_1.db.query('DELETE FROM map_layers_order WHERE id_map = ${id_map}', { id_map: db_1.pgp.as.value(req.body.id_map) })
        .then(function () {
        // Orden eliminado
        // performance-optimized, reusable set of columns:
        var cs = new db_1.pgp.helpers.ColumnSet(['id_map', 'id_layer', 'layer_type', 'position'], { table: 'map_layers_order' });
        // input values:
        //console.log(req.body);
        var values = JSON.parse(req.body.order);
        console.log('valuees', values);
        // generating a multi-row insert query:
        var query = db_1.pgp.helpers.insert(values, cs);
        db_1.db.query(query)
            .then(function (result) { return res.status(200).json(result); });
    })
        .catch(function (err) { return res.status(500).json('Error' + err); });
});
exports.router.route('/layers')
    .post(function (req, res) {
    console.log(req.query.layerName);
    multer(req, res, function (error) {
        if (error)
            return res.status(500).json('No se pudo subir el archivo SHP : ' + error);
        console.log(req.files);
        var reqFiles = req.files;
        var filesExt = req.files.map(function (f) { return path.extname(f.originalname); });
        if (!['.shp', '.shx', '.dbf'].every(function (ext) { return filesExt.find(function (fext) { return fext === ext; }); })) {
            return Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; })).then(function () { return res.status(500).json('Debe añadir al menos los archivos .shp .shx .dbf'); })
                .catch(function (err) { return res.status(500).json(err); });
        }
        var shpPath = path.join('./', path.dirname(req.files[0].path), path.basename(req.files[0].path, path.extname(req.files[0].path)) + '.shp');
        var tableName = req.query.layerName || path.basename(req.files[0].path, path.extname(req.files[0].path));
        console.log(shpPath, tableName);
        db_1.db.layers.exist(tableName)
            .then(function (exist) {
            if (exist) {
                Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; }));
                return res.status(500).json("La tabla " + tableName + " ya existe");
            }
            db_1.db.layers.importSHP(shpPath, tableName)
                .then(function () { return db_1.db.one("SELECT * FROM Layers WHERE name = '${tableName#}'", { tableName: tableName }); })
                .then(function (table) { return res.status(200).json(table); })
                .catch(function (err) { return res.status(500).json(err); })
                .finally(function () { return Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; })); });
        })
            .catch(function (err) { return Multer.removeFiles.apply(Multer, req.files.map(function (f) { return f.path; })).then(function () { return res.status(500).json(err); }); });
    });
})
    .delete(function (req, res) {
    var tableName = req.body.tableName;
    console.log(req.body.tableName);
    db_1.db.none('DROP TABLE IF EXISTS "capas".${tableName~} CASCADE', { tableName: tableName })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json(err); });
});
exports.router.route('/baselayers')
    .post(function (req, res) {
    var _a = req.body, service_url = _a.service_url, layers = _a.layers;
    console.log(req.body);
    if (!service_url)
        return res.status(500).json('Debe introducir una url del servicio');
    if (!layers || !layers.length)
        return res.status(500).json('Debe seleccionar al menos una capa');
    capabilitiesParser.parse(service_url)
        .then(function (layersCap) {
        if (!layersCap || !layersCap.length)
            return res.status(500).json('No es un capabilities válido');
        var layerCapNames = layersCap.map(function (l) { return l['Name']; });
        if (layers.some(function (l) { return !layerCapNames.find(function (lcn) { return lcn === l; }); }))
            return res.status(500).json('El nombre de algunas capas seleccionadas no aparece en el doc de capacidades');
        // Actualizar bdd
        db_1.db.one("INSERT INTO base_layers(service_url, name) VALUES('${service_url#}', '${layers#}') RETURNING *", { service_url: service_url.split('?')[0], layers: layers.join() })
            .then(function (baseLayer) { return res.status(200).json(baseLayer); })
            .catch(function (err) { return res.status(500).json(err); });
    });
})
    .delete(function (req, res) {
    var id = req.body.id;
    db_1.db.none("DELETE FROM base_layers WHERE id = '${id#}'", { id: id })
        .then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json(err); });
});
exports.router.route('/mail/send')
    .post(function (req, res) {
    var _a = req.body, titulo = _a.titulo, cuerpo = _a.cuerpo, destinatarios = _a.destinatarios;
    destinatarios = JSON.parse(destinatarios);
    if (!titulo || !cuerpo || !destinatarios)
        return res.status(500).json('Faltan parámetros');
    mailer.sendTextMailTo.apply(mailer, [titulo, cuerpo].concat(destinatarios)).then(function () { return res.status(200).json('OK'); })
        .catch(function (err) { return res.status(500).json('Error'); });
});
