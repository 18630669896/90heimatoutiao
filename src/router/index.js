import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import index from '../views/home'
import main from '../views/home/home.vue'

Vue.use(VueRouter)

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
    component: index,
    children: [{
      path: '',
      component: main
    }, {
      path: 'comment',
      component: () => import('../views/comment')
    }]
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
