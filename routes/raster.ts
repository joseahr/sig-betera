import * as express from 'express';
import { db } from '../core/db';

export let router = express.Router();

router.post('/perfil', (req, res)=>{
    //console.log('wktttt', req.body.wkt);
    if(!req.body.wkt){
        res.status(404).json('Debe pasar como parámetro un WKT');
    }
    db.raster.getProfile(req.body.wkt)
    .then( ( lineString3d : any ) =>{
        res.status(200).json(lineString3d.perfil);
    })
    .catch( ( err : any ) => res.status(500).json(err));
});