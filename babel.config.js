module.exports = {
  presets: ["@vue/app", "@babel/preset-env"],
  plugins: [
    "react-hot-loader/babel",
    [
      "import",
      {
        libraryName: "antd",
        style: true
      }
    ]
  ]
};
