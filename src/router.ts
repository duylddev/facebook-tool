import * as Router from 'koa-router'
import Axios from 'axios'
import { get } from 'lodash'
const bodyParser = require('koa-bodyparser')

export const router = new Router()

router.use([bodyParser()])

router.get('/test', async ctx => {
  ctx.body = 'OK'
})
