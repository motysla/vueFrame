import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/** api 按需引入，内部使用export方式；calc的export default为对象，也建议是使用到再引入（还能有代码提示） */

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

