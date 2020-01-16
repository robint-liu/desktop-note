// 设置cookie
export const setCookie = data => {
  if (!Array.isArray(data)) {
    throw "cookie数据格式不是数组，请修正后再次尝试！";
  }
  //有效时间为3天
  const expires = 60 * 60 * 24 * 3;
  const d = new Date();
  d.setUTCSeconds(expires);
  const expiresDefault = d.toUTCString();
  for (let i = 0; i < data.length; i++) {
    const { name, value, expires = expiresDefault } = data[i] || {};
    document.cookie = `${name}=${value}; expires=${expires}`;
  }
};

// 获取cookie
export const getCookie = cname => {
  const name = cname + "=";
  const cookie = document.cookie.split(";");
  debugger;
  for (let item of cookie) {
    item = item.trim();
    if (item.includes(name)) {
      return item.substr(name.length);
    }
  }
};

// 重置cookie
export const delCookie = () => {};
