<template>
  <div class="todo-list-table">
    <div class="button-wrap">
      <a-button type="primary" @click="handleAdd">
        <a-icon type="plus" />新增
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :rowKey="record => record.id"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <span slot="operation" slot-scope="text, record, index">
        <a-button
          type="link"
          class="link-button"
          @click="() => handleEdit(record)"
          >编辑</a-button
        >
        <a-divider type="vertical" />
        <a-button
          type="link"
          class="link-button"
          @click="() => handleCopy(record)"
          >复制</a-button
        >
        <a-divider type="vertical" />

        <a-popconfirm title="确定删除吗？" @confirm="() => handleDelete(record, index)" cancelText="否" okText="是">
          <a-button
            type="link"
            class="link-button"
            >删除</a-button
          >
        </a-popconfirm>
      </span>
    </a-table>
    <item-modal :initialData="initialData" />
  </div>
</template>

<script>
import columns from "./columns";
import ItemModal from "./itemModal";
import { todoList as API } from "@common/api";

export default {
  name: "list.vue",
  data() {
    return {
      pagination: {
      },
      loading: false,
      columns,
      initialData: {}
    };
  },
  components: {
    "item-modal": ItemModal
  },
  props: {},
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    data: function() {
      return this.$store.state.todoList;
    },
    condition: function() {
      return this.$store.state.todoListCondition;
    }
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      const params = {
        ...this.condition,
        ...pagination,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      };
      console.log("handleTableChange", params);
      this.handleSubmit(params);
    },
    async handleSubmit(params) {
      const { data, success } = await API.getTodoList(params);
      if (success) {
        this.$store.commit("updateTodoList", data);
      }
    },
    handleAdd(e) {
      const event = e || window.event;
      event.stopPropagation();
      this.$store.commit("itemModalVisible");
      this.initialData = {};
    },
    handleEdit(record) {
      console.log("handleEdit", this);
      this.$store.commit("itemModalVisible");
      this.initialData = record;
    },
    handleCopy(record) {
      console.log("handleCopy");
      this.$store.commit("itemModalVisible");
      this.initialData = Object.assign({}, record, { isCopy: true });
    },
    handleDelete(record, index) {
      console.log("handleDelete");
      this.$store.commit("deleteTodoList", index);
    }
  }
};
</script>

<style scoped lang="less">
.todo-list-table {
  .button-wrap {
    margin-bottom: 10px;
    text-align: right;
  }
  .link-button {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover {
      color: #1890ff;
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
    }
  }
}
</style>
