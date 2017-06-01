import * as express from 'express';
import { db } from '../core/db';

export let router = express.Router();

router
.route('/')
.get( async (req, res)=>{
    let id = req.user ? req.user.id : null;
    try {
        let mapsAndLayers = await db.maps.getMapsAndLayers(id);
        res.status(200).json(mapsAndLayers);
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});