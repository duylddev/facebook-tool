import * as Router from 'koa-router'
const bodyParser = require('koa-bodyparser')
import FacebookController from './controller/facebookController'

export const router = new Router()

router.use([bodyParser()])

router.get('/', ctx => (ctx.body = 'PASSED'))
router.post('/addTkqc', FacebookController.addTKQC)
router.post('/sharePixel', FacebookController.sharePixel)
