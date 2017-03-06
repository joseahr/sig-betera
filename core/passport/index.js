"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var passport_local_1 = require("passport-local");
//const LocalStrategy = require('passport-local').Strategy;
var localLogin = require("./local-login");
var localSignup = require("./local-signup");
exports.passportConfig = function (passport) {
    // Serializa al usuario para almacenarlo en la sesión
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // deserializa al usuario, eliminándolo de la sesión
    passport.deserializeUser(function (id, done) {
        db_1.db.users.findBy('id', id)
            .then(function (user) { return done(null, user[0]); })
            .catch(function (err) { return done(err); });
    });
    // Login local
    passport.use('local-login', new passport_local_1.Strategy(localLogin.options, localLogin.callback));
    // Registro local
    passport.use('local-signup', new passport_local_1.Strategy(localSignup.options, localSignup.callback));
};
