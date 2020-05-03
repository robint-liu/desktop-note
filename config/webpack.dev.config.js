const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const proxyOptions = require("./auxiliary-config/proxy-options");
const baseConfig = require("./webpack.base.config");

let devServer = {
  historyApiFallback: true,
  hot: true,
  overlay: true,
  compress: true,
  noInfo: true,
  host: "0.0.0.0",
  port: 8888,
  inline: true,
  contentBase: path.join(__dirname, "../dist")
};

const isProxy = process.env.NODE_ENV === "proxy";
if (isProxy) {
  devServer = Object.assign(devServer, { proxy: { "/mock": proxyOptions } });
}

module.exports = merge(baseConfig, {
  devServer,
  //调试工具
  devtool: "source-map",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: "桌面记",
      template: path.resolve(__dirname, "../src/assets/template.html"),
      favicon: path.resolve(__dirname, "../src/assets/favicon.ico")
    })
  ]
});
