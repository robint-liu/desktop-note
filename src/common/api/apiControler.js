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
    console.log("type", type);
    switch (type) {
      case undefined:
        if (!data || !data.length) {
          return {
            success: false,
            code: 200,
            errorMessage: "操作失败！",
            data: data
          };
        }
        return {
          success: true,
          code: 200,
          errorMessage: null,
          data: data
        };
      default:
        if (!data) {
          return {
            success: false,
            code: 200,
            errorMessage: "内容为空！",
            data: data
          };
        }
        return {
          success: true,
          code: 200,
          errorMessage: null,
          data: data
        };
    }
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
        let hasValue = false;
        switch (type) {
          case "add":
            return await desktopNote_DB.add(data);
          case "delete":
            return await desktopNote_DB.delete(id);
          case "update":
            return await desktopNote_DB
              .where(":id")
              .equals(id)
              .modify(rest);
          default:
            for (const value of Object.values(data)) {
              if (!Object.is(value, undefined)) {
                hasValue = true;
                break;
              }
            }
            console.log("hasValue", hasValue);
            if (hasValue) {
              return await desktopNote_DB
                .where(data)
                .limit(10)
                .toArray();
            } else {
              return await desktopNote_DB
                .orderBy(":id")
                .limit(10)
                .toArray();
            }
        }
      }
    );
    return this.formatData(tranRes, type);
  }
}

const handleIndexDb = new HandleIndexDb();

const apiControl = async params => {
  console.log("API_params --> ", params);
  const data = await handleIndexDb.operationDB(params);
  console.log("API_data --> ", data);
  return data;
};

export default apiControl;
