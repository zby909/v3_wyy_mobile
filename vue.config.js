const IS_PROD = ['production'].includes(process.env.VUE_APP_MODE);
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  productionSourceMap: IS_PROD ? false : true, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  assetsDir: 'static',
  lintOnSave: 'default', //default,warning,error,boolean
  devServer: {
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
      progress: true,
    },
    open: false, // 是否打开浏览器
    host: '0.0.0.0',
    port: '8080',
    proxy: {
      '/proxy': {
        target: 'http://192.168.46.172:5005/api/define', // 要代理的域名
        // target: 'http://127.0.0.1:5003/api/define', // 要代理的域名
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/proxy': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'My admin';
      return args;
    });
  },
});
