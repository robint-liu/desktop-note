import _axios from "axios";
import { Modal } from "ant-design-vue/es";

export default {
  // 二次封装接口
  async axios(params) {
    // 拿到参数直接进行接口请求
    return await _axios(params)
      .then(res => res)
      .catch(error => {
        Modal.error({
          title: "接口出错",
          content: error.Msg || error.errorMsg
        });
      });
  }
};
