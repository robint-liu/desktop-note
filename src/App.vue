<template>
  <div id="app">
    <Header />
    <Banner />
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// Header组件
import Header from "@components/header/index.vue";
// Banner组件
import Banner from "@components/banner/index.vue";
// 左侧菜单组件
import Menu from "@components/menu/index.vue";
// footer组件
import Footer from "@components/footer/index.vue";

export default {
  components: {
    Header,
    Banner,
    Menu,
    Footer
  }
};
</script>
