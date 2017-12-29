const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
  filename: 'styles.css'
});

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
	        template: 'public/index.html',
          title: 'Production'
	    }),
      extractPlugin,
      new ExtractTextPlugin("styles.css"),
      new CleanWebpackPlugin(['dist'])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
    //publicPath: '/dist'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
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
              test: /\.(ico)$/,
              use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    // publicPath: 'img/'
                  }
              }],
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.scss$/,
              use: extractPlugin.extract( {
                use: ['css-loader', 'sass-loader']
              })
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
