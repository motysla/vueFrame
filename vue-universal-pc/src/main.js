import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 全局引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局引入 vue-awesome-swiper - swiper
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

// 路由钩子
router.afterEach((to) => {
	document.title = to.meta.title;
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

