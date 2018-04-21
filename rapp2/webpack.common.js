const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');


// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
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
    new CleanWebpackPlugin(["dist"])
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
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
