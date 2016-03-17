const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

const config = {
  entry: {
    react: ['react'],
    jquery: ['jquery']
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH
      }, {
        test: /\.html$/,
        loader: 'raw',
        include: APP_PATH
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['react', 'jquery', 'vender'],
      minChunks: Infinity
    })
  ],

  devServer: {
    // 设置index.html页面所在目录
    contentBase: 'dist',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 9018
  },
  devtool: 'source-map'
};

const tplPath = path.resolve(APP_PATH, 'templates');
const fileArray = fs.readdirSync(tplPath);

// 根据templates目录中的模板文件,确定编译后的js,以及html等
const fileSettings = fileArray.reduce((result, fileName) => {
  if (/\.html$/.test(fileName)) {
    const newFileName = fileName.replace(/\.html$/, '');
    result.push({
      entry: {
        [`${newFileName}/${newFileName}`]: `${APP_PATH}/${newFileName}.jsx`
      },
      htmlPlugin: new HtmlWebpackPlugin({
        title: newFileName,
        filename: `${newFileName}/${fileName}`,
        template: `${tplPath}/${fileName}`,
        chunks: ['vender', 'react', 'jquery', `${newFileName}/${newFileName}`],
        chunksSortMode: (function sort() {
          const modes = {
            vender: 1,
            react: 2,
            jquery: 3
          };
          return (a, b) => {
            const modeA = modes[a.names[0]] || 1000;
            const modeB = modes[b.names[1]] || 2000;
            return modeB - modeA;
          };
        }())
      })
    });
  }
  return result;
}, []);

fileSettings.forEach((v) => {
  Object.assign(config.entry, v.entry);
  config.plugins.push(v.htmlPlugin);
});

module.exports = config;

