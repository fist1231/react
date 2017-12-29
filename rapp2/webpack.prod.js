const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    // new UglifyJsPlugin()
    new UglifyJsPlugin({
      sourceMap: true,
      // compress: false
    })
  ]
});
