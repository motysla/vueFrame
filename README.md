# vueFrame

vue项目的基础框架，分为pc电脑端和h5移动端

### use
1. clone项目到本地，按需要选择pc或者h5项目，`cd`进入到对应的项目下，通过`npm i`或者`cnpm i`下载依赖后运行
2. `cli3`是基于npm下载依赖。若是通过`cnpm`下载依赖会和`cli3`管理冲突，此时需要手动处理：如`element-ui`
  - cnpm i element-ui --save
  - cnpm uninstall element-ui --save

### vue-universal-pc

1. 这是服务于pc端的构建，基于vue2.x，cli3
2. package.json内置了router，vuex，axios，less，sass，element-ui，vue-i18n
3. main.js全局引入了element-ui，swiper，路由钩子设置页面标题，vue-i18n多语言支持
4. vue.config.js配置了css module，less和sass的全局导入，devServer代理
5. router.js配置了页面重定向，二级路由（懒加载）
6. app.vue引入了浏览器样式重置
7. index.vue测试了css module，less和sass的全局导入，vue-i18n多语言测试

### vue-universal-h5

1. 这是服务于移动端的构建，基于vue2.x，cli3
2. package.json内置了router，vuex，axios，less，sass，mint-ui,vue-i18n
3. main.js全局引入了element-ui，路由钩子设置页面标题，rem适配方案，vue-i18n多语言支持
4. vue.config.js配置了css module，less和sass的全局导入，devServer代理
5. router.js配置了页面重定向，懒加载路由
6. app.vue引入了浏览器样式重置
7. index.vue测试了css module，less和sass的全局导入，vue-i18n多语言测试
8. 引入和native桥接的js，native框架为`WebViewJavascriptBridge`

---

### 备注
- native 和 api 按需引入，内部使用export方式；calc的export default为对象，也建议是使用到再引入（还能有代码提示）

### TODO

1. eslint
2. 
