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
        data: [
          {
            id: "1",
            group: "0",
            order: 1,
            time: "2019/10/08 11:41:29",
            text: "this is a test!",
            status: "0"
          },
          {
            id: "2",
            group: "0",
            order: 1,
            time: "2019/10/08 11:41:29",
            text: "this is a test!",
            status: "1"
          },
          {
            id: "3",
            group: "0",
            order: 1,
            time: "2019/10/08 11:41:29",
            text: "this is a test!",
            status: "2"
          }
        ]
      };
    });
  }
};
