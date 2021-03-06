<template>
  <div class="todo-list-search">
    <a-form :form="form" layout="inline">
      <!-- 分组 -->
      <a-form-item label="分组">
        <a-select
          @change="onSubmit"
          style="width: 100px"
          placeholder="请选择"
          v-decorator="['group']"
        >
          <a-select-option v-for="i in group" :key="i.value">{{
            i.label
          }}</a-select-option>
        </a-select>
      </a-form-item>

      <!-- 优先级 -->
      <a-form-item>
        <span slot="label">
          <span>优先级&nbsp;</span>
          <a-tooltip placement="bottomLeft" title="不小于1的正整数，值越大，优先级越高。">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>

        <a-input-number
          :min="1"
          @change="onSubmit"
          v-decorator="['order']"
          placeholder="请选择"
          style="width: 100%"
        />
      </a-form-item>

      <!-- 时间 -->
      <a-form-item label="时间">
        <a-date-picker
          v-decorator="['time']"
          format="YYYY-MM-DD"
          placeholder="请选择"
          :disabledDate="disabledDate"
          :disabledTime="disabledDateTime"
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
          placeholder="请输入"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  import {group} from "@common/constant";
  
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
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < this.$moment().endOf("day");
    },

    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56]
      };
    },
    onSubmit() {
      // 函数防抖
      clearTimeout(this.dialogConfirmTimer);
      this.dialogConfirmTimer = setTimeout(() => {
        const fieldsValue = this.form.getFieldsValue();
        const values = {
          ...fieldsValue,
          time: fieldsValue["time"] && fieldsValue["time"].format("YYYY-MM-DD")
        };
        this.$store.commit("updateTodoCondition", values);
        this.search();
      }, 100);
    }
  },
  mounted() {
    // 当dom元素挂载后，获取接口数据
    this.onSubmit();
  }
};
</script>

<style scoped lang="less"></style>
