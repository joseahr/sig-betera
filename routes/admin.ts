import * as express from 'express';
import { db, pgp } from '../core/db';
import * as mailer from '../core/mailer';
import * as recaptcha from '../core/recaptcha';
import * as capabilitiesParser from '../core/capabilities-parser';
import * as fs from 'fs';
import * as path from 'path';
import * as Multer from '../core/multer';
const multer = Multer.createMulter(Multer.TEMP_DIR_SHP, Multer.fileNameSHP, 50*1024*1024).array('shps[]', 3) // .shp .dbf .shx;

export let router = express.Router();

router.use( (req, res, next)=>{
    if(!req.isAuthenticated())
        return res.status(406).json('Permiso denegado');
    if(req.user.rol != 'admin')
        return res.status(406).json('Permiso denegado');
    next();
});

router.get('/layers', (req, res)=>{
    db.layers.getAllLayers()
    .then(layers => res.status(200).json(layers))
    .catch( err => res.status(500).json(err));
});

router.get('/baselayers', (req, res)=>{
    return db.layers.getAllBaseLayers()
    .then( baselayers => res.status(200).json(baselayers))
    .catch( err => res.status(500).json(err));
});

router.get('/users', (req, res)=>{
    return db.admin.getUsers()
    .then( users => res.status(200).json({ data : users }) )
    .catch( err => res.status(500).json(err));
});

router.get('/users/:id', (req, res)=>{
    let id = req.params.id;
    return db.admin.getUserDetail(id)
    .then( user => res.status(200).json(user) )
    .catch( err => res.status(500).json(err));
});

router.get('/maps', (req, res)=>{
    return db.maps.getAllMaps();
});

router.get('/default-maps', (req, res)=>{
    return db.maps.getDefaultMaps();
});

router.get('/groups', (req, res)=>{
    return db.users.getAllGroups();
});

/**************************
 * AÑADIR / ELIMINAR UN MAPA
 *  A UN USUARIO
 **************************/
router.route('/user/map')
.post( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['id_user', 'id_map'], {table: 'user_maps'});

    // input values:
    let values = [{id_user: req.body.id_user, id_map: req.body.id_map}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);
    
    db.query(query)
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error') );
})
.delete( (req, res)=>{
    let query = 'DELETE FROM user_maps WHERE id_user = ${id_user} AND id_map = ${id_map}';

    db.query(query, {
        id_user : pgp.as.value(req.body.id_user),
        id_map : pgp.as.value(req.body.id_map)
    })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error') );
});

/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  ROL DE UN USUARIO SOBRE UNA CAPA
 **************************/
router.route('/user/rol')
.post( (req, res)=>{
     // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['id_user', 'id_layer', { name : 'rol', cast : 'public.roles_enum'}], {table: 'roles'});
    let { id_user, id_layer, rol } = req.body;
    if(!id_user || !id_layer || !rol) return res.status(404).json('Error : Faltan parámetros');
    // input values:
    let values = [{id_user: +id_user, id_layer: +id_layer, rol}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);
    
    db.query(query)
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );   
})
.put( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let { id_user, id_layer, rol } = req.body;
    if(!id_user || !id_layer || !rol) return res.status(404).json('Error : Faltan parámetros');
    let cs = new pgp.helpers.ColumnSet([{ name : 'rol', cast : 'public.roles_enum' }]);
    //console.log({ id_layer : +id_layer, id_user : +id_user, rol });
    // input values:
    let values = [{ rol }];

    // generating a multi-row insert query:
    let query = pgp.helpers.update(values, cs, 'roles', { tableAlias : 'r' }) + ' WHERE r.id_layer = ${id_layer} AND r.id_user = ${id_user}' ;
    
    db.query(query, { id_layer : pgp.as.value(+id_layer), id_user : pgp.as.value(+id_user) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
})
.delete( (req, res)=>{
    db.query('DELETE FROM roles WHERE id_user = ${id_user} AND id_layer = ${id_layer}', { 
        id_user : pgp.as.value(req.body.id_user),
        id_layer : pgp.as.value(req.body.id_layer) 
    })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error') );
});

/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  GRUPO DE UN USUARIO
 **************************/
router.route('/user/group')
.post( (req, res)=>{
     // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['id_user', 'group'], {table: 'user_groups'});
    let { id_user, group } = req.body;
    if(!id_user || !group) return res.status(404).json('Error : Faltan parámetros');
    // input values:
    let values = [{id_user: +id_user, group}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);
    
    db.query(query)
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );   
})
.delete( (req, res)=>{
    db.query('DELETE FROM user_groups WHERE "id_user" = ${id_user} AND "group" = ${group}', 
        { id_user : pgp.as.value(+req.body.id_user), group : pgp.as.value(req.body.group) }
    )
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
});

/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  UN NUEVO GRUPO DE USUARIOS
 **************************/
router.route('/groups')
.post( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['name'], {table: 'groups'});

    // input values:
    //console.log(req.body);
    let values = [req.body];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);

    db.query(query)
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error') );  
})
.put( (req, res)=>{
    let { name, new_name } = req.body;
    if(!name || !new_name) return res.status(404).json('Error : Faltan parámetros');
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['name']);

    // input values:
    let values = [{ name : new_name }];

    // generating a multi-row insert query:
    let query = pgp.helpers.update(values, cs, 'groups', { tableAlias : 'g'}) + ' WHERE g.name = ${name}';
    
    db.query(query, { name : pgp.as.value(name) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
})
.delete( (req, res)=>{
    db.query('DELETE FROM groups WHERE name = ${group}', { group : pgp.as.value(req.body.name) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error') );
});




router.route('/maps')
.post( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['name'], {table: 'maps'});

    // input values:
    //console.log(req.body);
    let values = [{name : req.body.name}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs) + ' RETURNING *';

    db.query(query)
    .then( ( result : any ) => res.status(200).json(result) )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
})
.delete( (req, res)=>{
    db.query('DELETE FROM maps WHERE id = ${id_map}', { id_map : pgp.as.value(req.body.id_map) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) ); 
});


router.route('/maps/defaults')
.post( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['id'], {table: 'default_maps'});

    // input values:
    //console.log(req.body);
    let values = [{id : req.body.id_map}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);

    db.query(query)
    .then( ( result : any ) => res.status(200).json(result) )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
})
.delete( (req, res)=>{
    db.query('DELETE FROM default_maps WHERE id = ${id_map}', { id_map : pgp.as.value(req.body.id_map) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );    
});

router.route('/maps/layers')
.post( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['id_map', 'id_layer'], {table: 'map_layers'});

    // input values:
    //console.log(req.body);
    let values = [{id_map : req.body.id_map, id_layer : req.body.id_layer}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);

    db.query(query)
    .then( ( result : any ) => res.status(200).json(result) )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
})
.delete( (req, res)=>{
    db.query('DELETE FROM map_layers WHERE id_map = ${id_map} AND id_layer = ${id_layer}', 
        { id_map : pgp.as.value(req.body.id_map), id_layer : pgp.as.value(req.body.id_layer) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );  
});

router.route('/maps/baselayers')
.post( (req, res)=>{
    // performance-optimized, reusable set of columns:
    let cs = new pgp.helpers.ColumnSet(['id_map', 'id_base_layer'], {table: 'map_base_layers'});

    // input values:
    //console.log(req.body);
    let values = [{id_map : req.body.id_map, id_base_layer : req.body.id_layer}];

    // generating a multi-row insert query:
    let query = pgp.helpers.insert(values, cs);

    db.query(query)
    .then( ( result : any ) => res.status(200).json(result) )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
})
.delete( (req, res)=>{
    db.query('DELETE FROM map_base_layers WHERE id_map = ${id_map} AND id_base_layer = ${id_layer}', 
        { id_map : pgp.as.value(req.body.id_map), id_layer : pgp.as.value(req.body.id_layer) })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json('Error' + err) );     
});

router.route('/maps/order')
.post( (req, res)=>{
    db.query('DELETE FROM map_layers_order WHERE id_map = ${id_map}', { id_map : pgp.as.value(req.body.id_map) })
    .then( ()=>{
        // Orden eliminado
        // performance-optimized, reusable set of columns:
        let cs = new pgp.helpers.ColumnSet(['id_map', 'id_layer', 'layer_type', 'position'], {table: 'map_layers_order'});

        // input values:
        //console.log(req.body);
        let values = JSON.parse(req.body.order);
        console.log('valuees', values);
        // generating a multi-row insert query:
        let query = pgp.helpers.insert(values, cs);

        db.query(query)
        .then( ( result : any ) => res.status(200).json(result) )
    })
    .catch( ( err : any ) => res.status(500).json('Error' + err) );
});


router.route('/layers')
.post( (req, res)=>{
    console.log(req.query.layerName);
    multer(req, res, error =>{
        if(error) return res.status(500).json('No se pudo subir el archivo SHP : ' + error);
        console.log(req.files);
        let reqFiles = req.files;
        let filesExt = req.files.map( f => path.extname(f.originalname) );

        if( !['.shp', '.shx', '.dbf'].every( ext => filesExt.find( fext => fext === ext) ) ){
            return Multer.removeFiles(...req.files.map( f => f.path ) )
            .then( ()=> res.status(500).json('Debe añadir al menos los archivos .shp .shx .dbf') )
            .catch( ( err : any ) => res.status(500).json(err) )
        }

        let shpPath = path.join(
                './'
            , path.dirname(req.files[0].path)
            , path.basename( req.files[0].path, path.extname(req.files[0].path) ) + '.shp'
        );

        let tableName =req.query.layerName || path.basename( req.files[0].path, path.extname(req.files[0].path) );

        console.log(shpPath, tableName);
        db.layers.exist(tableName)
        .then( ( exist : Boolean ) =>{
            if(exist) {
                Multer.removeFiles(...req.files.map( f => f.path ) )
                return res.status(500).json(`La tabla ${tableName} ya existe`);
            }

            db.layers.importSHP(shpPath, tableName)
            .then( ()=> db.one("SELECT * FROM Layers WHERE name = '${tableName#}'", { tableName }) )
            .then( ( table : any ) => res.status(200).json(table))
            .catch( ( err : any ) => res.status(500).json(err))
            .finally( ()=> Multer.removeFiles(...req.files.map( f => f.path ) ) );
        })
        .catch( ( err : any ) => Multer.removeFiles(...req.files.map( f => f.path ) ).then( ()=> res.status(500).json(err) ) );
    });
})
.delete( (req, res)=>{
    let tableName = req.body.tableName;
    console.log(req.body.tableName);
    db.none('DROP TABLE IF EXISTS "capas".${tableName~} CASCADE', { tableName })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json(err) );  
});

router.route('/baselayers')
.post( (req, res)=>{
    let { service_url, layers } = req.body;
    console.log(req.body);
    if(!service_url) return res.status(500).json('Debe introducir una url del servicio');
    if (!layers || !layers.length) return res.status(500).json('Debe seleccionar al menos una capa');

    capabilitiesParser.parse(service_url)
    .then( ( layersCap : any ) =>{
        if (!layersCap || !layersCap.length) return res.status(500).json('No es un capabilities válido');
        let layerCapNames = layersCap.map( l => l['Name'] );
        if( layers.some( ( l : any ) => !layerCapNames.find( ( lcn : any ) => lcn === l) ) ) 
            return res.status(500).json('El nombre de algunas capas seleccionadas no aparece en el doc de capacidades');
        // Actualizar bdd
        db.one("INSERT INTO base_layers(service_url, name) VALUES('${service_url#}', '${layers#}') RETURNING *", 
            { service_url : service_url.split('?')[0], layers : layers.join() })
        .then( ( baseLayer : any ) => res.status(200).json(baseLayer) )
        .catch( ( err : any ) => res.status(500).json(err) );
    })
})
.delete( (req, res)=>{
    let id = req.body.id;
    db.none("DELETE FROM base_layers WHERE id = '${id#}'", { id })
    .then( ()=> res.status(200).json('OK') )
    .catch( ( err : any ) => res.status(500).json(err) );  
});



router.route('/mail/send')
.post( (req, res)=>{
    let { titulo, cuerpo, destinatarios } = req.body;
    destinatarios = JSON.parse(destinatarios);
    if(!titulo || !cuerpo || !destinatarios) return res.status(500).json('Faltan parámetros');
    mailer.sendTextMailTo(titulo, cuerpo, ...destinatarios)
    .then( ()=> res.status(200).json('OK'))
    .catch(err => res.status(500).json('Error'));
});
