<template>
  <div class="my-menu">
    <a-menu
      mode="inline"
      theme="light"
      class="ul-menu"
      style="{border-right: 0}"
      @click="clickMenu"
      :defaultOpenKeys="['about']"
      :defaultSelectedKeys="['index']"
      :inlineCollapsed="isMenuCollapsed"
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
  methods: {
    clickMenu({ keyPath }) {
      const route = util.getRoute(keyPath);
      console.log("route", route);
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
