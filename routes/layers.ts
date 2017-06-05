import * as express from 'express';
import { db, pgp } from '../core/db';
import * as capabilitiesParser from '../core/capabilities-parser';
import * as jsts from 'jsts';
import * as path from 'path';
import { createMulter, DIR_DATOS, removeFiles } from '../core/multer';

const ACCEPTED_EXTENSIONS = ['jpg', 'png', 'jpeg', 'gif','pdf', 'doc', 'docx', 'xls', 'xlsx','dxf'].map( ext => '.' + ext );

const multer = createMulter(DIR_DATOS, null, 20*1024*1024).single('file')

const wktReader = new jsts.io.WKTReader();

const insertLayerEdition = (id_usuario : number, capa : string, gid : number, ip : string) => {
    let fields = ['capa', 'gid', 'ip', 'id_usuario'].map( name => ({ name }) );
    let values = { capa , gid, ip, id_usuario };

    let cs = new pgp.helpers.ColumnSet(fields, { table: { table : 'users_layer_editions' } });
    let query = pgp.helpers.insert(values, cs);
    return db.query(query);
}

export let router = express.Router();

const getFeatureDataGuard = () => 
    async (req : express.Request, res : express.Response, next : express.NextFunction) =>{

        let { id } = req.user || { id : null };
        
        let { layerName } = req.params;

        if(!layerName) return res.status(500).json('Debe seleccionar la capa');

        try {
            let maps = await db.maps.getMapsAndLayers(id) || [];
            let layersIcanSee = []
                .concat( ...maps.map( m => m.layers ) )
                .map( l => l.name ); 
            
            if(!layersIcanSee.includes(layerName)){
                return res.status(403).json({ msg : 'No permitido' })
            }

            next();
        } catch(e){
            res.status(500).json({ msg : e })
        }

    }

const getFeaturesGuard = () => 
    async (req : express.Request, res : express.Response, next : express.NextFunction) =>{

        let { id } = req.user || { id : null };
        
        let { layers } = req.body;

        if(!layers || !layers.length) return res.status(500).json('Debe enviar al menos una capa en la que buscar.');

        try {
            let maps = await db.maps.getMapsAndLayers(id) || [];
            let layersIcanSee = []
                .concat( ...maps.map( m => m.layers ) )
                .map( l => l.name ); 

            req.body.layers = layers.filter( l => layersIcanSee.includes(l) )
            console.log(layersIcanSee, layers);
            next();
        } catch(e){
            res.status(500).json({ msg : e })
        }

    }

const rolesGuardMiddleware = ( ...checkPerms : string[] ) => 
    async (req : express.Request, res : express.Response, next : express.NextFunction) =>{
    
        let { id } = req.user;
        let { layerName } = req.params;
    
        let layersWithPerms = (await db.roles.getLayerNamesByPerms(id, ...checkPerms ))
            .map( l => l.name );
        
        if(!layersWithPerms.includes(layerName)){
            return res.status(403).json({ msg : 'No permitido' })
        }
        next();
    }

router
.post('/wms/capabilities', async (req, res)=>{
    let serviceUrl = req.body.service_url;
    //console.log(serviceUrl, req.body);
    if(!serviceUrl) return res.status(500).json('Introduce una url');
    
    try{
        let layers = await capabilitiesParser.parser(serviceUrl);
        if(!layers || !layers.length) return res.status(500).json('No es un capabilities válido');
        res.status(200).json(layers);
    } catch(err){
        res.status(500).json(err)
    }

});

router.get('/schema/:layerName', async (req, res)=>{
    let { layerName } = req.params;
    try {
        let layerSchema = await db.layers.getLayerSchema(layerName);
        let geomColumn  = layerSchema.find( col => col.type === 'USER-DEFINED' && col.udt === 'geometry' ).name;
        let geometryType = await db.layers.getLayerGeometryType(layerName, geomColumn);
        res.status(200).json({ layerSchema, geometryType });
    } catch(e){
        res.status(500).json({ msg : e });
    }
});


router.use( (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }

    return res.status(403).json({ msg : 'Debes estar autenticado' })
});

router.route('/features')
.post( [getFeaturesGuard()], async (req, res)=>{
    let { user } = req;
    let { wkt, layers } = req.body;
    //console.log('byGeom');
    if(!wkt) return res.status(500).json('Debe enviar una extensión, área o punto.');
    //if(typeof req.body.layers === 'string') req.body.layers = req.body.layers.split(',');
    try {
        
        let features = await db.layers.getFeaturesIntersecting(wkt, ...layers);
        res.status(200).json(features)

    } catch(e){
        res.status(500).json('Hubo un error durante la búsqueda.')
    }
});


router.post('/:layerName/data/:gid/upload', [rolesGuardMiddleware('e', 'd')], (req, res) => {
    let { layerName, gid } = req.params;
    let { id } = req.user;

    multer(req, res, async (err) => {
        if(err){
            console.log(err);
            return res.status(500).json({ msg : err });
        }

        let file = req.file;
        let url  = file.path;

        let ext = path.extname(file.originalname).toLowerCase();
        //console.log(file)-
        if(!ACCEPTED_EXTENSIONS.includes(ext)){
            await removeFiles(url);
            return res.status(500).json({ msg : `Extensión "${ext}" no válida. Extensiones aceptadas : ${ACCEPTED_EXTENSIONS.join(',\n')}` }) 
        }

        // Hacer un pequeño arreglo para que la URL apunte a la
        // url de archivos estáticos de Bétera
        // AL IGUAL QUE LA CARPETA DONDE SE GURDE

        let fields = ['capa', 'gid', 'url', 'id_user'].map( name => ({ name }) );
        let values = { capa : layerName, gid, url, id_user : id };

        let cs = new pgp.helpers.ColumnSet(fields, { table: { table : 'datos' } });
        let query = pgp.helpers.insert(values, cs);

        try {
            let data = await db.query(query);
            await insertLayerEdition(req.user.id, layerName, gid, req.ip);
            console.log(data)
            res.status(200).json(data);
        } catch(err){
            res.status(500).json({ msg : err });
        }
    });
} );

router.
route('/:layerName/data/:gid')
.get([getFeatureDataGuard()], async (req, res)=>{
    try {
        let { layerName, gid } = req.params;
        let data = await db.any('SELECT * from datos WHERE capa = $1 and gid = $2', [layerName, gid])
        console.log(data)
        res.status(200).json(data)
    } catch(e){
        res.status(500).json({ msg : e });
    }
})
.post([rolesGuardMiddleware('e', 'd')], async (req, res) =>{
    try {
        let { id } = req.user;
        let { url } = req.body;
        let { layerName, gid } = req.params;

        let fields = ['capa', 'gid', 'url', 'id_user'].map( name => ({ name }) );
        let values = { capa : layerName, gid, url, id_user : id };

        let cs = new pgp.helpers.ColumnSet(fields, { table: { table : 'datos' } });
        let query = pgp.helpers.insert(values, cs);
        let data = await db.query(query);
        await insertLayerEdition(req.user.id, layerName, gid, req.ip);
        console.log(data)
        res.status(200).json(data)
    } catch(e){
        res.status(500).json({ msg : e });
    }
})
.delete([rolesGuardMiddleware('d')], async (req, res) =>{
    try {
        let { id } = req.body;
        let { layerName, gid } = req.params;
        let data = await db.any('DELETE FROM datos WHERE capa = $1 AND gid = $2 and id = $3', [layerName, gid, id])
        await insertLayerEdition(req.user.id, layerName, gid, req.ip);
        console.log(data)
        res.status(200).json(data)
    } catch(e){
        res.status(500).json({ msg : e });
    }
});

router
.route('/:layerName/transaction')
.post( [rolesGuardMiddleware('c', 'e', 'd')], async (req, res)=>{
    try {
    
        let { layerName } = req.params;
        
        let { geometry, properties } = req.body;
    
        console.log(geometry, properties);

        let layerSchema = await db.layers.getLayerSchema(layerName);

        let geomColumn = layerSchema.find( col => col.type === 'USER-DEFINED' && col.udt === 'geometry' ).name;

        let fields : any[] = Object.keys(properties);
        let values : any[] = properties;
        
        console.log(geomColumn, 'geomColumn')
        //fields.push(geomColumn);
        //properties[geomColumn] = 'SRID=25830;' + geometry;
        //let values = fields.map( field => properties[field] );
        if(!geometry){
            return res.status(500).json({ msg : 'Error, debes añadir una geometría' });
        }

        try {
            wktReader.read(geometry);
            fields.push( {
                name : geomColumn,
                cast : 'geometry'
            } );
            values[geomColumn] = 'SRID=25830;' + geometry;
        } catch(e){
            return res.status(500).json({ msg : 'Geometría no válida' })
        }
        console.log(fields, values);
    
        //let layerSchema = await db.layers.getLayerSchema(layerName);
        //console.log(layersWithPerms);
        console.log(layerName);
        let cs = new pgp.helpers.ColumnSet(fields, { table: { table : layerName, schema : 'capas' } });
        let query = pgp.helpers.insert(values, cs) + ' RETURNING gid';
        let { gid } = await db.one(query);
        await insertLayerEdition(req.user.id, layerName, gid, req.ip);
        res.status(200).json({ msg : 'OK', gid : gid });
    } catch(e){
        console.log(e);
        res.status(500).json({ msg : e })
    }
})
.put( [rolesGuardMiddleware('e', 'd')], async(req, res)=>{
    try {    
        let { layerName } = req.params;
        
        let { geometry, properties } = req.body;

        let { gid } = properties;

        delete properties['gid'];
    
        let layerSchema = await db.layers.getLayerSchema(layerName);

        let geomColumn = layerSchema.find( col => col.type === 'USER-DEFINED' && col.udt === 'geometry' ).name;

        let fields : any[] = Object.keys(properties);
        let values = properties;

        console.log(values);
        
        if(geometry){
            try {
                wktReader.read(geometry);
                fields.push( {
                    name : geomColumn,
                    cast : 'geometry'
                } );
                values[geomColumn] = 'SRID=25830;' + geometry;
            } catch(e){
                return res.status(500).json({ msg : 'Geometría no válida'})
            }
        }
        //let layerSchema = await db.layers.getLayerSchema(layerName);
        //console.log(layersWithPerms);
        let cs = new pgp.helpers.ColumnSet(fields, { table: { table : layerName, schema : 'capas' } }) ;
        let query = pgp.helpers.update(values, cs);
        let response = await db.none(query + ' WHERE gid = ${gid}', { gid });
        await insertLayerEdition(req.user.id, layerName, gid, req.ip);
        res.status(200).json({ msg : 'OK' });
    } catch(e){
        console.log(e);
        res.status(500).json({ msg : e })
    }
})
.delete( [rolesGuardMiddleware('d')], async (req, res)=>{
    let { gid } = req.body;
    let { layerName } = req.params;

    try {
        let table = new pgp.helpers.TableName(layerName, 'capas');
    
        await db.none('DELETE FROM $1 WHERE gid = $2', [table, gid]);
        await insertLayerEdition(req.user.id, layerName, gid, req.ip);
        res.status(200).json({ msg : 'OK' })
    } catch(e){
        res.status(500).json({ msg : e });
    }

})

/*
router
.route('/:id_layer')
.get( async (req, res)=>{
    //if(!req.user) return res.status(500).json('No capas asignadas');
    var id = req.user ? req.user.id : null;
    try {
        // Buscamos qué rol tiene sobre la capa
        let rol = await db.roles.getRol(id, req.params.id_layer);
            rol = rol || 'r';
        
        let [layerName, ..._] = await db.layers.getLayerNames(req.params.id_layer);
        res.status(200).json({ rol, layerName });
    } catch(err){
        res.status(500).json(err)
    }

});

router
.route('/base/:id_layer')
.get( async (req, res)=>{
    //console.log(req.params.id_layer);
    //if(!req.user) return res.status(500).json('No capas asignadas');
    try {
        let baseLayer = await db.layers.getBaseLayer(req.params.id_layer);
        res.status(200).json(baseLayer)
    } catch(err){
        res.status(404).json(err)
    }
});

router
.get('/:id_layer/geojson', async (req, res, next)=>{
    if(!req.user) return res.status(401).json({ msg : 'No permitido' });
    let { id_layer } = req.params;
    console.log('id_layer as geojson', id_layer);
    try {
        // Solo se permitirá el acceso si tiene permiso de editar/eliminar
        let perm = await db.roles.hasPerms(req.user.id, id_layer, 'e', 'd');
    
        if(!perm) return res.status(403).json({ msg : 'No permitido' });
    
        let [layerName, ..._] = await db.layers.getLayerNames(id_layer);
    
        if(!layerName) return res.status(404).json({ msg : 'No existe la capa' });
    
        let layer = await db.layers.getLayerAsGeoJSON(layerName);
        res.status(200).json(layer)
    } catch(err){
        res.status(500).json(err)
    }

});

*/