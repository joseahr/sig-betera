import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as pug from 'pug';
import * as passport from 'passport';
import * as expressSession from 'express-session';
import { passportConfig } from './core/passport';

//import { router as routes } from './routes/index';
import { router as user } from './routes/users';
import { router as raster } from './routes/raster';

export let app = express();



// view engine setup
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(expressSession({secret: 'mySecretKey', resave : true, saveUninitialized : true}));
app.use(passport.initialize());
// Luego las sesiones de passport
app.use(passport.session());

passportConfig(passport);

//app.use('/', routes);
app.use('/api/user', user);
app.use('/api/raster', raster);

app.use('/', express.static('client/dist'));

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  let err = new Error('Not Found');
  (err as any).status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});