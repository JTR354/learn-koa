import Koa from 'koa';
import helmet from 'koa-helmet';
import body from 'koa-body';
import compose from 'koa-compose';
import cors from '@koa/cors';
import statics from 'koa-static';
import compress from 'koa-compress';
import json from 'koa-json';

import routes from './routes';

const app = new Koa();

const middleware = compose([
	helmet(),
	cors(),
	body(),
	statics('./public'),
	json({ pretty: false, param: 'pretty' }),
	routes()
]);

app.use(middleware);

const isProd = String(process.env.NODE_ENV).startsWith('prod');

if (isProd) {
	app.use(compress);
}

const port = 3000;

app.listen(port, () => {
	console.log(`server is on port:${port}`);
});
