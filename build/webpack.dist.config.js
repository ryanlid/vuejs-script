const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js')

process.env.NODE_ENV = 'production';
module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'vuejs-script.js',
    library: 'vuejs-script',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commontjs: 'vue',
      commontjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
})
