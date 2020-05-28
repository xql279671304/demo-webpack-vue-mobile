module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none';
      return args;
    });
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/variables.scss";'
      }
    }
  },
  devServer: {
    host: '127.0.0.1', // can be overwritten by process.env.HOST
    port: '8080'
    // open: true, // 是否自动用默认浏览器打开网页
    // disableHostCheck: true,
    // proxy: {
    //   '/business-web': {
    //     target: '',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       // '^/api': ''
    //     }
    //   }
    // }
  }
};
