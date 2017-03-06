import * as recaptcha from 'express-recaptcha';

import { recaptchaConfig } from '../config';

recaptcha.init(recaptchaConfig.SITE_KEY, recaptchaConfig.SITE_SECRET);

export default recaptcha;