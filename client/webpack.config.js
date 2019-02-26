const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src')+'/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  module: {
    rules: [
      {//js *** *** *** *** ***
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env","@babel/preset-react"]
          }
        }
      },// *** *** *** *** ***
      {//html *** *** *** *** ***
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      }// *** *** *** *** ***
    ]
  },
  devServer: {
    contentBase: path.join('__dirname','dist'),
    compress: true,
    port: 8000,
    hot: true,
    open: true
  }
};
