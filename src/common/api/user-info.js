import apiControl from "./apiControler";

/*
 * await apiControl(params)
 * params:
 * url: 接口
 * data: 参数
 * dbName: 数据库-表名
 * */
const userInfo = async params =>
  await apiControl(Object.assign({ dbName: "userInfo" }, params));

export default {
  /* 获取用户信息 */
  getUserInfo(data) {
    const params = {
      url: "/userInfo/get",
      type: "login",
      data: {
        ...data
      }
    };
    return userInfo(params);
  },

  /* 新增用户信息 */
  addUserInfo(data) {
    const params = {
      type: "add",
      url: "/userInfo/register",
      data: {
        ...data
      }
    };
    return userInfo(params);
  }
};
