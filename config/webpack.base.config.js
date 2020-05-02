/*
 *  content：entry, output, module, resolve, plugins
 *  考虑点：
 *    一、入口
 *     1、使用路由时，进行单入口打包；
 *     2、不使用路由时，进行多入口打包；
 * */

const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const getDemandPaths = require("./demand-paths");

const localConfig = require("../local.config");
const isDev = process.env.NODE_ENV === "development";
const { demandPathsAble, demandPaths, entryFilesSuffix } = localConfig || {};
// const entries = getDemandPaths(demandPathsAble, demandPaths, entryFilesSuffix);
// console.log("entries", entries);

module.exports = {
  // 打包入口
  entry: {
    index: [
      require.resolve("@babel/polyfill"),
      path.resolve(__dirname, "../src/main.js")
    ]
  },
  //调试工具
  devtool: "cheap-module-eval-source-map",
  // 打包出口
  output: {
    pathinfo: true,
    path: path.join(__dirname, "../dist/"),
    publicPath: isDev
      ? "http://0.0.0.0:8888/"
      : path.join(__dirname, "../dist/"),
    filename: "js/[name].bundle.js"
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
      "@lib": path.join(__dirname, "../lib"),
      "@root": path.join(__dirname, "../")
    }
  },
  // 模块处理
  module: {
    // noParse: [], //防止webpack解析那些任何与给定正则表达式相匹配的文件
    rules: [
      {
        test: /\.vue$/,
        exclude: "/node_modules/",
        loader: "vue-loader"
      },
      {
        test: /\.js[x]?$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: "/node_modules/",
        loader: [
          "style-loader",
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: "/node_modules/",
        loader: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "fast-sass-loader"
        ]
      },
      {
        test: /\.less$/,
        exclude: "/node_modules/",
        loader: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|git)$/,
        exclude: "/node_modules/",
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "images/[name].[hash:8].[ext]"
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        exclude: "/node_modules/",
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ["es-us", "zh-cn"]
    })
  ]
};
