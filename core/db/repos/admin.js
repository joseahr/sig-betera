"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var sql = sqlProvider.admin;
/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
    // Creates the table;
    Repository.prototype.getUsers = function () {
        return this.db.manyOrNone(sql.getUsers);
    };
    return Repository;
}());
exports.Repository = Repository;
