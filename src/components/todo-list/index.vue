<template>
  <div class="todo-list-wrap page-common">
    <Search :handleSubmit="handleSubmit" />
    <List :data="todoList" :handleSubmit="handleSubmit" :condition=""/>
    <Update />
  </div>
</template>

<script>
import Search from "./search";
import List from "./list";
import Update from "./update";
import { todoList as API } from "@common/api";
export default {
  name: "index.vue",
  components: {
    Search,
    List,
    Update
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    todoList: function() {
      return this.$store.state.todoList;
    }
  },
  methods: {
    async handleSubmit(values) {
      const { data, success } = await API.getTodoList(values);
      if (success) {
        this.$store.commit("updateTodoList", data);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/common";
.todo-list-wrap {
}
</style>
