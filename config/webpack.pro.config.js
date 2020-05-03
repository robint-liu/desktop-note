const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  mode: "production",
  //调试工具
  devtool: "cheap-module-eval-source-map",
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      minChunks: 3,
      automaticNameDelimiter: "~"
    },
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/assets/template.html"),
      hash: true,
      filename: "index.html",
      showErrors: true,
      inject: true,
      title: "桌面记",
      favicon: path.resolve(__dirname, "../src/assets/favicon.ico"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
});
