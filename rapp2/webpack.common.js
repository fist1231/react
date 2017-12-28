const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
	    new HtmlWebpackPlugin({
	        template: path.join(__dirname, 'public', 'index.html')
	      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          },          
          {
              test: /\.html$/,
              use: [{
                  loader: 'html-loader',
              }],
          },
          {
              test: /\.(png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
              use: ['url-loader'],
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};