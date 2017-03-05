"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var sql = sqlProvider.roles;
/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
    Repository.prototype.createTable = function () {
        return this.db.none(sql.create);
    };
    Repository.prototype.createEnum = function () {
        return this.db.none(sql.createEnum);
    };
    // Devuelve (id_capa, id_usuario, rol) de las capas 
    // de un Usuario
    Repository.prototype.getLayerNamesByPerms = function (id_user) {
        var perms = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            perms[_i - 1] = arguments[_i];
        }
        return this.db.manyOrNone(sql.getLayerNamesByPerms, {
            id_user: this.pgp.as.value(id_user),
            perms: perms
        });
    };
    // Comprobar si un usuario tiene permisos en una capa 
    Repository.prototype.hasPerms = function (id_user, id_layer) {
        var roles = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            roles[_i - 2] = arguments[_i];
        }
        return this.db.oneOrNone(sql.hasPerm, {
            id_user: this.pgp.as.value(id_user || 0),
            id_layer: this.pgp.as.value(id_layer),
            roles: roles
        }, function (hasPerm) { return hasPerm ? hasPerm.exists : null; });
    };
    // Añade permisos a un usuario en una capa
    Repository.prototype.addPerm = function (id_user, id_layer, rol) {
        return this.db.none(sql.addPerm, {
            values_: [id_user, id_layer, rol]
        });
    };
    // Actualizar un permiso de usuario
    Repository.prototype.updatePerm = function (id_user, id_layer, rol) {
        return this.db.none(sql.updatePerm, {
            id_user: this.pgp.as.value(id_user),
            id_layer: this.pgp.as.value(id_layer),
            rol: this.pgp.as.value(rol)
        });
    };
    // Obtener el rol de un usuario en una capa
    Repository.prototype.getRol = function (id_user, id_layer) {
        return this.db.oneOrNone(sql.getRol, {
            id_user: this.pgp.as.value(id_user || 0),
            id_layer: this.pgp.as.value(id_layer)
        }, function (rol) { return rol ? rol.rol : undefined; });
    };
    return Repository;
}());
exports.Repository = Repository;
