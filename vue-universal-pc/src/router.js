import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			// 启动路径
			path: '/',
			redirect: "/index/home"
		},
		{
			// 二级路由的一级路由重定向
			path: '/index',
			redirect: "/index/home"
		},
		{
			// 404 页面重定向
			path: '*',
			redirect: "/index/home"
		},
		{
			// 二级路由
			path: '/index',
			name: 'index',
			component: r => require.ensure([], () => r(require('./views/index.vue')), 'index'),
			children: [{
					path: 'home',
					meta: {
						title: "ShopPal"
					},
					component: r => require.ensure([], () => r(require('./views/main/home.vue')), 'main')
				},
			],	
		},
	]
})