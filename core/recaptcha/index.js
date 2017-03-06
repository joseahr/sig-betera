"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_ = require("express-recaptcha");
var config_1 = require("../config");
recaptcha_.init(config_1.recaptchaConfig.SITE_KEY, config_1.recaptchaConfig.SITE_SECRET);
exports.recaptcha = recaptcha_;
