<template>
  <div class="home">
    <Banner />
    <Notice />
  </div>
</template>

<script>
// Banner组件
import Banner from "@components/banner/index.vue";
// 右侧公告栏等组件
import Notice from "@components/notice/index.vue";

export default {
  name: "home",
  components: {
    Banner,
    Notice
  }
};
</script>
