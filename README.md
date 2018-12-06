# vueFrame

## vue 项目的基础框架

- vue-universal-pc

1. 这是服务于pc端的构建，基于vue2.x，cli3
2. package.json内置了router，vuex，axios，less，sass
3. main.js全局引入了element-ui，swiper，路由钩子设置页面标题
4. vue.config.js配置了css module，less和sass的全局导入，devServer代理
5. router.js配置了页面重定向，二级路由（懒加载）
6. app.vue引入了浏览器样式重置
7. index.vue测试了css module，less和sass的全局导入

---

- vue-universal-h5

1. 这是服务于移动端的构建，基于vue2.x，cli3
2. package.json内置了router，vuex，axios，less，sass
3. main.js全局引入了element-ui，路由钩子设置页面标题，rem适配方案
4. vue.config.js配置了css module，less和sass的全局导入，devServer代理
5. router.js配置了页面重定向，懒加载路由
6. app.vue引入了浏览器样式重置
7. index.vue测试了css module，less和sass的全局导入
8. 引入和native桥接的js，native框架为`WebViewJavascriptBridge`

---
### 备注
- native 和 api 按需引入，内部使用export方式；calc的export default为对象，也建议是使用到再引入（还能有代码提示）

--
## TODO

1. eslint
2. 骨架屏
3. i18n
