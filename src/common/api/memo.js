import util from "@util";
import apiControl from "./apiControler";
import { useHttpForApi } from "@root/local.config";

const memoList = async params =>
  useHttpForApi ? util.axios(params) : await apiControl(params);

export default {
  /* 获取list */
  getMemoList(data) {
    const params = {
      dbName: "memoList",
      url: "/memoList/list",
      data
    };
    return memoList(params);
  },

  /* 新增或编辑memoList */
  addOrEditMemoList(data) {
    const params = {
      dbName: "memoList",
      type: data.id ? "update" : "add",
      url: "/memoList/addOrEdit",
      data: {
        ...data
      }
    };
    return memoList(params);
  }
};
