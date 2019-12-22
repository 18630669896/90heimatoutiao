import router from '../router'
// 定义一个全局的守卫
router.beforeEach((to, from, next) => {
  // 权限拦截，有token放行，没有token强制跳转到登录页
  if (to.path.startsWith('/index')) {
    // debugger
    // 只有路由下的页面才会判断有没有token，其他的浏览页面不用判断
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
