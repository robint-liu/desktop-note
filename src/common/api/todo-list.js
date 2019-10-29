import util from "@util";
import apiCentralCenter from "./apiCentralCenter";
import { useHttpForApi } from "@root/local.config";

function middle(params, callback) {
  return useHttpForApi
    ? util.axios(params)
    : typeof callback === "function" && callback(params);
}

const getTodoList = async (params) => {
  return await apiCentralCenter.query(params);
}

export default {
  /* 获取list */
  getTodoList(data) {
    const params = {
      dbName: "todoList",
      url: "/todoList/list",
      data: {
        // ...data,
        id: "1"
      }
    };
    return useHttpForApi ? util.axios(params) : getTodoList(params);
  },

  /* 新增或编辑todoList */
  addOrEditTodoList(data) {
    const params = {
      dbName: "todoList",
      url: "/todoList/addOrEdit",
      data: {
        ...data
      }
    };
    return middle(params, () => {
      return {
        success: true,
        errorMessage: null,
        data: null
      };
    });
  }
};
