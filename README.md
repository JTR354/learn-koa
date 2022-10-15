# README LEARN KOA

## Setup

### running

- nodemon
- cross-env
- rimraf

### webpack

- webpack
- webpack-cli
- webpack-node-externals
- copy-webpack-plugin
- clean-webpack-plugin

### babel

- @babel/node
- @babel/core
- @babel/preset-env
- babel-loader

```bash
"dev": "cross-env NODE_ENV=dev nodemon --exec babel-node --inspect index.js",
```

## Debugger

```bash
"webpack:debugger": "node --inspect-brk ./node_modules/.bin/webpack --inline --progress"

```

chrome://inspect/#devices

## Lint 配置

- eslint
- prettier
- husky
- commitlint
- eslint-config-prettier

## Koa-config

- koa-router
- koa-combine-routers
- koa-compose
- koa-body
- koa-json
- koa-static
- koa-helmet
- @koa/cors

## Server

- svg-captcha
- [nodemailer](https://www.npmjs.com/package/nodemailer)

## UI

- layui
- [vuelidate](https://github.com/vuelidate/vuelidate)
- [vee-validate](https://github.com/logaretm/vee-validate)
