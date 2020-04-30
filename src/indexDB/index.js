import dbObjectStoreList from "./dbObjectStoreList";
import Dexie from "dexie";

Dexie.debug = true;

class IndexDB {
  init() {
    // 新建数据库
    this.createIndexDB();
  }
  createIndexDB() {
    const db = new Dexie("desktopNote_DB");
    window.desktopNote_DB = db;
    console.log("desktopNote_DB数据库版本 --> ", db.verno);
    console.log("desktopNote_DB数据库打开成功 --> ", db);
    const objectStore = {};
    dbObjectStoreList.forEach(({ key, indexList = [] }) => {
      let indexs = "";
      const length = indexList.length;
      indexList.forEach(({ key, syntax, related }, index) => {
        const suffix = index === length - 1 ? "" : ",";
        switch (syntax) {
          case "auto-incremented":
            indexs += "++" + key + suffix;
            break;
          case "unique":
            indexs += "&" + key + suffix;
            break;
          case "multi-entry":
            indexs += "*" + key + suffix;
            break;
          case "compound":
            indexs += `[${related.join("+")}]${suffix}`;
            break;
          default:
            indexs += key + suffix;
            break;
        }
      });
      objectStore[key] = indexs;
    });
    db.version(1).stores(objectStore);
  }
}
export default new IndexDB();
