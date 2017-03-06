import * as express from 'express';
import { db } from '../core/db';

export let router = express.Router();

router.get('/perfil', (req, res)=>{
    if(!req.query.wkt){
        res.status(404).json('Debe pasar como parámetro un WKT');
    }
    db.raster.getProfile(req.query.wkt)
    .then( ( lineString3d : any ) =>{
        res.status(300).json(lineString3d.perfil);
    })
    .catch( ( err : any ) => res.status(500).json(err));
});