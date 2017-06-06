import * as express from 'express';
import { db } from '../core/db';

export let router = express.Router();

router.post('/perfil', async (req, res)=>{
    //console.log('wktttt', req.body.wkt);
    if(!req.body.wkt){
        res.status(404).json('Debe pasar como parámetro un WKT');
    }
    
    try {
        let { perfil } = (<any> await db.raster.getProfile(req.body.wkt));

        res.status(200).json(perfil);
    } catch(err){
        res.status(500).json(err)
    }

});