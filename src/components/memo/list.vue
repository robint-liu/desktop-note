<template>
  <div class="memo-list-table">
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

        <a-popconfirm
          title="确定删除吗？"
          @confirm="() => handleDelete(record, index)"
          cancelText="否"
          okText="是"
        >
          <a-button type="link" class="link-button">删除</a-button>
        </a-popconfirm>
      </span>
    </a-table>
    <my-modal :initialData="initialData" :search="search" />
  </div>
</template>

<script>
import columns from "./columns";
import Modal from "./modal";

export default {
  name: "list.vue",
  data() {
    return {
      pagination: {},
      loading: false,
      columns,
      initialData: {}
    };
  },
  components: {
    "my-modal": Modal
  },
  props: {
    search: {
      type: Function,
      required: true
    }
  },
  computed: {
    data: function() {
      return this.$store.state.memoList;
    },
    condition: function() {
      return this.$store.state.memoCondition;
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
      this.$store.commit("memoCondition", params);
      this.search();
    },
    handleAdd(e) {
      const event = e || window.event;
      event.stopPropagation();
      this.$store.commit("memoModalVisible");
      this.initialData = {};
    },
    handleEdit(record) {
      this.$store.commit("memoModalVisible");
      this.initialData = record;
    },
    handleCopy(record) {
      this.$store.commit("memoModalVisible");
      this.initialData = Object.assign({}, record, { isCopy: true });
    },
    handleDelete(record, index) {
      this.$store.commit("deleteMemoList", index);
    }
  }
};
</script>

<style scoped lang="less">
.memo-list-table {
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
