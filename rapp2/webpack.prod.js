const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {

  optimization: {
      splitChunks: {
          cacheGroups: {
              commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendors",
                  filename: 'vendors.[chunkhash].js',
                  chunks: "all"
              }
          }
      }
  },
  // devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin(),
    // new MiniCssExtractPlugin({
    //     filename: '[name].[contenthash].css',
    //     allChunks: true
    // }),
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240,
        minRatio: 0.8
    })
    // new PreloadWebpackPlugin({
    //     rel: 'preload',
    //     as: 'script',
    //     include: 'all',
    //     fileBlacklist: [/\.(css|map)$/, /base?.+/]
    // }),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: function (module) {
    //         // this assumes your vendor imports exist in the node_modules directory
    //     // and will move all modules from there to separate bundle
    //         return module.context && module.context.indexOf('node_modules') !== -1;
    //     }
    // }),
  ]
});
