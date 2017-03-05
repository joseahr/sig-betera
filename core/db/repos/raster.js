"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlProvider = require("../sql");
var jsts = require("jsts");
var WKTReader = jsts.io.WKTReader;
var reader = new WKTReader();
var sql = sqlProvider.raster;
// #### Si quisiéramos obtener el perfil en otro Sistema de Referencia
// #### (El lineString que nos pasan no está en ETRS89)
// #### se podrían hacer dos cosas :
// #### 1.0 -> Usar ST_Transform() para reproyectar el raster --> Menos eficiente
// #### Reproyectar el lineString a 25830, obtener el LineString 3D, y reproyectarlo 
// #### al sistema de referencia deseado
var SRID = '25830'; // ETRS89 UTM H30
var getStep = function (length) { return length; };
var Repository = (function () {
    function Repository(db, pgp) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }
    Repository.prototype.getProfile = function (lineString) {
        var geom;
        // Comprobar que es un lineString valido
        try {
            geom = reader.read(lineString);
            if (geom.getGeometryType() != 'LineString')
                throw new Error('Debe pasar un LineString como parámetro');
        }
        catch (e) {
            return Promise.reject('WKT no válido:' + e);
        }
        // Comprobar que está dentro de  los límites de Bétera
        // Obtener la longitud del lineString
        var length = geom.getLength();
        var step = getStep(length);
        // Obtener el número de puntos a usar para obtener el perfil
        // de acuerdo a la longitud del lineString pasado
        return this.db.one(sql.perfil, { wkt: "SRID=" + SRID + ";" + lineString });
    };
    return Repository;
}());
exports.Repository = Repository;
