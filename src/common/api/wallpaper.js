import util from "@util";

const wallpaperImgList = async params => ({
  success: true,
  errorMessage: null,
  data: await util.axios(params)
});

export default {
  /* 获取getWallpaperImgList */
  getWallpaperImgList(data) {
    const params = {
      url: "https://www.baidu.com/sugrec?ie=utf-8&prod=open_image",
      data
    };
    return wallpaperImgList(params);
  }
};
