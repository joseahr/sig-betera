import  * as recaptcha_ from 'express-recaptcha';

import { recaptchaConfig } from '../config';

recaptcha_.init(recaptchaConfig.SITE_KEY, recaptchaConfig.SITE_SECRET);

export const recaptcha = recaptcha_;