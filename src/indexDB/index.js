import dbObjectStoreList from "./dbObjectStoreList";

class IndexDB {
  init() {
    // 新建数据库
    this.createIndexDB();
  }
  createIndexDB() {
    // 新建数据库 or 打开数据库
    const request = window.indexedDB.open("desktopNote_DB");
    console.log("desktopNote_DB", request);
    request.onsuccess = function() {
      window.desktopNote_DB = request.result;
      console.log("desktopNote_DB数据库打开成功 --> ", request.result);
    };
    request.onupgradeneeded = event => {
      const db = event.target.result;
      window.desktopNote_DB = db;
      console.log("desktopNote_DB数据库更新成功 --> ", db);
      // 这张表格是否存在，如果不存在进行新建
      dbObjectStoreList.forEach(({ key, indexList = [] }) => {
        if (!db.objectStoreNames.contains(key)) {
          const objectStore = db.createObjectStore(key, { keyPath: "id" });
          // 建立索引
          indexList.forEach(item => {
            objectStore.createIndex(item.name, item.key, item.config);
          });
        }
      });
    };
  }
}
export default new IndexDB();
