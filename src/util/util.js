import { DB } from "@util";

export default {
  getRoute(list, isReverse = true) {
    let route = "/";
    if (isReverse) {
      route = route + list.reverse().join("/");
    } else {
      route = route + list.join("/");
    }
    return route;
  },

  // 数据库写入操作
  indexDBWrite(dbObjectStore, data = {}) {
    var request = DB.transaction([dbObjectStore], "readwrite")
      .objectStore(dbObjectStore)
      .add(data);

    request.onsuccess = () => {
      console.log("数据写入成功");
    };

    request.onerror = () => {
      console.log("数据写入失败");
    };
  },

  // 数据库读取操作
  indexDBRead(dbObjectStore, indexs) {
    var request = DB.transaction([dbObjectStore], "readwrite")
      .objectStore(dbObjectStore)
      .index(indexs);

    request.onsuccess = () => {
      if (request.result) {
        console.log("读取结果", request.result);
      } else {
        console.log("未获得数据记录");
      }
    };

    request.onerror = () => {
      console.log("数据读取失败");
    };
  }
};
