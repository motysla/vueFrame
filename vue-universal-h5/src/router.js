import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			// 启动路径
			path: '/',
			redirect: "/index"
		},
		{
			// 404 页面重定向
			path: '*',
			redirect: "/index"
		},
		{
			path: '/index',
			name: "index",
			meta: {
				title: "首页"
			},
			component: r => require.ensure([], () => r(require('./views/index.vue')), 'index')
		},
	]
})