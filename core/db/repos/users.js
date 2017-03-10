"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var bluebird = require("bluebird");
var bcrypt = require("bcrypt-nodejs");
var compare = bluebird.promisify(bcrypt.compare);
var hash = bluebird.promisify(bcrypt.hash);
var genSalt = bluebird.promisify(bcrypt.genSalt);
var sql = sqlProvider.users;
/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
    Repository.prototype.setVisibleMap = function (id_user, id_map) {
        return this.db.none("UPDATE User_Maps SET visible = true WHERE id_map = '${id_map#}' AND id_user = '${id_user#}'", { id_user: id_user, id_map: id_map });
    };
    Repository.prototype.deleteForgetToken = function (id_user) {
        return this.db.none("DELETE FROM users_change_password_token WHERE id = '${id_user#}'", { id_user: id_user });
    };
    Repository.prototype.createForgetToken = function (id_user) {
        return this.db.one(sql.createForgetToken, { id_user: id_user });
    };
    Repository.prototype.findIdByToken = function (token) {
        return this.db.oneOrNone(sql.findIdByToken, { token: this.pgp.as.value(token) });
    };
    Repository.prototype.isValid = function (id) {
        return this.db.one(sql.isValid, { id_user: this.pgp.as.value(id) })
            .then(function (isValid) { return isValid.valid; });
    };
    Repository.prototype.getAllGroups = function () {
        return this.db.one(sql.getAllGroups)
            .then(function (allGroups) { return allGroups.groups; });
    };
    Repository.prototype.validPassword = function (user, password) {
        return compare(password, user.password);
    };
    Repository.prototype.genPassword = function (password) {
        return hash(password, null, null);
    };
    Repository.prototype.findBy = function (column, value) {
        return this.db.any(sql.findBy, {
            column: this.pgp.as.name(column),
            value: this.pgp.as.value(value)
        });
    };
    // Crear el enum de roles
    Repository.prototype.createRolesEnum = function () {
        return this.db.none(sql.createRolesEnum);
    };
    // Creates the table;
    Repository.prototype.create = function () {
        return this.db.none(sql.create);
    };
    // Crea la extensión "citext"(Case Insensitive text) para poder utilizar este tipo de dato en la columna e-mail
    // http://dba.stackexchange.com/a/74313
    Repository.prototype.createCitextExtension = function () {
        return this.db.none(sql.createCitextExtension);
    };
    Repository.prototype.init = function () {
        return this.db.tx('Demo-Users', function (t) { return t.map(sql.init, null, function (row) { return row.id; }); });
    };
    // Tries to find a user from id;
    Repository.prototype.find = function (id) {
        return this.db.oneOrNone('SELECT * FROM Users WHERE id = $1', id);
    };
    // Returns all user records;
    Repository.prototype.all = function () {
        this.db.any('SELECT * FROM Users');
    };
    // Returns the total number of users;
    Repository.prototype.total = function () {
        return this.db.one('SELECT count(*) FROM Users', [], function (a) { return +a.count; });
    };
    return Repository;
}());
exports.Repository = Repository;
