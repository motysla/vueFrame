import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './config/locale'

/** api 按需引入，内部使用export方式；calc的export default为对象，也建议是使用到再引入（还能有代码提示） */

// 全局引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 全局引入vue-awesome-swiper - swiper
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

// 路由钩子
router.afterEach(to => {
  document.title = to.meta.title
})

const app = new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
})

// 骨架屏：如果js晚于css加载完成，那直接执行渲染
if (process.env.NODE_ENV === 'production' && window.STYLE_READY) {
  app.$mount('#app')
} else {
  app.$mount('#app')
}
