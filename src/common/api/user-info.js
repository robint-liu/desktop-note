import util from "@util";
import apiControl from "./apiControler";
import { useHttpForApi } from "@root/local.config";

const getUserInfo = async () =>
  /*
   * await apiControl(params)
   * params:
   * url: 接口
   * data: 参数
   * dbName: 数据库-表名
   * */
  await apiControl({
    data: { id: "1" },
    dbName: "userInfo"
  });
export default {
  /* 获取用户信息 */
  getUserInfo(params = "/getUserInfo") {
    return useHttpForApi ? util.axios(params) : getUserInfo(params);
  }
};
