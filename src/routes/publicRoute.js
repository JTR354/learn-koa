import Router from 'koa-router';

import publicController from '../api/publicController';

const router = new Router();

router.post('/demo', publicController.demo);

export default router;
