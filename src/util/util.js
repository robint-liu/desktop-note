export default {
  getRoute(list, isReverse = true) {
    let route = "/";
    if (isReverse) {
      route = route + list.reverse().join("/");
    } else {
      route = route + list.join("/");
    }
    return route;
  }
};
