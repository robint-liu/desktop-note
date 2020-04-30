<template>
  <a-modal
    title="我的备忘"
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
                :disabledDate="disabledDate"
                format="YYYY-MM-DD"
                placeholder="请选择"
                style="width: 100%"
                v-bind:showToday="false"
                v-decorator="[
            'time',
            {
              rules: [{ required: true, message: '请选择时间' }],
              initialValue:
                initialData.time && this.$moment(initialData.time, 'YYYY-MM-DD')
            }
          ]"
        />
      </a-form-item>

      <!-- 分组 -->
      <a-form-item v-bind="formItemLayout" label="分组">
        <a-select
                placeholder="请选择"
                style="width: 100%"
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

      <!-- 正文 -->
      <a-form-item v-bind="formItemLayout" label="正文">
        <a-textarea
                placeholder="请输入"
                style="width: 100%"
                v-decorator="[
            'text',
            {
              rules: [{ required: true, message: '请输入正文' }],
              initialValue: initialData.text
            }
          ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
  import {group} from "@common/constant";
  import API from "@common/api";
  
  export default {
  name: "update.vue",
  data() {
    return {
      form: this.$form.createForm(this),
      group: group,
      confirmLoading: false,
      formItemLayout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 20 }
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
      return this.$store.state.memoModalVisible;
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
      return current < this.$moment().endOf("day");
    },
    async handleOk() {
      // 函数防抖
      clearTimeout(this.dialogConfirmTimer);
      this.dialogConfirmTimer = setTimeout(() => {
        this.form.validateFields(async (err, fieldsValue) => {
          if (!err) {
            this.confirmLoading = true;
            const { id, isCopy } = this.initialData;
            const idObj = isCopy ? {} : {id};
            const values = {
              ...fieldsValue,
              time: fieldsValue["time"].format("YYYY-MM-DD"),
              ...idObj
            };
            const { success } = await API.addOrEditMemoList(values);
            if (success) {
              this.$message.success("提交成功", 2);
              this.$store.commit("memoModalVisible");
              this.confirmLoading = false;
              this.form.resetFields();
              this.search();
            }
          }
        });
      }, 100);
    },
    handleCancel() {
      this.$store.commit("memoModalVisible");
      this.confirmLoading = false;
      this.form.resetFields();
    }
  }
};
</script>

<style scoped lang="less"></style>
