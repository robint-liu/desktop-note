import {remote} from "electron";

const {session} = remote;

export const setCookie = async data => {
  if (typeof data !== "object") throw new Error("cookie 格式不正确！");
  // session.defaultSession.cookies.flushStore();
  const params = Object.assign({}, data, {
    url: "http://localhost",
    expirationDateDouble:
      Math.round(new Date().getTime() / 1000) + 3 * 24 * 60 * 60
  });
  return session.defaultSession.cookies.set(params);
};

export const getCookie = async data => {
  if (typeof data !== "object") throw new Error("cookie 格式不正确！");
  return session.defaultSession.cookies.get(data);
};
