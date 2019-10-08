<template>
  <div class="todo-list-list">
    <a-table
      :columns="columns"
      :rowKey="record => record.id"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
    </a-table>
  </div>
</template>

<script>
import columns from "./columns";
export default {
  name: "list.vue",
  data() {
    return {
      pagination: {},
      loading: false,
      columns
    };
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      const values = {
      
      };
      this.handleSubmit();
    }
  }
};
</script>

<style scoped></style>
