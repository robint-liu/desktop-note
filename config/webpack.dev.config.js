const path = require("path");
const merge = require("webpack-merge");
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

module.exports = merge(baseConfig, { devServer });
