import util from "@util";
import { useHttpForApi } from "@root/local.config";

function middle(params, callback) {
  return useHttpForApi
    ? util.axios(params)
    : typeof callback === "function" && callback(params);
}

export default {
  /* 获取list */
  getTodoList(data) {
    const params = {
      url: "/todoList/list",
      data: {
        ...data
      }
    };
    return middle(params, params => {
      console.log("params：", params);
      return {
        success: true,
        errorMessage: null,
        data: [1, 2, 3, 4, 5]
      };
    });
  }
};
