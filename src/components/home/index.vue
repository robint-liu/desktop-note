<template>
  <div id="app">
    <Header />
    <Menu>
      <template #menuRight>
        <router-view />
      </template>
    </Menu>
  </div>
</template>

<script>
// Header组件
import Header from "@components/header/index.vue";
// 左侧菜单组件
import Menu from "@components/menu/index.vue";

export default {
  name: "home",
  components: {
    Header,
    Menu
  }
};
</script>

<style scoped lang="less">
#app {
  width: 100%;
  position: relative;
}
</style>
