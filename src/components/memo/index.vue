<template>
  <div class="my-memo-wrap page-common" style="height: calc(100vh - 40px)">
    <Search :search="query" />
    <br />
    <List :search="query" />
  </div>
</template>

<script>
import Search from "./search";
import List from "./list";
import API from "@common/api";
import "@common/style/common.less";

export default {
  name: "index.vue",
  data() {
    return {};
  },
  components: {
    Search,
    List
  },
  methods: {
    async query() {
      console.log("search_params", this.$store.state.memoCondition);
      const { data, success } = await API.getMemoList(
        this.$store.state.memoCondition
      );
      if (success) {
        this.$store.commit("updateMemoList", data);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.my-memo-wrap {
}
</style>
