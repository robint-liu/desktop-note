/*
 *  基本的功能：entry、output、loader、resolve、plugins
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
  }
};
