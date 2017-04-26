import { IDatabase, IMain } from 'pg-promise';
import sqlProvider = require('../sql');

import * as jsts from 'jsts';

const WKTReader = jsts.io.WKTReader;

const reader = new WKTReader();

var sql = sqlProvider.raster;

// #### Si quisiéramos obtener el perfil en otro Sistema de Referencia
// #### (El lineString que nos pasan no está en ETRS89)
// #### se podrían hacer dos cosas :
// #### 1.0 -> Usar ST_Transform() para reproyectar el raster --> Menos eficiente
// #### Reproyectar el lineString a 25830, obtener el LineString 3D, y reproyectarlo 
// #### al sistema de referencia deseado

const SRID = '25830'; // ETRS89 UTM H30
let getStep = ( length : number ) => length;

export class Repository {

    constructor(db:any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }

    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db:IDatabase<any>;

    private pgp:IMain;

    getProfile( lineString : string ){
        console.log('profile');

        let geom = reader.read(lineString);
        if (geom.getGeometryType() != 'LineString'){
            return Promise.reject('WKT no válido: Debe pasar un LineString como parámetro');
        }
        // Comprobar que está dentro de  los límites de Bétera

        // Obtener la longitud del lineString
        let length = geom.getLength();
        let step   = getStep(length);
        // Obtener el número de puntos a usar para obtener el perfil
        // de acuerdo a la longitud del lineString pasado
        return this.db.one(sql.perfil, { wkt : `SRID=${SRID};${lineString}` });
    }
}
