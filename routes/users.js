"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var db_1 = require("../core/db");
var mailer = require("../core/mailer");
var recaptcha_1 = require("../core/recaptcha");
exports.router = express.Router();
exports.router.post('/isAuth', function (req, res) {
    if (req.isAuthenticated())
        return res.status(200).send(req.user);
    return res.status(200).send({ error: 'No está autenticado' });
});
exports.router.post('/login', function (req, res, next) {
    console.log(req.body.username, req.body.password);
    // Comprobamos que req.body.username && req.body.password existan
    console.log(req.body);
    if (!req.body.username || !req.body.password)
        return res.status(400).json('Faltan credenciales de acceso');
    passport.authenticate('', function () { });
    // Intentamos autenticarnos 
    var expressHandler = passport.authenticate('local-login', function (err, user, info) {
        // Si ha habido un error mandamos un status 500
        if (err)
            return res.status(500).json(err);
        // Si no se ha encontrado ningún usuario mandamos status 404
        if (!user)
            return res.status(404).json(info);
        // Intentamos logearnos en la sesión
        req.logIn(user, function (err) {
            // Enviamos un status 200
            res.status(200).json(user);
        });
        // llamamos a la función middleware que devuelve passport.authenticate() 
        // con los parámetros req y res
    });
    expressHandler(req, res, next);
});
exports.router.post('/signup', recaptcha_1.recaptcha.middleware.verify, function (req, res, next) {
    console.log(req.body);
    if (req.recaptcha.error)
        return res.status(500).json('No has verificado el re-captcha');
    var _a = req.body, name = _a.name, password = _a.password, repassword = _a.repassword, nombre = _a.nombre, apellidos = _a.apellidos, email = _a.email;
    console.log({ name: name, password: password, repassword: repassword, nombre: nombre, apellidos: apellidos, email: email });
    // Comprobamos que req.body.username && req.body.password existan
    if (!name || !password || !nombre || !apellidos || !email || !repassword)
        return res.status(400).json('Faltan credenciales de acceso');
    if (password != repassword)
        return res.status(400).json('Las contraseñas no coinciden');
    passport.authenticate('local-signup', function (err, user, token) {
        // Si ha habido un error mandamos un status 500
        console.log(err, user, token);
        if (err)
            return res.status(500).json(err);
        res.status(200).json({ user: user });
    })(req, res, next);
});
exports.router.get('/logout', function (req, res) {
    if (!req.user)
        return res.status(404).json('No hay usuario en la sesión');
    req.logout();
    res.status(200).send('logged out');
});
exports.router.get('/validar/:token', function (req, res) {
    var token = req.params.token;
    db_1.db.one("SELECT EXISTS ( SELECT token FROM users_not_valid_yet WHERE token = '${token#}' ) AS exist", { token: token })
        .then(function (result) {
        var exist = result.exist;
        if (!exist)
            return res.status(500).json('No existe ningún usuario no válido con token ' + token);
        db_1.db.none("DELETE FROM users_not_valid_yet WHERE token = '${token#}'", { token: token })
            .then(function () { return res.status(200).json('Usuario validado correctamente'); })
            .catch(function (err) { return res.status(500).json(err); });
    })
        .catch(function (err) { return res.status(500).json(err); });
});
exports.router.
    route('/password')
    .post(function (req, res) {
    db_1.db.users.findBy('email', req.body.email)
        .then(function (user) {
        if (!user.length)
            return res.status(500).json('Usuario no encontrado');
        console.log(user);
        user = user[0];
        db_1.db.users.createForgetToken(user.id)
            .then(function (token) {
            var forgotMsg = mailer.defaultMessages.forgotPassword;
            mailer.sendHTMLMailTo(forgotMsg.subject(user.name), forgotMsg.content(user.nombre, user.apellidos, token.token), user.email)
                .then(function () { return res.status(200).json('OK'); })
                .catch(function (err) { return res.status(500).json('err2' + err); });
        })
            .catch(function (err) { return res.status(500).json('err' + err); });
    })
        .catch(function (err) { return res.status(500).json('eerr1' + err); });
})
    .put(function (req, res) {
    var token = req.body.token;
    var password = req.body.password;
    var repassword = req.body.repassword;
    console.log(password, repassword, token);
    if (password !== req.body.repassword)
        return res.status(500).json('Las contraseñas no coinciden');
    if (password.length < 5)
        return res.status(500).json('La contraseña debe tener al menos 5 caracteres');
    db_1.db.one("SELECT id FROM public.users_change_password_token WHERE token = '${token#}'", { token: token })
        .then(function (user) {
        db_1.db.users.genPassword(password)
            .then(function (password) {
            db_1.db.none("UPDATE Users SET password = '${password#}' WHERE id = '${id#}'", { id: user.id, password: password })
                .then(function () { return db_1.db.none("DELETE FROM public.users_change_password_token WHERE token = '${token#}'", { token: token }); })
                .then(function () { return res.status(200).json('Contraseña Actualizada'); })
                .catch(function (err) { return res.status(500).json(err); });
        })
            .catch(function (err) { return res.status(500).json(err); });
    })
        .catch(function (err) { return res.status(500).json('No existe un usuario que concuerde con el token'); });
});
exports.router.get('/password/:token', function (req, res) {
    var token = req.params.token;
    db_1.db.one("SELECT token FROM public.users_change_password_token WHERE token = '${token#}'", { token: token })
        .then(function (user) {
        var token = user.token;
        res.render('password-token', { token: token });
    })
        .catch(function (err) { return res.status(500).json('No existe un usuario que concuerde con el token'); });
});
