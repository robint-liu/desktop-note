/*
 *  content：webpack.base.config.js + uglifyJs
 * */

const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = (env, argv) => {
  const _baseConfig = baseConfig(null, argv);
  return merge(_baseConfig, {
    optimization: {
      minimize: true
    }
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     sourceMap: false,
    //     compress: {
    //       warnings: false,
    //       minimize: true,
    //       drop_debugger: true,
    //       drop_console: true
    //     }
    //   })
    // ]
  });
}
