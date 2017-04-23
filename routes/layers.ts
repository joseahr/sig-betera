import * as express from 'express';
import { db } from '../core/db';
import * as capabilitiesParser from '../core/capabilities-parser';

export let router = express.Router();

router.route('/features')
.post( (req, res)=>{
    let { user } = req;
    let { wkt, layers } = req.body;
    //console.log('byGeom');
    if(!wkt) return res.status(500).json('Debe enviar una extensión, área o punto.');
    if(!layers || !layers.length) return res.status(500).json('Debe enviar al menos una capa en la que buscar.');
    //if(typeof req.body.layers === 'string') req.body.layers = req.body.layers.split(',');
    db.layers.getDefaultLayers().then( (defaultLayers : any = []) =>{
        if(!user){
            layers = layers.filter( (l : any) => defaultLayers.find( (dl : any) => dl.name == l) );
        }
        db.layers.getFeaturesIntersecting(wkt, ...layers)
        .then( ( result : any ) => res.status(200).json(result) )
        .catch( ( err : any ) => res.status(500).json('Hubo un error durante la búsqueda.') );
    });
});

router
.post('/wms/capabilities', (req, res)=>{
    let serviceUrl = req.body.service_url;
    //console.log(serviceUrl, req.body);
    if(!serviceUrl) return res.status(500).json('Introduce una url');
    capabilitiesParser.parser(serviceUrl)
    .then(layers =>{
        if(!layers || !layers.length) return res.status(500).json('No es un capabilities válido');
        res.status(200).json(layers);
    })
    .catch(err => res.status(500).json('eeer' + err));
});

router
.route('/:id_layer')
.get( (req, res)=>{
    //if(!req.user) return res.status(500).json('No capas asignadas');
    var id = req.user ? req.user.id : null;
    // Buscamos qué rol tiene sobre la capa
    db.roles.getRol(id, req.params.id_layer)
    .then( ( rol : string ) =>{
        // Qué nombre tiene la capa
        rol = rol || 'r';
        db.layers.getLayerNames(req.params.id_layer)
        .then( ( layerName : any ) => {
            //console.log(layerName);
            layerName = layerName[0];
            // Obtener la capa como GeoJSON
            res.status(200).json({
                rol,
                layerName 
            });
        });
    })
    .catch( ( err : any ) => res.status(500).json(err));

});

router
.route('/base/:id_layer')
.get( (req, res)=>{
    //console.log(req.params.id_layer);
    //if(!req.user) return res.status(500).json('No capas asignadas');
    db.layers.getBaseLayer(req.params.id_layer)
    .then( ( baseLayer : any ) => res.status(200).json(baseLayer) )
    .catch( ( err : any ) => res.status(404).json(err) );
});

router
.get('/:id_layer/geojson', (req, res, next)=>{
    if(!req.user) return res.status(401).json({ msg : 'No permitido' });
    let { id_layer } = req.params;
    console.log('id_layer as geojson', id_layer);
    // Solo se permitirá el acceso si tiene permiso de editar/eliminar
    db.roles.hasPerms(req.user.id, id_layer, 'e', 'd').then( perm => {
        if(!perm) return res.status(403).json({ msg : 'No permitido' });
        db.layers.getLayerNames(id_layer).then( layerName =>{
            if(!layerName[0]) return res.status(404).json({ msg : 'No existe la capa' })
            layerName = layerName[0].name;
            db.layers.getLayerAsGeoJSON(layerName).then( layer => res.status(200).json(layer) );
        })
    })
    .catch( err => res.status(500).json(err) );
});