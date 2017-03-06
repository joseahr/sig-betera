export const TEMP_DIR_SHP = './public/uploads/shapefiles';

import * as multer from 'multer';
import * as path from 'path';
import * as bluebird from 'bluebird';
import * as fs from 'fs';

const multerOpts = (dest : string, filename : any, fileSize : number) => ({
    limits: {
        fileSize
    },
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            console.log('destttttttttttt' + dest);
            cb(null, dest);
        },
        filename
    })
});

const unlink = bluebird.promisify(fs.unlink);

export const removeFiles = (...files : any[])=> Promise.all(files.map(path => unlink(path) ));

export const createMulter = (dest : string, filename : any, fileSize : number) =>
    multer(multerOpts(dest, filename, fileSize));

export const fileNameSHP = (req : any, file : any, cb : Function)=>{
	cb(null, file.originalname);
};