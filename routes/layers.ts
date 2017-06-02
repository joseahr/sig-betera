import * as express from 'express';
import { db, pgp } from '../core/db';
import * as capabilitiesParser from '../core/capabilities-parser';
import * as jsts from 'jsts';

const wktReader = new jsts.io.WKTReader();

export let router = express.Router();

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

router.route('/features')
.post( async (req, res)=>{
    let { user } = req;
    let { wkt, layers } = req.body;
    //console.log('byGeom');
    if(!wkt) return res.status(500).json('Debe enviar una extensión, área o punto.');
    if(!layers || !layers.length) return res.status(500).json('Debe enviar al menos una capa en la que buscar.');
    //if(typeof req.body.layers === 'string') req.body.layers = req.body.layers.split(',');
    try {
        let defaultLayers = await db.layers.getDefaultLayers();
        if(!user){
            layers = layers.filter( (l : any) => defaultLayers.find( (dl : any) => dl.name == l) );
        }
        
        let features = await db.layers.getFeaturesIntersecting(wkt, ...layers);
        res.status(200).json(features)

    } catch(e){
        res.status(500).json('Hubo un error durante la búsqueda.')
    }
});

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
        let response = await db.none(query + ' WHERE gid = ${gid}', {gid});
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