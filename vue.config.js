const path = require('path');
const isdev = process.env.NODE_ENV !== 'production';
// const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, dir);
}

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}
module.exports = {
  // 修改的配置
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
  outputDir: 'dist',
  assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  devServer: {
    host: '127.0.0.1', // can be overwritten by process.env.HOST
    port: '8080',
    open: true, // 是否自动用默认浏览器打开网页
    https: false, // 开启https，开启后最好用ip地址访问
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // eslint在浏览器窗口中的显示内容
    overlay: {
      warnings: true, // 是否显示警告信息
      errors: true // 是否显示错误信息
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      },
      scss: {
        prependData: `@import "@/assets/variables.scss";`
      }
    }
  },
  pluginOptions: {},
  configureWebpack: { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    /* resolve: {
      alias: {
        '@': './src'
      }
    }, */
    // 增加一个plugins
    plugins: [
      /* new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }) */
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('vue$', 'vue/dist/vue.esm.js');// key,value自行定义，比如.set('@@', resolve('src/components'))
    if (!isdev) {
      const splitOptions = config.optimization.get('splitChunks');
      splitOptions.cacheGroups.appStyles = {
        name: 'styles',
        test: (m, c, entry = 'app') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
        chunks: 'async',
        minChunks: 1,
        enforce: true
      };
      config.optimization.splitChunks(splitOptions);
    }
    config.plugins.delete('prefetch-index');
    // 移除 preload 插件
    config.plugins.delete('preload-index');
  },
  lintOnSave: isdev, // 生产环境关闭eslint在浏览器中的提示
  // 设置babel编译node_modules中的内容，默认情况下babel不会编译node_modules中的所有内容
  transpileDependencies: [], // [path.resolve('node_modules/_swiper@4.4.6@swiper')],
  // build后的静态资源压缩文件是否生成map文件，这个在线上调试时非常有用
  productionSourceMap: true
};

