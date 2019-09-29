/*
 * title：公共接口
 * date：2019/09/27
 * author：刘杨
 * content：
 *   获取用户信息接口
 * */

import util from "@util";
import { useHttpForApi } from "@root/local.config";

// 通过接口获取途径进行中间层处理
function middle(params) {
  return useHttpForApi ? util.axios(params) : local(params);
}

// indexedDB操作
function local(params) {
  console.log("local_params：", params);
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
  getUserInfo(){
    return middle("/getUserInfo");
  }
};
