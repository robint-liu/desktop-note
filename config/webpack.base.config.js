/*
 *  content：entry, output, loader, resolve, some plugins
 *  考虑点：
 *    一、入口
 *     1、使用路由时，进行单入口打包；
 *     2、不使用路由时，进行多入口打包；
 * */

const webpack = require("webpack");
const path = require("path");
const localConfig = require("../local.config");
const getDemandPaths = require("./demand-paths");

const { demandPathsAble, demandPaths, entryFilesSuffix } = localConfig || {};

module.exports = {
  // 打包入口
  entry: getDemandPaths(demandPathsAble, demandPaths, entryFilesSuffix),
  //调试工具
  devtool: "eval-source-map",
  // 打包出口
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js",
    publicPath: "/"
  },
  // 模块解析
  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
    alias: {
      "@components": path.join(__dirname, "../src/components"),
      "@common": path.join(__dirname, "../src/common"),
      "@assets": path.join(__dirname, "../src/assets"),
      "@views": path.join(__dirname, "../src/views"),
      "@mock": path.join(__dirname, "../src/mock"),
      "@util": path.join(__dirname, "../src/util"),
      "@src": path.join(__dirname, "../src"),
      "@lib": path.join(__dirname, "../lib")
    }
  },
  // 外部扩展
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // "hlj-components": path.join(
    //   __dirname,
    //   "../node_modules/@hlj/hlj-components"
    // ),
    // antd: "Antd",
    // bizCharts: "BizCharts"
  }
};
