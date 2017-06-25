"use strict";
/// <reference path='../../typings/index.d.ts' />
Object.defineProperty(exports, "__esModule", { value: true });
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
    // Capitalize all generated SQL:
    capSQL: true,
    // Extending the database protocol with our custom repositories:
    extend: function (obj) {
        // Do not use 'require()' here, because this event occurs for every task
        // and transaction being executed, which should be as fast as possible.
        obj.users = new users.Repository(obj, exports.pgp);
        obj.admin = new admin.Repository(obj, exports.pgp);
        obj.maps = new maps.Repository(obj, exports.pgp);
        obj.layers = new layers.Repository(obj, exports.pgp);
        obj.roles = new roles.Repository(obj, exports.pgp);
        obj.raster = new raster.Repository(obj, exports.pgp);
    }
};
// Database connection parameters:
var config_1 = require("../config");
/*var config = {
    host: 'localhost',
    port: 5432,
    database: 'pg-promise-demo',
    user: 'postgres'
};*/
// Loading and initializing pg-promise:
var pgPromise = require("pg-promise");
exports.pgp = pgPromise(options);
// Create the database instance with extensions:
exports.db = exports.pgp(config_1.dbConfig);
// Load and initialize optional diagnostics:
var diag = require("./diagnostics");
diag.init(options);
// If you ever need to change the default pool size, here's an example:
// pgp.pg.defaults.poolSize = 20;
// Database object is all that's needed.
// And if you even need access to the library's root (pgp object),
// you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config
