"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
exports.options = {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // Nos permite pasar el request al callback (saber si el usuario está logeado)
};
exports.callback = function (req, username, password, done) {
    console.log('local-login callback');
    /*
    #### Buscar en la base de datos un usuario que coincida con el
    #### nombre de usuario pasado como param.
    #### Se comprueba también que coincida la contraseña
    #### "done" es una función de callback de la estrategia de login local
    #### de passport (local-strategy)
    */
    var func = function () {
        // Buscamos al usuario por "name" 
        return Promise.all([
            db_1.db.users.findBy('name', username),
            db_1.db.users.findBy('email', username)
        ])
            .then(function (user) {
            user = user[0].length
                ? user[0][0] : user[1].length
                ? user[1][0] : false;
            if (!user)
                done(null, false, 'Usuario no encontrado');
            else {
                db_1.db.users.isValid(user.id)
                    .then(function (isValid) {
                    console.log(isValid);
                    if (!isValid)
                        return done(false, false, 'Usuario no válido. Revisa tu correo y sigue las instrucciones : ' + user.email);
                    console.log('usuario encontrado en la bdd', user, password);
                    db_1.db.users.validPassword(user, password)
                        .then(function (validPassword) {
                        console.log('Comparando contraseñas : ', validPassword);
                        if (validPassword) {
                            req.user = user;
                            done(null, user, 'Login Correcto');
                        }
                        else
                            done(null, false, 'La contraseña no coincide');
                    })
                        .catch(function (err) { return done(err); });
                });
            }
        })
            .catch(function (err) {
            console.log('error : ', err);
            done(err);
        });
    };
    // Ejecutamos la función en el siguiente "tick" del event-loop
    process.nextTick(func);
};
