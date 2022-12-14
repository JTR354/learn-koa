module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
