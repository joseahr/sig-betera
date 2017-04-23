import * as express from 'express';
import { db } from '../core/db';

export let router = express.Router();

router
.route('/')
.get( (req, res)=>{
    let id = req.user ? req.user.id : null;
    db.maps.getMapsAndLayers(id)
    .then( ( mapsAndLayers : any ) => res.status(200).json(mapsAndLayers) )
    .catch( ( err : any ) => {
        console.log(err);
        res.status(500).json(err);
    });
});