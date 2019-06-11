import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 启动路径
      path: '/',
      redirect: '/index'
    },
    {
      // user-404 页面重定向
      path: 'user-*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: r =>
        require.ensure([], () => r(require('./views/index.vue')), 'index')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录 - 注册'
      },
      component: r =>
        require.ensure([], () => r(require('./views/auth/login.vue')), 'login')
    },

    // === app ===
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: r =>
        require.ensure([], () => r(require('./views/pro/home.vue')), 'pro')
    }
  ]
})
