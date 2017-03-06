import { db } from '../db';

import { Strategy as LocalStrategy } from 'passport-local';
import { Passport } from 'passport';
//const LocalStrategy = require('passport-local').Strategy;
import * as localLogin from './local-login';
import * as localSignup from './local-signup';

export const passportConfig =  ( passport : any ) : void =>{

    // Serializa al usuario para almacenarlo en la sesión
    passport.serializeUser((user : any, done : Function)=>{
        done(null, user.id);
    });
 
    // deserializa al usuario, eliminándolo de la sesión
    passport.deserializeUser( (id : string, done : Function)=>{
        db.users.findBy('id', id)
        .then( ( user : any ) => done(null, user[0]))
        .catch( ( err : any ) => done(err))
    });

    // Login local
    passport.use('local-login', new LocalStrategy(localLogin.options, localLogin.callback) );
    // Registro local
    passport.use('local-signup', new LocalStrategy(localSignup.options, localSignup.callback) );
}