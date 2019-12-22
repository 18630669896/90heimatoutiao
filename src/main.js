import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission' // 引入权限模块
import './styles/index.less'
import elementui from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.use(elementui)
Vue.use(Component)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
