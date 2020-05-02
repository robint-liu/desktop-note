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
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const getDemandPaths = require("./demand-paths");

const localConfig = require("../local.config");
const { demandPathsAble, demandPaths, entryFilesSuffix } = localConfig || {};
// const entries = getDemandPaths(demandPathsAble, demandPaths, entryFilesSuffix);
// console.log("entries", entries);

let plugins = [
  new VueLoaderPlugin(),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: ["vendor", "runtime"],
  //   filename: "index.js",
  //   minChunks: 3
  // }),
  new webpack.HotModuleReplacementPlugin(), //模块热替换，启用后会暴露接口module.hot
  // new CopyWebpackPlugin([
  // Copies individual files or entire directories, which already exist, to the build directory.
  // {
  //   from: path.join(__dirname, "../src/lib"),
  //   to: path.join(__dirname, "../dist/lib")
  // }
  // ]),
  new MiniCssExtractPlugin({
    filename: "css/[name].css"
  }), // Extract text from a bundle, or bundles, into a separate file.
  new MomentLocalesPlugin({
    // Easily remove unused Moment.js locales when building with webpack, Strip unused locales from Moment.js
    localesToKeep: ["es-us", "zh-cn"]
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../src/assets/template.html"),
    hash: true,
    filename: "index.html",
    showErrors: true,
    inject: true,
    title: "桌面记",
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
];
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  // 打包入口
  entry: {
    index: path.resolve(__dirname, "../src/main.js")
  },
  //调试工具
  // devtool: "cheap-module-eval-source-map",
  devtool: "source-map",
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
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: "/node_modules/",
        loader: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Adds CSS to the DOM by injecting a <style> tag,
          "css-loader", // The css-loader interprets @import and url() like import/require() and will resolve them
          "postcss-loader", // PostCSS is a tool for transforming styles with JS plugins，The Autoprefixer PostCSS plugin is one of the most popular CSS processors.
          "fast-sass-loader" // Blazingly fass loader for webpack
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
        loader: "url-loader?limit=8192" // A loader for webpack which transforms files into base64 URIs
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        exclude: "/node_modules/",
        loader: "file-loader?name=[path][name].[ext]" //
      }
    ]
  },
  plugins: plugins
  // optimization:{
  //   splitChunks:{
  //     chunks: "async",
  //     minChunks: 3,
  //     automaticNameDelimiter: '~'
  //   },
  //   runtimeChunk: true
  // }
};
