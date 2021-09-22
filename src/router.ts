import * as Router from 'koa-router'
const bodyParser = require('koa-bodyparser')

export const router = new Router()

router.use([bodyParser()])

router.get('/', ctx => (ctx.body = 'PASSED'))
