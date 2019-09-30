<template>
  <div class="todo-list-wrap page-common">
    <Search />
    <List />
    <Update />
  </div>
</template>

<script>
import Search from "./search";
import List from "./list";
import Update from "./update";
export default {
  name: "index.vue",
  components: {
    Search,
    List,
    Update
  }
};
</script>

<style lang="less" scoped>
  @import "../../common/style/common";
  .todo-list-wrap{
  
  }
</style>
