/*
 *  content：webpack.base.config.js + devServer
 *  考虑点：
 *    一、入口
 *     1、使用路由时，进行单入口打包；
 *     2、不使用路由时，进行多入口打包；
 * */

const baseConfig = require("./webpack.base.config");

module.exports = baseConfig;
