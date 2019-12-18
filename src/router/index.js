import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import index from '../views/home'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式

Vue.use(VueRouter)
Vue.use(elementui)

const routes = [
  {
    path: '/',
    redirect: '/login'

  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/index',
    component: index
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
