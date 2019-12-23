import axios from 'axios'
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
export default axios
