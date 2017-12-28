const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
	    // Makes the public URL available as %PUBLIC_URL% in index.html, e.g.:
	    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
	    new InterpolateHtmlPlugin({
	      PUBLIC_URL: path.join(__dirname, 'public')
	      // You can pass any key-value pairs, this was just an example.
	      // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
	    }),
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