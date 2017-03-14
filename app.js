"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require("passport");
var expressSession = require("express-session");
var passport_1 = require("./core/passport");
//import { router as routes } from './routes/index';
var users_1 = require("./routes/users");
var raster_1 = require("./routes/raster");
var maps_1 = require("./routes/maps");
var layers_1 = require("./routes/layers");
var admin_1 = require("./routes/admin");
exports.app = express();
// view engine setup
exports.app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
exports.app.use(logger('dev'));
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: false }));
exports.app.use(cookieParser());
exports.app.use(expressSession({ secret: 'mySecretKey', resave: true, saveUninitialized: true }));
exports.app.use(passport.initialize());
// Luego las sesiones de passport
exports.app.use(passport.session());
passport_1.passportConfig(passport);
//app.use('/', routes);
exports.app.use('/api/user', users_1.router);
exports.app.use('/api/raster', raster_1.router);
exports.app.use('/api/maps', maps_1.router);
exports.app.use('/api/layers', layers_1.router);
exports.app.use('/api/admin', admin_1.router);
exports.app.use('/', express.static('client/dist'));
// catch 404 and forward to error handler
exports.app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (exports.app.get('env') === 'development') {
    exports.app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
exports.app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
