import Vue from "vue";
import Router from "vue-router";
import Home from "@components/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "首页",
      component: Home
    },
    {
      path: "/index",
      name: "首页",
      component: Home
    },
    {
      path: "/todoList",
      name: "待办事项",
      component: () =>
        import(/* webpackChunkName: "todoList" */ "@components/todo-list")
    },
    {
      path: "/wallpaper",
      name: "我的壁纸",
      component: () =>
        import(/* webpackChunkName: "wallpaper" */ "@components/wallpaper")
    },
    {
      path: "/memo",
      name: "我的备忘",
      component: () => import(/* webpackChunkName: "memo" */ "@components/memo")
    },
    {
      path: "/about",
      name: "关于桌面记",
      component: () =>
        import(/* webpackChunkName: "about" */ "@components/about"),
      children: [
        {
          path: "introduction",
          name: "产品介绍",
          component: () =>
            import(
              /* webpackChunkName: "introduction" */ "@components/about/introduction.vue"
            )
        },
        {
          path: "contact",
          name: "联系我们",
          component: () =>
            import(
              /* webpackChunkName: "contact" */ "@components/about/contact.vue"
            )
        }
      ]
    },
    {
      path: "*",
      name: "not-exist",
      component: () =>
        import(/* webpackChunkName: "notExist" */ "@components/not-exist")
    }
  ]
});
