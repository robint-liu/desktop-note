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
  formatData(data) {
    return {
      success: true,
      errorMessage: null,
      data: data
    };
  }
  async operationDB(params) {
    // dbName：表名；type：操作名
    const {
      dbName,
      data,
      data: { id, ...rest },
      type
    } = params || {};
    const desktopNote_DB = window.desktopNote_DB[dbName];
    const tranRes = await window.desktopNote_DB.transaction(
      "rw",
      desktopNote_DB,
      async () => {
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
            return await desktopNote_DB.where(data).toArray();
        }
      }
    );
    return this.formatData(tranRes);
  }
}

const handleIndexDb = new HandleIndexDb();

const apiControl = async params => {
  console.log("API_params --> ", params);
  const data = await handleIndexDb.operationDB(params);
  console.log("API_data --> ", data);
  return data;
  // return handleIndexDb.formatData(data);
};

export default apiControl;
