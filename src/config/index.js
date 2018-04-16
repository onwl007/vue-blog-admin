/**
 * @desc 配置参数
 */

'use strict'

export default {
  auth: {
    authCookieKey: 'onwl007.me.sid',
    authTokenKey: 'onwl007.me.token',
    authInfoCacheKey: 'onwl007.me.info'
  },
  storage: {
    userKey: 'onwl007.me.user',
    userLikeKey: 'onwl007.me.history'
  },
  service: {
    url: '/',
    method: 'get',
    baseURL: __PROD__ ? 'https://api.onwl007.me' : 'http://localhost:3001',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json'
    },
    withCredentials: true,
    timeout: 60000,
    responseType: 'json'
  }
}
