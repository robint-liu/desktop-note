/*
 * title：获取打包入口
 * date：2019/09/21
 * entry-params：
 *    demandPathsAble，是否启用按需路径，boolean默认值为false
 *    demandPaths，按需路径，array || string，默认值为""，即全部内容；被赋值时(赋值类型为array和string)，指定待打包文件
 *    entryFilesSuffix，string，按需路径的文件后缀，默认值为vue
 * output-params:
 *    文件路径，array或string
 * */
const path = require("path");
const glob = require("glob");

const getActualPath = _path => {
  return glob.sync(path.join(__dirname, _path));
};

module.exports = (
  demandPathsAble = false,
  demandPaths = "",
  entryFilesSuffix = "vue"
) => {
  if (!demandPathsAble) {
    return getActualPath(`../src/views/**/index.${entryFilesSuffix}`);
  }
  const type = Object.prototype.toString.call(demandPaths);
  let buildPaths = [];
  if (type === "[object Array]") {
    //多入口文件-处理
    for (let i = 0; i < demandPaths.length; i++) {
      const item = demandPaths[i];
      buildPaths.push(
        getActualPath(`../src/views/${item}/**/index.${entryFilesSuffix}`)
      );
    }
    return buildPaths;
  } else if (type === "[object String]") {
    // 单文件入库-处理
    buildPaths.push(
      getActualPath(`../src/views/${demandPaths}/**/index.${entryFilesSuffix}`)
    );
    return buildPaths;
  } else {
    //容错处理，统一处理为全部路径
    return getActualPath(`../src/views/**/index.${entryFilesSuffix}`);
  }
};
