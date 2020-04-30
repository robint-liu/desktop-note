import util from "@util";
import apiControl from "./apiControler";
import {useHttpForApi} from "@root/local.config";

const todoList = async params =>
  useHttpForApi ? util.axios(params) : await apiControl(params);

export default {
  /* 获取list */
  getTodoList(data) {
    const params = {
      dbName: "todoList",
      url: "/todoList/list",
      data
    };
    return todoList(params);
  },
  
  /* 删除list item */
  deleteTodoList(data) {
    const params = {
      dbName: "todoList",
      type: "delete",
      url: "/todoList/delete",
      data
    };
    return todoList(params);
  },

  /* 新增或编辑todoList */
  addOrEditTodoList(data) {
    const params = {
      dbName: "todoList",
      type: data.id ? "update" : "add",
      url: "/todoList/addOrEdit",
      data: {
        ...data
      }
    };
    return todoList(params);
  }
};
