// Librería nodemailer
import * as nodemailer from 'nodemailer';
import * as db from '../db';

// create reusable transporter object using the default SMTP transport
const urlTransport = require('../config').mailer;
const transporter = nodemailer.createTransport(urlTransport);

// Nombre del destinatario
const from = '"SIG Bétera 👥" <topografo@betera.es>';

// Enviar un e-mail cuyo cuerpo va renderizar un HTML
// Ejemplo de uso : sendHTMLMailTo(subject, html, email1, email2, email3, ..., emailN)
const sendHTMLMailFrom = ( from : string ) =>
    (subject : string, html : string, ...destinators : string[]) : Promise<any> =>
        transporter.sendMail({ from, subject, html, to : destinators.join() });

const sendHTMLMailTo = ( subject : string, html : string, ...destinators : string[] )=>
    transporter.sendMail({ from, subject, html, to : destinators.join() });

// Enviar un email cuyo cuerpo va a ser texto plano
const sendTextMailTo = ( subject : string, text : string, ...destinators : string[] )=>
    transporter.sendMail({ from, subject, text, to : destinators.join() });

//var mailOptions = {
//    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
//    to: 'joherro3@topo.upv.es', // list of receivers
//    subject: 'Hello ✔', // Subject line
//    text: 'Hello world 🐴', // plaintext body
//    html: '<b>Hello world 🐴</b>' // html body
//};

const defaultMessages = {
    forgotPassword : {
        subject : ( name : string ) => `Hola, ${name}, recupera tu contraseña.`,
        content : ( nombre : string, apellidos : string, token : string ) => `
            Hola, ${nombre} ${apellidos}, usted ha pedido cambiar su contraseña.<br>
            Para recuperar su cuenta, por favor, diríjase a la siguiente dirección<br>
            <a href="http://localhost:3000/usuarios/password/${token}">http://localhost:3000/usuarios/password/${token}</a>
        `
    }
};

// Exportamos las dos funciones creadas y el objeto transporter
//  por si hiciera falta
export = {
    transporter,
    sendHTMLMailFrom,
    sendHTMLMailTo,
    sendTextMailTo,
    defaultMessages
}
