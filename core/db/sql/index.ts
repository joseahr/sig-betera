import {QueryFile, TQueryFileOptions} from 'pg-promise';
var path = require('path');

///////////////////////////////////////////////////////////////////////////////////////////////
// Criteria for deciding whether to place a particular query into an external SQL file or to
// keep it in-line (hard-coded):
//
// - Size / complexity of the query, because having it in a separate file will let you develop
//   the query and see the immediate updates without having to restart your application.
//
// - The necessity to document your query, and possibly keeping its multiple versions commented
//   out in the query file.
//
// In fact, the only reason one might want to keep a query in-line within the code is to be able
// to easily see the relation between the query logic and its formatting parameters. However, this
// is very easy to overcome by using only Named Parameters for your query formatting.
////////////////////////////////////////////////////////////////////////////////////////////////

export = {
    users: {
        create: sql('users/create.sql'),
        empty: sql('users/empty.sql'),
        init: sql('users/init.sql'),
        drop: sql('users/drop.sql'),
        add: sql('users/add.sql'),
        createCitextExtension: sql('users/extension_citext.sql'),
        createRolesEnum : sql('users/user-roles-enum.sql'),
        findBy: sql('users/find_by.sql'),
        getAllGroups : sql('users/get-all-groups.sql'),
        isValid : sql('users/is-valid.sql'),
        findIdByToken : sql('users/find-by-validate-token.sql'),
        createForgetToken : sql('users/create-forget-token.sql')
    },
    raster : {
        perfil : sql('raster/perfil.sql')
    },
    layers : {
        create : sql('layers/create.sql'),
        schema : sql('layers/info-schema.sql'),
        getLayerAsGeoJSON : sql('layers/as-geojson.sql'),
        getLayerGeometryType : sql('layers/geometry-type.sql'),
        findBy: sql('layers/find-by.sql'),
        getLayerNames : sql('layers/layer-names.sql'),
        getBaseLayer : sql('layers/base-layer.sql'),
        getAllLayers : sql('layers/get-all-layers.sql'),
        getAllBaseLayers : sql('layers/get-all-base-layers.sql'),
        getFeaturesIntersecting : sql('layers/get-features-intersecting.sql')
    },
    roles : {
        create : sql('roles/create.sql'),
        createEnum : sql('roles/type-enum.sql'),
        getLayerNamesByPerms : sql('roles/user-layers.sql'),
        hasPerm : sql('roles/has-perm.sql'),
        addPerm : sql('roles/add-perm.sql'),
        updatePerm : sql('roles/update-perm.sql'),
        getRol : sql('roles/get-rol.sql')
    },
    maps : {
        createMapsTable : sql('maps/create.sql'),
        createMapsUsersTable : sql('maps/create-users-fk-table.sql'),
        createMapsLayersTable : sql('maps/create-layers-fk-table.sql'),
        createDefaultMapsTable : sql('maps/create-default-maps-fk-table.sql'),
        hasMap : sql('maps/has-map.sql'),
        getMaps : sql('maps/user-maps.sql'),
        getDefaultMaps : sql('maps/get-default-maps.sql'),
        getMapNames : sql('maps/map-names.sql'),
        getLayers : sql('maps/get-layers.sql'),
        getBaseLayers : sql('maps/get-base-layers.sql'),
        getAllMaps : sql('maps/get-all-maps.sql')
    },
    admin : {
        getUsers : sql('admin/users-admin.sql')
    }
};

///////////////////////////////////////////////
// Helper for linking to external query files;
function sql(file: string): QueryFile {

    var fullPath: string = path.join(__dirname, file); // generating full path;

    var options: TQueryFileOptions = {

        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true,

        // Showing how to use static pre-formatting parameters -
        // we have variable 'schema' in each SQL (as an example);
        params: {
            schema: 'public' // replace ${schema~} with "public"
        }
    };

    var qf: QueryFile = new QueryFile(fullPath, options);

    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }

    return qf;

    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}

//////////////////////////////////////////////////////////////////////////
// Consider an alternative - enumerating all SQL files automatically ;)
// API: http://vitaly-t.github.io/pg-promise/utils.html#.enumSql
/*
// generating a recursive SQL tree for dynamic use of camelized names:
import {utils} from 'pg-promise';

export = utils.enumSql(__dirname, {recursive: true}, file => {
    // NOTE: 'file' contains the full path to the SQL file, as we use __dirname for enumeration.
    return new QueryFile(file, {
        minify: true,
        params: {
            schema: 'public' // replace ${schema~} with "public"
        }
    });
});
*/
