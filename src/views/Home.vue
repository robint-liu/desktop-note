<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Notice />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@components/HelloWorld.vue";
// 右侧公告栏等组件
import Notice from "@components/notice/index.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Notice
  }
};
</script>
