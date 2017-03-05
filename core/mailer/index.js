"use strict";
// Librería nodemailer
var nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
var urlTransport = require('../config').mailer;
var transporter = nodemailer.createTransport(urlTransport);
// Nombre del destinatario
var from = '"SIG Bétera 👥" <topografo@betera.es>';
// Enviar un e-mail cuyo cuerpo va renderizar un HTML
// Ejemplo de uso : sendHTMLMailTo(subject, html, email1, email2, email3, ..., emailN)
var sendHTMLMailFrom = function (from) {
    return function (subject, html) {
        var destinators = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            destinators[_i - 2] = arguments[_i];
        }
        return transporter.sendMail({ from: from, subject: subject, html: html, to: destinators.join() });
    };
};
var sendHTMLMailTo = function (subject, html) {
    var destinators = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        destinators[_i - 2] = arguments[_i];
    }
    return transporter.sendMail({ from: from, subject: subject, html: html, to: destinators.join() });
};
// Enviar un email cuyo cuerpo va a ser texto plano
var sendTextMailTo = function (subject, text) {
    var destinators = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        destinators[_i - 2] = arguments[_i];
    }
    return transporter.sendMail({ from: from, subject: subject, text: text, to: destinators.join() });
};
//var mailOptions = {
//    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
//    to: 'joherro3@topo.upv.es', // list of receivers
//    subject: 'Hello ✔', // Subject line
//    text: 'Hello world 🐴', // plaintext body
//    html: '<b>Hello world 🐴</b>' // html body
//};
var defaultMessages = {
    forgotPassword: {
        subject: function (name) { return "Hola, " + name + ", recupera tu contrase\u00F1a."; },
        content: function (nombre, apellidos, token) { return "\n            Hola, " + nombre + " " + apellidos + ", usted ha pedido cambiar su contrase\u00F1a.<br>\n            Para recuperar su cuenta, por favor, dir\u00EDjase a la siguiente direcci\u00F3n<br>\n            <a href=\"http://localhost:3000/usuarios/password/" + token + "\">http://localhost:3000/usuarios/password/" + token + "</a>\n        "; }
    }
};
module.exports = {
    transporter: transporter,
    sendHTMLMailFrom: sendHTMLMailFrom,
    sendHTMLMailTo: sendHTMLMailTo,
    sendTextMailTo: sendTextMailTo,
    defaultMessages: defaultMessages
};
