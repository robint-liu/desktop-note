<template>
  <div class="home page-common" style="height: calc(100vh - 40px)">
    <Banner />
    <Notice />
  </div>
</template>

<script>
// Banner组件
import Banner from "@components/banner/index.vue";
// 右侧公告栏等组件
import Notice from "@components/notice/index.vue";
import "@common/style/common.less";

export default {
  name: "index",
  components: {
    Banner,
    Notice
  }
};
</script>

<style scoped lang="less">
.page-common {
  padding: 0;
}
</style>
