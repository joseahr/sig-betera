/// <reference path='../../typings/index.d.ts' />

// Bluebird is the best promise library available today, and is the one recommended here:
import * as promise from 'bluebird';
import { IMain, IDatabase, IOptions } from 'pg-promise';

import * as users from './repos/users';
import * as admin from './repos/admin';
import * as maps from './repos/maps';
import * as layers from './repos/layers';
import * as raster from './repos/raster';
import * as roles from './repos/roles';

interface IExtensions {
    users : users.Repository,
    admin : admin.Repository,
    maps  : maps.Repository,
    layers : layers.Repository,
    raster : raster.Repository,
    roles  : roles.Repository
}

// pg-promise initialization options:
var options: IOptions<IExtensions> = {

    // Using a custom promise library, instead of the default ES6 Promise.
    // To make the custom promise protocol visible, you need to patch the
    // following file: node_modules/pg-promise/typescript/ext-promise.d.ts
    promiseLib: promise,

    // Extending the database protocol with our custom repositories:
    extend: (obj: IExtensions) => {
        // Do not use 'require()' here, because this event occurs for every task
        // and transaction being executed, which should be as fast as possible.
        obj.users = new users.Repository(obj, pgp);
        obj.admin = new admin.Repository(obj, pgp);
        obj.maps  = new maps.Repository(obj, pgp);
        obj.layers = new layers.Repository(obj, pgp);
        obj.roles  = new roles.Repository(obj, pgp);
        obj.raster = new raster.Repository(obj, pgp);
    }

};

// Database connection parameters:
import { dbConfig as config } from '../config';
/*var config = {
    host: 'localhost',
    port: 5432,
    database: 'pg-promise-demo',
    user: 'postgres'
};*/

// Loading and initializing pg-promise:
import * as pgPromise from 'pg-promise';
export const pgp : IMain = pgPromise(options);

// Create the database instance with extensions:
export const db = <IDatabase<IExtensions>&IExtensions>pgp(config);

// Load and initialize optional diagnostics:
import diag = require('./diagnostics');
diag.init(options);

// If you ever need to change the default pool size, here's an example:
// pgp.pg.defaults.poolSize = 20;

// Database object is all that's needed.
// And if you even need access to the library's root (pgp object),
// you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config