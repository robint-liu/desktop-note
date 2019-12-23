<template>
  <div class="my-memo-wrap page-common">
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
      console.log("search_params", this.$store.state.todoListCondition);
      const { data, success } = await API.getTodoList(
        this.$store.state.todoListCondition
      );
      if (success) {
        this.$store.commit("updateTodoList", data);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.my-memo-wrap {
}
</style>
