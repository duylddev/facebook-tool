import { ID_BM, ID_PIXEL, TOKEN_ADMIN } from '@/config'
import axios from 'axios'
import { Context } from 'koa'
import { fbRequest } from '.'

export default class FacebookController {
  static addTKQC(ctx: Context) {
    fbRequest
      .post(
        `/v5.0/${ID_BM}/client_ad_accounts?access_token=`,
        `access_type=AGENCY&adaccount_id=act_id_tkqc&access_token=${TOKEN_ADMIN}&permitted_roles=[]&permitted_tasks=["ADVERTISE","ANALYZE","DRAFT","MANAGE"]`
      )
      .then(rs => (ctx.body = rs.data))
      .catch(err => {
        ctx.status = err.response.status
        ctx.body = err
      })
  }

  static sharePixel(ctx: Context) {
    const idTkqc = ctx.request.body
    ctx.body = fbRequest
      .post(`/v8.0/${ID_PIXEL}/shared_accounts`, `account_id=${idTkqc}&access_token=${TOKEN_ADMIN}&business=${ID_BM}`)
      .then(rs => (ctx.body = rs.data))
      .catch(err => {
        ctx.status = err.response.status
        ctx.body = err
      })
  }
}
