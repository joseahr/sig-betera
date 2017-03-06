"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var mailer = require("../mailer");
exports.options = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};
exports.callback = function (req, email, password, done) {
    if (email)
        email = email.toLowerCase();
    var _a = req.body, repassword = _a.repassword, name = _a.name, nombre = _a.nombre, apellidos = _a.apellidos;
    Promise.all([
        db_1.db.users.findBy('name', name),
        db_1.db.users.findBy('email', email)
    ])
        .then(function (users) {
        if (users[0].length)
            return done('El nombre de usuario escogido está siendo usado por otro usuario.');
        if (users[1].length)
            return done('El email introducido ya existe en la base de datos.');
        db_1.db.users.genPassword(password)
            .then(function (password) {
            var cs = new db_1.pgp.helpers.ColumnSet(['email', 'name', 'password', 'nombre', 'apellidos'], { table: 'users' });
            var values = [{ email: email, name: name, password: password, nombre: nombre, apellidos: apellidos }];
            var query = db_1.pgp.helpers.insert(values, cs) + ' RETURNING *';
            db_1.db.one(query)
                .then(function (user) {
                console.log(user);
                db_1.db.one('SELECT token FROM users_not_valid_yet WHERE id = ${id_user}', { id_user: db_1.pgp.as.value(user.id) })
                    .then(function (userToken) {
                    mailer.sendTextMailTo(subject(nombre), content(nombre, apellidos, userToken.token), email)
                        .catch(function (err) { return console.log('No se pudo enviar correo'); }); // Que lo haga en asíncrono
                    // No esperamos a que se envíe el mail
                    done(null, user, userToken.token);
                })
                    .catch(function (err) { return done("Error creando usuario : " + err); });
            })
                .catch(function (err) { return done("Error creando usuario : " + err); });
        });
    })
        .catch(function (err) { return done("Error creando usuario : " + err); });
};
var subject = function (name) { return "Bienvenido a SIG B\u00E9tera " + name; };
var content = function (nombre, apellidos, token) { return "\n    Bienvenido a SIG B\u00E9tera " + nombre + " " + apellidos + ",\n    \n    Nos complace que te registres como usuario, con el que podr\u00E1s\n    tener acceso a los mapas de esta web, as\u00ED como de la informaci\u00F3n geogr\u00E1fica y \n    aplicaciones para el municipio de B\u00E9tera.\n\n    Para finalizar el registro accede a : " + token + "\n"; };
