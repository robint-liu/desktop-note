/*
 *  content：webpack.base.config.js + devServer
 * */

const path = require("path");
const merge = require("webpack-merge");
const proxyOptions = require("./auxiliary-config/proxy-options");
const baseConfig = require("./webpack.base.config");

let devServer = {
  historyApiFallback: true, // index.html很可能必须提供该页面来代替任何404响应。
  hot: true, // Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
  overlay: true, // Shows a full-screen overlay in the browser when there are compiler errors or warnings
  noInfo: true, // Tells dev-server to supress messages like the webpack bundle information. Errors and warnings will still be shown.
  host: "127.0.0.1", //主机
  port: 8088, // 端口
  inline: true, // 自动刷新
  open: true,
  contentBase: path.join(__dirname, "../dist")
};

module.exports = (env, argv) => {
  const _baseConfig = baseConfig(null, argv);
  if (argv.mode == "proxy") {
    devServer = Object.assign(devServer, { proxy: { "/mock": proxyOptions } });
  }
  return merge(_baseConfig, { devServer });
};
