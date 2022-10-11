import svgCaptcha from 'svg-captcha';

class PublicController {
	captcha(ctx) {
		const captcha = svgCaptcha.create();
		ctx.body = {
			code: 0,
			captcha
		};
	}
}

export default new PublicController();
