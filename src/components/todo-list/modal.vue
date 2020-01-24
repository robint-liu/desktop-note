<template>
  <a-modal
    title="待办事项"
    :visible="visible"
    @ok="handleOk"
    :confirmLoading="confirmLoading"
    wrapClassName="todo-list-update"
    @cancel="handleCancel"
    cancelText="取消"
    okText="提交"
  >
    <a-form :form="form" layout="horizontal">
      <!-- 时间 -->
      <a-form-item v-bind="formItemLayout" label="时间">
        <a-date-picker
          v-bind:showToday="false"
          style="width: 100%"
          v-decorator="[
            'time',
            {
              rules: [{ required: true, message: '请选择时间' }],
              initialValue:
                initialData.time && this.$moment(initialData.time, 'YYYY-MM-DD')
            }
          ]"
          format="YYYY-MM-DD"
          placeholder="请选择"
          :disabledDate="disabledDate"
          :ok="() => {}"
        />
      </a-form-item>

      <!-- 分组 -->
      <a-form-item v-bind="formItemLayout" label="分组">
        <a-select
          style="width: 100%"
          placeholder="请选择"
          v-decorator="[
            'group',
            {
              rules: [{ required: true, message: '请选择分组' }],
              initialValue: initialData.group
            }
          ]"
        >
          <a-select-option v-for="i in group" :key="i.value">{{
            i.label
          }}</a-select-option>
        </a-select>
      </a-form-item>

      <!-- 优先级 -->
      <!--      <a-form-item labelCol="{span: 4}" wrapperCol="{ span: 16 }">-->
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          优先级&nbsp;
          <a-tooltip title="不小于1的正整数，值越大，优先级越高">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input-number
          :min="1"
          style="width: 100%"
          v-decorator="[
            'order',
            {
              rules: [{ required: true, message: '请输入优先级' }],
              initialValue: initialData.order
            }
          ]"
          placeholder="请输入"
        />
      </a-form-item>

      <!-- 正文 -->
      <a-form-item v-bind="formItemLayout" label="正文">
        <a-textarea
          v-decorator="[
            'text',
            {
              rules: [{ required: true, message: '请输入正文' }],
              initialValue: initialData.text
            }
          ]"
          style="width: 100%"
          placeholder="请输入"
        />
      </a-form-item>

      <!-- 重复提醒 -->
      <a-form-item v-bind="formItemLayout" label="重复">
        <a-checkbox
          v-decorator="[
            'repeat',
            { valuePropName: 'checked', initialValue: initialData.repeat }
          ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { group } from "@common/constant";
import API from "@common/api";

export default {
  name: "update.vue",
  data() {
    return {
      form: this.$form.createForm(this),
      group: group,
      confirmLoading: false,
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 18 }
      }
    };
  },
  props: {
    initialData: {
      type: Object,
      default: () => ({})
    },
    search: Function
  },
  computed: {
    visible: function() {
      return this.$store.state.todoListModalVisible;
    }
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
    async handleOk() {
      // 函数防抖
      clearTimeout(this.dialogConfirmTimer);
      this.dialogConfirmTimer = setTimeout(() => {
        this.form.validateFields(async (err, fieldsValue) => {
          if (!err) {
            this.confirmLoading = true;
            const { id, isCopy } = this.initialData;
            const idObj = isCopy ? { id } : {};
            const values = {
              ...fieldsValue,
              time: fieldsValue["time"].format("YYYY-MM-DD"),
              ...idObj
            };
            this.$store.commit("updateTodoCondition", values);
            const { success } = await API.addOrEditTodoList(values);
            if (success) {
              this.$store.commit("todoListModalVisible");
              this.confirmLoading = false;
              this.form.resetFields();
              this.search();
              this.$message.success("提交成功", 2);
            }
          }
        });
      }, 100);
    },
    handleCancel() {
      this.$store.commit("todoListModalVisible");
      this.form.resetFields();
    }
  }
};
</script>

<style scoped lang="less"></style>
