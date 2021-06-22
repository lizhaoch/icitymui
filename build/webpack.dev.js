const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const baseConfig = require("./webpack.config");

module.exports = {
  devServer: {
    contentBase: "./",
    hot: true,
    inline: true,
    progress: true,
    port: 8080,
  },
  entry: {
    index: path.resolve(__dirname, "../test/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../public"),
  },
  module: baseConfig._module(),
  resolve: baseConfig.resolve(),
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../test/index.html"),
      inject: "body",
      chunks: ["index"],
    }),
  ],
};
