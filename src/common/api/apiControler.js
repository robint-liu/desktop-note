/*
 * title: 本地Index中间层处理
 * date: 2019/11/10
 * feat:
 * 增（add）、
 * 删(delete)、
 * 改(update)、
 * 查(where)
 * */

class HandleIndexDb {
  formatData(data, type) {
    let result = {
      success: !!data,
      errorMessage: "操作失败！",
      data: data
    };
    switch (type) {
      case undefined:
        result = Object.assign({}, result, {
          errorMessage: data ? null : "操作失败！"
        });
        break;
      case "delete":
        result = Object.assign({}, result, {
          errorMessage: null,
          data: !data,
          success: !data
        });
        break;
      case "login":
        result = Object.assign({}, result, {
          errorMessage: data.length ? null : "无账号信息！",
          data: data,
          success: !!data.length
        });
        break;
      default:
        result = Object.assign({}, result, {
          errorMessage: data ? null : "内容为空！",
          data: !!data
        });
        break;
    }
  
    return result;
  }
  async operationDB(params) {
    // dbName：表名；type：操作名
    const { dbName, data = {}, type } = params || {};
    const { id, ...rest } = data || {};
    const desktopNote_DB = window.desktopNote_DB[dbName];
    const tranRes = await window.desktopNote_DB.transaction(
      "rw",
      desktopNote_DB,
      async () => {
        let hasValue;
        const params = {};
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value = data[key];
            if (!Object.is(value, undefined)) {
              hasValue = true;
              params[key] = value;
            }
          }
        }
        switch (type) {
          case "add":
            return await desktopNote_DB.add(params);
          case "delete":
            return await desktopNote_DB.delete(id);
          case "update":
            return await desktopNote_DB
              .where(":id")
              .equals(id)
              .modify(rest);
          default: {
            let dbData;
            if (hasValue) {
              dbData = await desktopNote_DB
                .where(params)
                .limit(10)
                .toArray();
            } else {
              dbData = await desktopNote_DB
                .orderBy(":id")
                .limit(10)
                .toArray();
            }
            return dbData;
          }
        }
      }
    );
    return this.formatData(tranRes, type);
  }
}

const handleIndexDb = new HandleIndexDb();

const apiControl = async params => {
  const data = await handleIndexDb.operationDB(params);
  console.log("API_data --> ", data);
  return data;
};

export default apiControl;
