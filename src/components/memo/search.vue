<template>
  <div class="todo-list-search">
    <a-form :form="form" layout="inline">
      <!-- 分组 -->
      <a-form-item label="分组">
        <a-select
          mode="multiple"
          @change="onSubmit"
          style="width: 100%"
          placeholder="Please select"
          v-decorator="[
            'group',
            {
              initialValue: '0'
            }
          ]"
        >
          <a-select-option v-for="i in group" :key="i.value">{{
            i.label
          }}</a-select-option>
        </a-select>
      </a-form-item>

      <!-- 时间 -->
      <a-form-item label="时间">
        <a-date-picker
          v-decorator="[
            'time',
            {
              initialValue: this.$moment(this.$moment(), 'YYYY-MM-DD')
            }
          ]"
          format="YYYY-MM-DD"
          placeholder="Please Select"
          @change="onSubmit"
          @ok="onSubmit"
        />
      </a-form-item>

      <!-- 正文 -->
      <a-form-item label="正文">
        <a-input
          v-decorator="['text']"
          style="width: 100%"
          @change="onSubmit"
          placeholder="Please input"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { group } from "@common/constant";

export default {
  name: "search.vue",
  props: {
    search: Function
  },
  data() {
    return {
      form: this.$form.createForm(this),
      group: group
    };
  },
  methods: {
    onSubmit() {
      // 函数防抖
      clearTimeout(this.dialogConfirmTimer);
      this.dialogConfirmTimer = setTimeout(() => {
        this.form.validateFields(async (err, fieldsValue) => {
          if (!err) {
            const values = {
              ...fieldsValue,
              time: fieldsValue["time"].format("YYYY-MM-DD")
            };
            this.$store.commit("updateTodoCondition", values);
            this.search();
          }
        });
      }, 100);
    }
  },
  mounted() {
    this.onSubmit();
  }
};
</script>

<style scoped lang="less"></style>
