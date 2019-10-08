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

      <!-- 优先级 -->
      <a-form-item label="优先级" extra="不小于1的正整数，值越大，优先级越高">
        <a-input-number
          :min="1"
          @change="onSubmit"
          v-decorator="[
            'order',
            {
              initialValue: 1
            }
          ]"
          placeholder="Please Select"
          style="width: 100%"
        />
      </a-form-item>

      <!-- 时间 -->
      <a-form-item label="时间">
        <a-date-picker
          showTime
          v-decorator="[
            'time',
            {
              initialValue: this.$moment(this.$moment(), 'YYYY-MM-DD HH:mm:ss')
            }
          ]"
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Please Select"
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
          placeholder="Please input"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { todoList } from "@common/constant";
import { todoList as API } from "@common/api";

export default {
  name: "search.vue",
  props: {
    handleSubmit: {
      type: Function,
      required: true
    }
  },
  data() {
    console.log("this", this);
    return {
      form: this.$form.createForm(this),
      group: todoList.group,
      order: undefined
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
    onSubmit(e) {
      const event = e || window.event;
      event && event.preventDefault();
      // 函数防抖
      clearTimeout(this.dialogConfirmTimer);
      this.dialogConfirmTimer = setTimeout(() => {
        this.form.validateFields(async (err, fieldsValue) => {
          if (!err) {
            const values = {
              ...fieldsValue,
              time: fieldsValue["time"].format("YYYY-MM-DD HH:mm:ss")
            };
            console.log("onSubmit", values);
            this.handleSubmit(values);
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

<style scoped></style>
