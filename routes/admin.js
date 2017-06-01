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
    // /rest/usergroup/[service/<serviceName>/]group/<group>
    /*let opts = {
        method : 'POST', uri : `http://localhost:8080/geoserver/rest/usergroup/default/group/${name}`,
        headers : { Authorization : 'Basic ' + btoa('admin:geoserver') }
    }
    
    let promise = db.admin.createGroup(name).then( ()=> request(opts) );*/
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
    .get(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var promises;
    return __generator(this, function (_a) {
        promises = Promise.all([db_1.db.layers.getAllLayers(), db_1.db.layers.getPublishedLayers()])
            .then(function (_a) {
            var layers = _a[0], publishedLayers = _a[1];
            //console.log(layers, 'aaaaa', publishedLayers);
            var publishedNames;
            try {
                publishedNames = JSON.parse(publishedLayers).layers.layer.map(function (l) { return l.name; });
            }
            catch (e) {
                publishedNames = [];
            }
            return (layers || []).map(function (layer) {
                return Object.assign(layer, { published: publishedNames.includes(layer.name) });
            });
        });
        handleWithData(promises, res);
        return [2 /*return*/];
    });
}); })
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
exports.router
    .route('/layers/geoserver/:name')
    .get(function (req, res) {
    var name = req.params.name;
    if (!req.params.name)
        return handle(Promise.reject('No se ha proporcionado id de la capa a publicar'), res);
    var promise = db_1.db.layers.publishLayerInGeoserver(name);
    handleWithData(promise, res);
})
    .delete(function (req, res) {
    var name = req.params.name;
    if (!req.params.name)
        return handle(Promise.reject('No se ha proporcionado id de la capa a publicar'), res);
    var promise = db_1.db.layers.unpublishLayerInGeoserver(name);
    handleWithData(promise, res);
});
exports.router.route('/baselayers')
    .get(function (req, res) {
    handleWithData(db_1.db.layers.getAllBaseLayers(), res);
})
    .post(function (req, res) {
    var _a = req.body, baselayer_name = _a.baselayer_name, service_url = _a.service_url, layers = _a.layers;
    //console.log(req.body);
    if (!service_url)
        return res.status(500).json('Debe introducir una url del servicio');
    if (!layers || !layers.length)
        return res.status(500).json('Debe seleccionar al menos una capa');
    var regex = /(\?|\&)([^=]+)\=([^&]+)/g;
    var extract = (service_url.match(regex) || []).join('');
    var serviceURL = service_url.replace(extract, '') + '?service=WMS&request=GetCapabilities';
    //console.log(serviceURL);
    capabilitiesParser.parser(serviceURL)
        .then(function (layersCap) {
        var service_url_ = service_url.split('?')[0];
        var layers_ = layers.join();
        var layerCapNames = layersCap.map(function (l) { return l['Name']; });
        if (!layersCap || !layersCap.length)
            return res.status(500).json('No es un capabilities válido');
        if (layers.some(function (l) { return !layerCapNames.find(function (lcn) { return lcn === l; }); }))
            return res.status(500).json('El nombre de algunas capas seleccionadas no aparece en el doc de capacidades');
        // Actualizar bdd
        handle(db_1.db.admin.createBaselayer(baselayer_name, service_url_, layers_), res);
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
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    7;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, promise];
                case 2:
                    _a.sent();
                    res.status(200).json({ msg: 'OK' });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    res.status(500).json({ msg: err_1 });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleWithData(promise, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promise];
                case 1:
                    data = _a.sent();
                    res.status(200).json(data);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    res.status(500).json({ msg: err_2 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
