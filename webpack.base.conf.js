var path = require('path')
var config = require('../config')
var cssLoader = require('./css-loader')
var projectRoot = path.resolve(__dirname,'../')


module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve:{
    extensions: ['','.js','.vue'],
    fallback:[path.join(_dirname,'../node_module')],
    alias: {
      'src': path.resolve(_dirname,'../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname,'../node_module')]
  },
  module:{
    preLoader:[
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modles/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modles/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:/\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclued: /node_modules/
      },
      {
        test:/\.html$/,
        loader: 'url',
        query:{
          limit: 10000,
          name: path.join(config.build.assetsSubDirectory,'[name].[ext]?[hash:7]')
        }
      }
    ]
  },
  vue:{
    loaders:cssLoaders()
  },
  eslint:{
    formatter: require('eslint-friendly-formatter')
  }
}


