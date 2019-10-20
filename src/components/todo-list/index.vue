<template>
  <div class="todo-list-wrap page-common">
    <Search />
    <br />
    <List />
    <Update />
  </div>
</template>

<script>
import Search from "./search";
import List from "./list";
import Update from "./itemModal";
import "@common/style/common.less";

export default {
  name: "index.vue",
  data() {
    return {};
  },
  components: {
    Search,
    List,
    Update
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.todo-list-wrap {
}
</style>
