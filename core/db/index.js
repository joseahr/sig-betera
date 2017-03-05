/// <reference path='../../typings/index.d.ts' />
"use strict";
// Bluebird is the best promise library available today, and is the one recommended here:
var promise = require("bluebird");
var users = require("./repos/users");
var admin = require("./repos/admin");
var maps = require("./repos/maps");
var layers = require("./repos/layers");
var raster = require("./repos/raster");
var roles = require("./repos/roles");
// pg-promise initialization options:
var options = {
    // Using a custom promise library, instead of the default ES6 Promise.
    // To make the custom promise protocol visible, you need to patch the
    // following file: node_modules/pg-promise/typescript/ext-promise.d.ts
    promiseLib: promise,
    // Extending the database protocol with our custom repositories:
    extend: function (obj) {
        // Do not use 'require()' here, because this event occurs for every task
        // and transaction being executed, which should be as fast as possible.
        obj.users = new users.Repository(obj, pgp);
        obj.admin = new admin.Repository(obj, pgp);
        obj.maps = new maps.Repository(obj, pgp);
        obj.layers = new layers.Repository(obj, pgp);
        obj.roles = new roles.Repository(obj, pgp);
        obj.raster = new raster.Repository(obj, pgp);
    }
};
// Database connection parameters:
var config = {
    host: 'localhost',
    port: 5432,
    database: 'pg-promise-demo',
    user: 'postgres'
};
// Loading and initializing pg-promise:
var pgPromise = require("pg-promise");
var pgp = pgPromise(options);
// Create the database instance with extensions:
var db = pgp(config);
// Load and initialize optional diagnostics:
var diag = require("./diagnostics");
diag.init(options);
module.exports = db;
