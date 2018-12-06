import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/** native 和 api 按需引入，内部使用export方式；calc的export default为对象，也建议是使用到再引入（还能有代码提示） */

// Rem适配方案
import Rem from './config/rem'
Rem.rem();

// 全局引入 mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

Vue.config.productionTip = false

// 路由钩子
router.afterEach((to) => {
	document.title = to.meta.title;
});

const app = new Vue({
  store,
  router,
  render: h => h(App)
})

// 如果 JS 晚于 CSS 加载完成，那直接执行渲染
if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    app.$mount('#app')
  }
} else {
  app.$mount('#app')
}

