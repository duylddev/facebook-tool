import * as Router from 'koa-router'
import FacebookController from './controller/facebookController'
const bodyParser = require('koa-bodyparser')
const path = require('path')
import { createReadStream } from 'fs'

export const router = new Router()

router.use([bodyParser()])

router.get('/', ctx => {
  ctx.type = 'html'
  ctx.body = createReadStream('./src/index.html')
})

router.get('/addTkqc', FacebookController.addTKQC)
router.get('/sharePixel/:idTkqc', FacebookController.sharePixel)
