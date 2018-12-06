const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/path1': {
        target: 'host1',
        changeOrigin: true,
        pathRequiresRewrite: {}
      },
      '/path2': {
        target: 'host2',
        changeOrigin: true,
        pathRequiresRewrite: {}
      }
    }
  },
  css: {
    // css拆分，默认true
    extract: true,
    loaderOptions: {
      // css moudle 配置：https://www.jianshu.com/p/125f33c35446
      css: {
        localIdentName: '[name]__[local]-[hash:base64:5]',
        camelCase: true
      },
      sass: {
        // 给 sass-loader 传递选项，@/ 是 src/ 的别名，引入相对路径
        data: `@import "@/static/scss/theme.scss";`
      }
    }
  },
  pluginOptions: {
    // less通过官方向预处理器 Loader 传递选项配置无效，选择插件方案 vue-cli-plugin-style-resources-loader
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/static/less/mixin.less')]
    }
  }
}