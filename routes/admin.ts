import * as express from 'express';
import { db, pgp } from '../core/db';
import * as mailer from '../core/mailer';
import * as recaptcha from '../core/recaptcha';
import * as capabilitiesParser from '../core/capabilities-parser';
import * as fs from 'fs';
import * as path from 'path';
import * as Multer from '../core/multer';
import * as btoa from 'btoa';
import * as request from 'request-promise';

const multer = Multer.createMulter(Multer.TEMP_DIR_SHP, Multer.fileNameSHP, 50*1024*1024).array('shp[]', 3) // .shp .dbf .shx;

export let router = express.Router();

router.use( (req, res, next)=>{
    if(!req.isAuthenticated())
        return res.status(406).json({ msg : 'Permiso denegado'});
    if(req.user.rol != 'admin')
        return res.status(406).json({ msg : 'Permiso denegado' });
    next();
});


router.get('/users', (req, res)=>{
    handleWithData(db.admin.getUsers(), res);
});

router.get('/users/:id', (req, res)=>{
    let { id } = req.params;
    handleWithData(db.admin.getUserDetail(id), res);
});

router.get('/map/:id', (req, res)=>{
    let { id } = req.params;
    handleWithData(db.maps.getMapById(id), res);
});


router.get('/default-maps', (req, res)=>{
    handleWithData(db.maps.getDefaultMaps(), res);
});

/**************************
 * AÑADIR / ELIMINAR UN MAPA
 *  A UN USUARIO
 **************************/
router.route('/user/map')
.post( (req, res)=>{
    let { id_user, id_map } = req.body;
    handle(db.admin.addUserMap(req.body.id_user, req.body.id_map), res);
})
.delete( (req, res)=>{
    let { id_user, id_map } = req.body;
    handle(db.admin.deleteUserMap(req.body.id_user, req.body.id_map), res);
});

/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  ROL DE UN USUARIO SOBRE UNA CAPA
 **************************/
router.route('/user/rol')
.post( (req, res)=>{
    let { id_user, id_layer, rol } = req.body;
    if(!id_user || !id_layer || !rol) return res.status(404).json('Error : Faltan parámetros');
    handle(db.admin.addUserRol(id_user, id_layer, rol), res);
})
.put( (req, res)=>{
    let { id_user, id_layer, rol } = req.body;
    if(!id_user || !id_layer || !rol) return res.status(404).json('Error : Faltan parámetros');
    handle(db.admin.updateUserRol(id_user, id_layer, rol), res);
})
.delete( (req, res)=>{
    let { id_user, id_layer } = req.body;
    handle(db.admin.deleteUserRol(id_user, id_layer), res);
});

/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  GRUPO DE UN USUARIO
 **************************/
router.route('/user/group')
.post( (req, res)=>{
    let { id_user, group } = req.body;
    if(!id_user || !group) return res.status(404).json('Error : Faltan parámetros');
    handle(db.admin.addUserGroup(id_user, group), res);
})
.delete( (req, res)=>{
    let { id_user, group } = req.body;
    handle(db.admin.deleteUserGroup(id_user, group), res);
});

/**************************
 * AÑADIR / ELIMINAR / ACTUALIZAR
 *  UN NUEVO GRUPO DE USUARIOS
 **************************/
router.route('/groups')
.get( (req, res)=>{
    handleWithData(db.users.getAllGroups(), res);
})
.post( (req, res)=>{
    let { name } = req.body;
    // /rest/usergroup/[service/<serviceName>/]group/<group>
    /*let opts = {
        method : 'POST', uri : `http://localhost:8080/geoserver/rest/usergroup/default/group/${name}`,
        headers : { Authorization : 'Basic ' + btoa('admin:geoserver') }
    }
    
    let promise = db.admin.createGroup(name).then( ()=> request(opts) );*/
    handle(db.admin.createGroup(name), res);
})
.put( (req, res)=>{
    let { id, new_name } = req.body;
    if(!id || !new_name) return res.status(404).json('Error : Faltan parámetros');
    handle(db.admin.updateGroup(id, new_name), res);
})
.delete( (req, res)=>{
    let { id } = req.body;
    handle(db.admin.deleteGroup(id), res);
});

router.route('/maps')
.get( (req, res)=>{
    handleWithData(db.maps.getAllMaps(), res);
})
.post( (req, res)=>{
    let { name } = req.body;
    handle(db.admin.createMap(name), res);
})
.delete( (req, res)=>{
    let { id_map } = req.body;
    handle(db.admin.deleteMap(id_map), res);
});


router.route('/maps/defaults')
.post( (req, res)=>{
    let { id_map } = req.body;
    handle(db.admin.addDefaultMap(id_map), res);
})
.delete( (req, res)=>{
    let { id_map } = req.body;
    handle(db.admin.deleteDefaultMap(id_map), res);
});

router.route('/maps/layers')
.post( (req, res)=>{
    let { id_map, id_layer } = req.body;
    handle(db.admin.addMapLayer(id_map, id_layer), res);
})
.delete( (req, res)=>{
    let { id_map, id_layer } = req.body;
    handle(db.admin.deleteMapLayer(id_map, id_layer), res);
});

router.route('/maps/baselayers')
.post( (req, res)=>{
    let { id_map, id_layer } = req.body;
    handle(db.admin.addMapBaselayer(id_map, id_layer), res);
})
.delete( (req, res)=>{
    let { id_map, id_layer } = req.body;
    handle(db.admin.deleteMapBaselayer(id_map, id_layer), res);   
});

router.route('/maps/order')
.post( (req, res)=>{
    let { id_map, order } = req.body;
    handle(db.admin.addMapOrder(id_map, order), res);
});

router.route('/layers')
.get( (req, res)=>{
    let opts = {
        method : 'GET', uri : `http://localhost:8080/geoserver/rest/layers.json`,
        headers : { Authorization : 'Basic ' + btoa('admin:geoserver') }
    }
    let promises = Promise.all([  db.layers.getAllLayers(), request(opts) ])
    .then( ([layers, publishedLayers])=>{
        console.log(layers, 'aaaaa', publishedLayers);
        let publishedNames = JSON.parse(publishedLayers).layers.layer.map( l => l.name );
        return (layers || []).map( (layer)=>{
            return Object.assign(layer, { published : publishedNames.includes(layer.name) });
        });
    });

    handleWithData(promises, res);
})
.put( (req, res)=>{
    let { old_name , new_name } = req.body;
    handle(db.admin.updateLayerName(old_name, new_name), res);
})
.post( (req, res)=>{
    multer(req, res, error =>{
        if(error) return res.status(500).json('No se pudo subir el archivo SHP : ' + error);
        //console.log(req.files);
        let filesExt : any = req.files;
        filesExt = filesExt.map( (f : any) => path.extname(f.originalname).toLocaleLowerCase() );
        //console.log(filesExt, 'fffff');
        if( !['.shp', '.shx', '.dbf'].every( ext => filesExt.includes(ext) ) ){
            return Multer.removeFiles(...req.files.map( f => f.path ) )
            .then( ()=> res.status(500).json({ msg : 'Debe añadir al menos los archivos .shp .shx .dbf' }) )
            .catch( ( err : any ) => res.status(500).json(err) )
        }

        let shpPath = path.join(
                './'
            , path.dirname(req.files[0].path)
            , path.basename( req.files[0].path, path.extname(req.files[0].path) ) + '.shp'
        );

        let tableName : string = (req.query.layerName || path.basename( req.files[0].path, path.extname(req.files[0].path) )).toLowerCase();

        //console.log(shpPath, tableName);
        db.layers.exist(tableName)
        .then( ( exist : Boolean ) =>{
            if(exist) {
                Multer.removeFiles(...req.files.map( f => f.path ) )
                return res.status(500).json({ msg : `La tabla ${tableName} ya existe` });
            }

            db.layers.importSHP(shpPath, tableName)
            //.then( ()=> db.one("SELECT * FROM Layers WHERE name ILIKE '${tableName#}'", { tableName }) )
            .then( ( table : any ) => res.status(200).json(table))
            .catch( ( err : any ) => res.status(500).json(err))
            .finally( ()=> Multer.removeFiles(...req.files.map( f => f.path ) ) );
        })
        .catch( ( err : any ) => Multer.removeFiles(...req.files.map( f => f.path ) ).then( ()=> res.status(500).json(err) ) );
    });
})
.delete( (req, res)=>{
    let { tableName } = req.body;
    handle(db.admin.removeLayer(tableName), res);
});

router
.route('/layers/geoserver/:name')
.get( (req, res)=>{
    let { name } = req.params;
    if(!req.params.name) return handle(Promise.reject('No se ha proporcionado id de la capa a publicar'), res);
    let opts = {
        method : 'POST', uri : `http://localhost:8080/geoserver/rest/workspaces/betera-workspace/datastores/betera-postgis/featuretypes`,
        headers : { Authorization : 'Basic ' + btoa('admin:geoserver'), "Content-Type" :  'application/json' },
        body : JSON.stringify({ featureType : { name } })
    }
    let promise : any = request(opts);
    handleWithData(promise, res);
})
.delete( (req, res)=>{
    let { name } = req.params;
    if(!req.params.name) return handle(Promise.reject('No se ha proporcionado id de la capa a publicar'), res);
    let optsLayer = {
        method : 'DELETE', 
        uri : `http://localhost:8080/geoserver/rest/layers/${name}`,
        headers : { Authorization : 'Basic ' + btoa('admin:geoserver') }
    }
    let optsFeatureType = {
        method : 'DELETE', 
        uri : `http://localhost:8080/geoserver/rest/workspaces/betera-workspace/datastores/betera-postgis/featuretypes/${name}`,
        headers : { Authorization : 'Basic ' + btoa('admin:geoserver') }
    }
    let promise : any = request(optsLayer).then(()=> request(optsFeatureType));
    handleWithData(promise, res);  
});

router.route('/baselayers')
.get( (req, res)=>{
    handleWithData(db.layers.getAllBaseLayers(), res);
})
.post( (req, res)=>{
    let { baselayer_name, service_url, layers } = req.body;
    //console.log(req.body);
    if(!service_url) return res.status(500).json('Debe introducir una url del servicio');
    if (!layers || !layers.length) return res.status(500).json('Debe seleccionar al menos una capa');

    let regex = /(\?|\&)([^=]+)\=([^&]+)/g;
    let extract = (service_url.match(regex) || []).join('');
    let serviceURL = service_url.replace(extract, '') + '?service=WMS&request=GetCapabilities';
    //console.log(serviceURL);
    capabilitiesParser.parser(serviceURL)
    .then( ( layersCap : any ) =>{
        let service_url_ = service_url.split('?')[0];
        let layers_ = layers.join();
        let layerCapNames = layersCap.map( l => l['Name'] );

        if (!layersCap || !layersCap.length) return res.status(500).json('No es un capabilities válido');
        if( layers.some( ( l : any ) => !layerCapNames.find( ( lcn : any ) => lcn === l) ) ) 
            return res.status(500).json('El nombre de algunas capas seleccionadas no aparece en el doc de capacidades');
        // Actualizar bdd
        handle(db.admin.createBaselayer(baselayer_name, service_url_, layers_), res); 
    })
})
.delete( (req, res)=>{
    let { id } = req.body;
    handle(db.admin.deleteBaselayer(id), res); 
});


router.route('/mail/send')
.post( (req, res)=>{
    let { titulo, cuerpo, destinatarios } = req.body;
    console.log(titulo, cuerpo, destinatarios);
    if(!titulo || !cuerpo || !destinatarios) return res.status(500).json('Faltan parámetros');
    handle(mailer.sendHTMLMailTo(titulo, decodeURIComponent(cuerpo), ...destinatarios), res);
});

function handle(promise : Promise<any>, res : express.Response){
    promise
    .then(  ()=> res.status(200).json({ msg : 'OK' }) )
    .catch( (err)=> res.status(500).json({ msg : err }) );
}

function handleWithData(promise : Promise<any>, res : express.Response){
    promise
    .then(  (data)=> res.status(200).json(data) )
    .catch( (err)=> res.status(500).json({ msg : err }) );
}