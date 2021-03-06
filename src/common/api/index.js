/*
 * title：公共接口
 * date：2019/09/27
 * author：刘杨
 * content：
 *   获取用户信息接口
 * */

import userInfo from "./user-info";
import todoList from "./todo-list";
import memo from "./memo";
import wallpaper from "./wallpaper.js";

export default {
  ...userInfo,
  ...todoList,
  ...memo,
  ...wallpaper
};
