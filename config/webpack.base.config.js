/*
 *  content：entry, output, module, resolve, plugins
 *  考虑点：
 *    一、入口
 *     1、使用路由时，进行单入口打包；
 *     2、不使用路由时，进行多入口打包；
 * */

const webpack = require("webpack");
const path = require("path");
const localConfig = require("../local.config");
const getDemandPaths = require("./demand-paths");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

const entries = getDemandPaths(demandPathsAble, demandPaths, entryFilesSuffix);
const { demandPathsAble, demandPaths, entryFilesSuffix } = localConfig || {};

let plugins = [
  new VueLoaderPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: ["vendor", "runtime"],
    filename: "common.js",
    minChunks: 3
  }),
  new webpack.HotModuleReplacementPlugin(), //模块热替换，启用后会暴露接口module.hot
  new CopyWebpackPlugin([
    // Copies individual files or entire directories, which already exist, to the build directory.
    {
      from: path.join(__dirname, "../src/lib"),
      to: path.join(__dirname, "../dist/lib")
    }
  ]),
  new ExtractTextPlugin("css/[name].css"), // Extract text from a bundle, or bundles, into a separate file.
  new MomentLocalesPlugin({
    // Easily remove unused Moment.js locales when building with webpack, Strip unused locales from Moment.js
    localesToKeep: ["es-us", "zh-cn"]
  })
];

Object.keys(entries).forEach(function(name) {
  if (name != "vendor") {
    var plugin = new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
      hash: false,
      title: "",
      filename: name + ".htm",
      inject: true
    });
    plugins.push(plugin);
  }
});

module.exports = {
  // 打包入口
  entry: entries,
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
  // 外部扩展，需要时逐一使用
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // "hlj-components": path.join(
    //   __dirname,
    //   "../node_modules/@hlj/hlj-components"
    // ),
    // antd: "Antd",
    // bizCharts: "BizCharts"
  },
  // 模块处理
  module: {
    noParse: [], //防止webpack解析那些任何与给定正则表达式相匹配的文件
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
        loader: ["style-loader", "css-loader"]
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
        loader: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|git)$/,
        exclude: "/node_modules/",
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        exclude: "/node_modules/",
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },
  plugins: plugins
};
