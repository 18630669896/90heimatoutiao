import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.use(elementui)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
