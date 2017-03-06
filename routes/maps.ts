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

router.use((req, res, next)=>{
  if(!req.isAuthenticated()) return res.status(500).json('Debe estar autentificado');
  next();
});

router.post('/setVisible', (req, res)=>{
  if(!req.body.id_map) return res.status(500).json('Debe añadir mapa que hacer visible');
  db.users.setVisibleMap(req.user.id, req.body.id_map)
  .then( ()=> res.status(200).json('OK'))
  .catch( ( err : any ) => res.status(500).json(err));
});