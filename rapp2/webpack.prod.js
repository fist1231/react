const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const buildPath = path.join(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
  // devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[chunkhash].js',
        minChunks (module) {
            return module.context && module.context.indexOf('node_modules') >= 0;
        }
    }),
    new BundleAnalyzerPlugin(),
    // new HtmlWebpackPlugin({
    //     template: path.join(__dirname, 'src/index.js'),
    //     path: buildPath,
    //     excludeChunks: ['base'],
    //     filename: 'index.html',
    //     minify: {
    //         collapseWhitespace: true,
    //         collapseInlineTagWhitespace: true,
    //         removeComments: true,
    //         removeRedundantAttributes: true
    //     }
    // }),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        ie8: true,
        mangle: true,
        warnings: false, // good for prod apps so users can't peek behind curtain
        compress: true,
        output: {
            comments: false,
        },
      },
      sourceMap: true,
      // mangle: true,
      // unused: true,
      // dead_code: true, // big one--strip code that will never execute
      // warnings: false, // good for prod apps so users can't peek behind curtain
      // drop_debugger: true,
      // conditionals: true,
      // evaluate: true,
      // drop_console: true, // strips console statements
      // sequences: true,
      // booleans: true,
      // compress: {
      //   warnings: false, // Suppress uglification warnings
      //   pure_getters: true,
      //   unsafe: true,
      //   unsafe_comps: true,
      //   screw_ie8: true,
      // },
      // output: {
      //   comments: false,
      // }, // compress: false
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new PreloadWebpackPlugin({
    //     rel: 'preload',
    //     as: 'script',
    //     include: 'all',
    //     fileBlacklist: [/\.(css|map)$/, /base?.+/]
    // }),
    new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
    }),
    // new ExtractTextPlugin("styles.css"),
    new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        allChunks: true
    }),
    new StyleExtHtmlWebpackPlugin({
        minify: true
    }),
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240,
        minRatio: 0.8
    })
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
