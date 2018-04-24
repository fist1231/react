const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');


// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  entry: {
    // app: './src/index.js'
    app: ["babel-polyfill", "./src/index.js"],
    // rxjs: 'rxjs',
    // materialui: 'material-ui',
    // primereact: 'primereact',
    // chartjs: 'chart.js',
    // lodash: 'lodash'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      title: "Development"
    }),
    // new ExtractTextPlugin("styles.css"),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename:'[name].[chunkhash].css',
      allChunks: true
      // filename: "[name].css",
      // chunkFilename: "[id].css"
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].[chunkhash].bundle.js',    // filename: "[name].[chunkhash].js",
    // chunkFilename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  // optimization: {
  //   splitChunks: {
  //       chunks: "all",
  //       // minSize: 30000,
  //       // minChunks: 1,
  //       // maxAsyncRequests: 5,
  //       // maxInitialRequests: 3,
  //       // automaticNameDelimiter: '~',
  //       // name: true,
  //       // cacheGroups: {
  //       //     commons: {
  //       //         name: "commons",
  //       //         filename: 'commons.[chunkhash].js',
  //       //         chunks: "initial",
  //       //         minChunks: 2
  //       //     }
  //       // },
  //       cacheGroups: {
  //           vendors: {
  //               test: /[\\/]node_modules[\\/](?!(lodash|rxjs|material-ui|primereact|chart.js)[\\/].*)/,
  //               // priority: -10,
  //               name: "vendors",
  //               filename: 'vendors.[chunkhash].js',
  //               chunks: "all"
  //           },
  //           // others: {
  //           //     test: /[\\/]node_modules[\\/]((lodash|rxjs|material-ui|primereact|chart.js)[\\/].*)/,
  //           //     // priority: -10,
  //           //     name: 'others',
  //           //     filename: 'others.[chunkhash].js',
  //           //     chunks: "all"
  //           // },
  //           rxjs: {
  //               test: /[\\/]node_modules[\\/]((rxjs)[\\/].*)/,
  //               // priority: -10,
  //               name: "rxjs",
  //               filename: 'rxjs.[chunkhash].js',
  //               chunks: "all"
  //           },
  //           materialui: {
  //               test: /[\\/]node_modules[\\/]((material-ui)[\\/].*)/,
  //               // priority: -10,
  //               name: true,
  //               filename: 'materialui.[chunkhash].js',
  //               chunks: "all"
  //           },
  //           primereact: {
  //               test: /[\\/]node_modules[\\/]((primereact)[\\/].*)/,
  //               // priority: -10,
  //               name: true,
  //               filename: 'primereact.[chunkhash].js',
  //               chunks: "all"
  //           },
  //           chartjs: {
  //               test: /[\\/]node_modules[\\/]((chart.js)[\\/].*)/,
  //               // priority: -10,
  //               name: "chartjs",
  //               filename: 'chartjs.[chunkhash].js',
  //               chunks: "all"
  //           },
  //           lodash: {
  //               test: /[\\/]node_modules[\\/]((lodash)[\\/].*)/,
  //               // priority: -10,
  //               name: "lodash",
  //               filename: 'lodash.[chunkhash].js',
  //               chunks: "all"
  //           }
  //           // default: {
  //           //     minChunks: 2,
  //           //     priority: -20,
  //           //     reuseExistingChunk: true
  //           // }
  //       }
  //   }
  // },
    devServer: {
    historyApiFallback: true, // Fixes the 404/Cannot-GET errors on refresh/back/forward, but only for a single level of nested route
    contentBase: "./"
    // hot: true,
    // inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      // {
      //     test: /\.(png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
      //     use: ['url-loader'],
      // },
      {
        // test: /\.(ico)$/,
        test: /\.(ico|png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/"
              // publicPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
