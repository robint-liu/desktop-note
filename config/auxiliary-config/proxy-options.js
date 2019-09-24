const fs = require("fs");
const path = require("path");

//cookie文件请填写成具体应用域名的cookie
const cookie = fs.readFileSync(path.join(__dirname, "cookie"), "utf-8"); //配置本地调试访问日常接口

module.exports = {
  target: "http://gdata.cainiao.test:7001", //填写http或者https的完整域名如：http://fly.daily.cainiao-inc.com  https://z.cainiao.com
  secure: false,
  pathRewrite: {
    "^/mock": ""
  },
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader("Cookie", cookie);
  },
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers["Access-Control-Allow-Origin"] = "*";
  },
  onError: (err, req, res) => {
    res.writeHead(500, {
      "Content-Type": "text/plain"
    });
    res.end(err.toString());
  }
};
