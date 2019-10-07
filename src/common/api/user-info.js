import util from "@util";
import { useHttpForApi } from "@root/local.config";

// todo: indexedDB操作, 暂mock数据
function getUserInfo(params) {
  console.log("params：", params);
  return {
    success: true,
    errorMessage: null,
    data: {
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      signature: "我的世界我主宰！"
    }
  };
}

export default {
  /* 获取用户信息 */
  getUserInfo(params = "/getUserInfo") {
    return useHttpForApi ? util.axios(params) : getUserInfo(params);
  }
};
