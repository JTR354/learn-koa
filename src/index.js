import Koa from 'koa';

const app = new Koa();

app.use((ctx) => {
	ctx.body = 'hi koa';
});

const port = 3000;
app.listen(port, () => {
	console.log(`server is on port:${port}`);
});
