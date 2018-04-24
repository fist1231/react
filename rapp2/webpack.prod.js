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
                  chunks: "all",
              }
          }
      }
  },


  // optimization: {
  //   splitChunks: {
  //       chunks: "async",
  //       minSize: 30000,
  //       minChunks: 1,
  //       maxAsyncRequests: 5,
  //       maxInitialRequests: 3,
  //       automaticNameDelimiter: '~',
  //       name: true,
  //       cacheGroups: {
  //           commons: {
  //               name: "commons",
  //               filename: 'commons.[chunkhash].js',
  //               chunks: "initial",
  //               minChunks: 2
  //           }
  //       },
  //       cacheGroups: {
  //           vendors: {
  //               test: /[\\/]node_modules[\\/](?!(lodash|rxjs|material-ui|primereact|chart.js)[\\/].*)/,
  //               priority: -10,
  //               name: "vendors",
  //               filename: 'vendors.[chunkhash].js',
  //               chunks: "all"
  //       },
  //       default: {
  //               minChunks: 2,
  //               priority: -20,
  //               reuseExistingChunk: true
  //           }
  //       }
  //   }
  // },

  // devtool: 'source-map',
  plugins: [
    // new webpack.optimize.AggressiveSplittingPlugin({
    //     minSize: 10000,
    //     maxSize: 200000,
    // }),
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
