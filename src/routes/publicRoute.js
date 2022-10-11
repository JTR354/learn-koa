import Router from 'koa-router';

import publicController from '../api/publicController';

const router = new Router();

router.get('/captcha', publicController.captcha);

export default router;
