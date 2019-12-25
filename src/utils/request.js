import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截分发令牌
axios.interceptors.request.use(function (config) {
// 请求成功执行
// config请求参数配置
  let token = window.localStorage.getItem('user-token')// 取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 表示会用该config请求进行后台操作
}, function () {
// 请求失败执行
})

axios.defaults.transformResponse = [function (data) {
  return data ? JSONBig.parse(data) : {}
}]
// 响应拦截
axios.interceptors.response.use(function (response) {
// 成功执行该函数 状态码201,200,204
  return response.data ? response.data : {}
}, function (error) {
// 失败执行该函数
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
    // token 未传或者过期
      window.localStorage.removeItem('user-token')
      router.push('/login') // 跳转到登录页
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  return Promise.reject(error)
})
export default axios
