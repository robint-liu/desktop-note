import Dexie from "dexie";
import dbObjectStoreList from "./dbObjectStoreList";

Dexie.debug = true;

class IndexDB {
  init() {
    // 新建或更新数据库
    this.createIndexDB().catch(error => {
      console.error(error.stack);
    });
  }

  async createIndexDB() {
    if (window.desktopNote_DB) {
      window.desktopNote_DB.close();
    }
    const db = new Dexie("desktopNote_DB");
    db.on("versionchange", () => {
      db.close();
    });
    // 已被阻止（如果数据库升级被另一个选项卡或浏览器窗口阻止，从而保持了与数据库的连接打开，则发生“已阻止”事件。）
    db.on("blocked", () => false);
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
    const version = db.verno + 1;
    db.version(version).stores(objectStore);
    window.desktopNote_DB = db;
  }
}
export default new IndexDB();
