import * as express from 'express';
import * as passport from 'passport';
import { db } from '../core/db';
import * as mailer from '../core/mailer';
import { recaptcha } from '../core/recaptcha';

import * as btoa from 'btoa';

export let router = express.Router();

router.post('/isAuth', (req, res)=>{
  if(req.isAuthenticated()) return res.status(200).send(req.user);
  return res.status(200).send({ error : 'No está autenticado' });
})

router.post('/login', (req: express.Request, res: express.Response, next: express.NextFunction)=>{
  
  console.log(req.body.username, req.body.password);
  // Comprobamos que req.body.username && req.body.password existan
  console.log(req.body);
  if(!req.body.username || !req.body.password)
    return res.status(400).json('Faltan credenciales de acceso');
  
  passport.authenticate('', function(){});
  // Intentamos autenticarnos 
  let expressHandler = passport.authenticate('local-login', (err  : any, user : any, info : any)=>{
    // Si ha habido un error mandamos un status 500
    if(err) 
      return res.status(500).json(err);
    // Si no se ha encontrado ningún usuario mandamos status 404
    if(!user) 
      return res.status(404).json(info);
    // Intentamos logearnos en la sesión
    req.logIn(user, err =>{
      // Enviamos un status 200
      //res.setHeader('Authorization', 'Basic ' + btoa('admin:geoserver'));
      //res.removeHeader('Authorization')
      res.status(200).json(user);
    });
  // llamamos a la función middleware que devuelve passport.authenticate() 
  // con los parámetros req y res
  });
  expressHandler(req, res, next);
});

router.post('/signup', recaptcha.middleware.verify, (req, res, next)=>{
  console.log(req.body);

  if (req.recaptcha.error) return res.status(500).json('No has verificado el re-captcha');

  let { name, password, repassword, nombre, apellidos, email } = req.body;
  console.log({ name, password, repassword, nombre, apellidos, email });
  // Comprobamos que req.body.username && req.body.password existan
  if(!name || !password || !nombre || !apellidos || !email || !repassword)
    return res.status(400).json('Faltan credenciales de acceso');
  if(password != repassword)
    return res.status(400).json('Las contraseñas no coinciden');

  passport.authenticate('local-signup', (err  : any, user : any, token : any)=>{
    // Si ha habido un error mandamos un status 500
    console.log(err, user, token);
    if(err) 
      return res.status(500).json(err);
    res.status(200).json({ user });

  })(req, res, next);
});

router.get('/logout', (req : Express.Request, res)=>{
  if(!req.user)
    return res.status(404).json('No hay usuario en la sesión');
  req.logout();
  //res.removeHeader('Authorization');
  res.status(200).send('logged out');
});

router.get('/validate/:token', (req, res)=>{
  let token = req.params.token;
  db.one("SELECT EXISTS ( SELECT token FROM users_not_valid_yet WHERE token = ${token} ) AS exist", { token })
  .then( ( result : any ) =>{
    let exist = result.exist;
    if(!exist) return res.status(500).json('No existe ningún usuario no válido con token ' + token);
    db.none("DELETE FROM users_not_valid_yet WHERE token = ${token}", { token })
    .then( ()=> res.status(200).json('Usuario validado correctamente') )
    .catch( ( err : any ) => res.status(500).json(err) );
  })
  .catch( ( err : any ) => res.status(500).json(err) );
});

router.
route('/password')
.post((req, res)=>{
  db.users.findBy('email', req.body.email)
  .then( ( user : any ) =>{
    if(!user.length) return res.status(500).json('Usuario no encontrado');
    console.log(user);
    user = user[0];
    db.users.createForgetToken(user.id)
    .then( ( token : any ) =>{
      let forgotMsg = mailer.defaultMessages.forgotPassword;

      mailer.sendHTMLMailTo(
        forgotMsg.subject(user.name)
        , forgotMsg.content(user.nombre
        , user.apellidos, token.token), user.email 
      )
      .then( ()=> res.status(200).json('OK'))
      .catch( ( err : any ) => res.status(500).json('err2' + err));
    })
    .catch( ( err : any ) => res.status(500).json('err' + err) )
  })
  .catch( ( err : any ) => res.status(500).json('eerr1' + err) )
})
.put((req, res)=>{
  let token = req.body.token;
  let password = req.body.password;
  let repassword = req.body.repassword;
  console.log(password, repassword, token);
  if(password !== req.body.repassword) return res.status(500).json('Las contraseñas no coinciden');
  if(password.length < 5) return res.status(500).json('La contraseña debe tener al menos 5 caracteres');

  db.one("SELECT id FROM public.users_change_password_token WHERE token = ${token}", {token})
  .then( ( user : any ) => {
    db.users.genPassword(password)
    .then( ( password : any ) =>{
      db.none("UPDATE Users SET password = ${password} WHERE id = ${id}", {id : user.id, password})
      .then( ()=> db.none("DELETE FROM public.users_change_password_token WHERE token = ${token}", {token}) )
      .then( ()=> res.status(200).json('Contraseña Actualizada') )
      .catch( ( err : any ) => res.status(500).json(err) )
    })
    .catch( ( err : any ) => res.status(500).json(err));
  })
  .catch( ( err : any ) => res.status(500).json('No existe un usuario que concuerde con el token') );
});

router.get('/password/:token', (req, res)=>{
  let token = req.params.token;
  db.one("SELECT token FROM public.users_change_password_token WHERE token = ${token}", {token})
  .then( ( user : any ) => {
    //res.render('password-token', {token})
    res.json({token})
  })
  .catch( ( err : any ) => res.status(500).json('No existe un usuario que concuerde con el token') );
});