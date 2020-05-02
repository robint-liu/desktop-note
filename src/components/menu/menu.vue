<template>
  <div class="my-menu">
    <a-menu
      :defaultOpenKeys="['about']"
      :defaultSelectedKeys="[menuKey]"
      :inlineCollapsed="isMenuCollapsed"
      @click="clickMenu"
      class="ul-menu"
      mode="inline"
      style="{border-right: 0}"
      theme="light"
    >
      <a-menu-item key="index">
        <a-icon type="home" />
        <span>主页</span>
      </a-menu-item>
      <a-menu-item key="todoList">
        <a-icon type="contacts" />
        <span>待办事项</span>
      </a-menu-item>
      <a-menu-item key="memo">
        <a-icon type="bars" />
        <span>我的备忘</span>
      </a-menu-item>
      <a-menu-item key="wallpaper">
        <a-icon type="picture" />
        <span>我的壁纸</span>
      </a-menu-item>
      <a-sub-menu key="about">
        <span slot="title">
          <a-icon type="solution" />
          <span>关于桌面记</span>
        </span>
        <a-menu-item key="introduction">
          <a-icon type="book" />
          <span>产品介绍</span>
        </a-menu-item>
        <a-menu-item key="contact">
          <a-icon type="mail" />
          <span>联系我们</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import util from "@util";

export default {
  name: "onlyMenu",
  data() {
    return {
      menuKey: "index"
    };
  },
  created() {
    // 根据url path 设定默认菜单key
    this.getMenuKey();
  },
  methods: {
    getMenuKey() {
      // 匹配末尾path
      const regx = /(?<=\/)[a-zA-Z]+$/;
      const matchValue = this.$route.path.match(regx);
      if (matchValue) {
        this.menuKey = matchValue[0];
      }
    },
    clickMenu({ keyPath }) {
      const route = util.getRoute(keyPath);
      this.$router.push(route);
    }
  },
  props: {
    isMenuCollapsed: {
      type: Boolean,
      default: false,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.my-menu {
  ul.ul-menu {
    border: 0;
  }
}
</style>
