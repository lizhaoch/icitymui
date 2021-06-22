const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

const baseConfig = require("./webpack.config")

module.exports = {
  entry: baseConfig.readComponentList(),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../lib"),
    libraryTarget: "commonjs2"
  },
  module: baseConfig._module(),
  resolve: baseConfig.resolve(),
  plugins: [
    new CleanWebpackPlugin({
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "../src/asset/iconfont.css"),
        to: path.join(__dirname, "../lib/iconfont.css")
      }
    ])
  ]
}
