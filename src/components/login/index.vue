<template>
  <div class="login-register-wrap">
    <a-form :form="form" class="form" @submit="handleSubmit">
      <a-form-item has-feedback>
        <a-input
          autocomplete
          v-decorator="[
            'account',
            {
              rules: [
                {
                  whitespace: Boolean(1),
                  required: Boolean(1),
                  message: '请输入账号！'
                },
                { min: 4, max: 10, message: '账号位数最短4位，最多10位！' },
                {
                  pattern: /[a-zA-Z]+[0-9]+_?/,
                  message: '账号必须同时包含数字和字母！'
                }
              ]
            }
          ]"
          placeholder="账号"
        >
          <a-icon slot="prefix" type="user" class="icon-color" />
        </a-input>
      </a-form-item>
      <a-form-item v-if="!showRegister" has-feedback>
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ message: '请输入名称!' }]
            }
          ]"
          placeholder="名称"
        >
          <a-icon slot="prefix" type="smile" class="icon-color" />
        </a-input>
      </a-form-item>
      <a-form-item has-feedback>
        <a-input
          autocomplete
          v-decorator="[
            'password',
            {
              rules: [
                {
                  whitespace: Boolean(1),
                  required: Boolean(1),
                  message: '请输入密码!'
                },
                { min: 6, max: 10, message: '账号密码最短6位，最多10位！' }
              ]
            }
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" class="icon-color" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a
          class="switch"
          v-text="showRegister ? '免费注册' : '登录'"
          @click="toRegister"
        >
        </a>
        <a-button
          type="primary"
          html-type="submit"
          class="submit"
          v-text="showRegister ? '登录' : '免费注册'"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  import API from "@common/api";
  import {setCookie} from "@util/cookie";
  
  export default {
  name: "login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register_login" });
  },
  data() {
    return {
      showRegister: true
    };
  },
  methods: {
    toRegister() {
      this.showRegister = !this.showRegister;
      this.form.resetFields();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          if (this.showRegister) {
            // 登录处理
            const { success } = await API.getUserInfo(values);
            if (success) {
              await setCookie({
                name: "isLogin",
                value: "true"
              });
              await setCookie({
                name: "loginAccount",
                value: values.account
              });
              this.$router.push("/index");
            } else {
              this.$message.error("账号或密码不存在！");
            }
          } else {
            // 注册处理
            values = Object.assign(values, {
              avatar:
                "http://img1.imgtn.bdimg.com/it/u=2193213018,2505768407&fm=26&gp=0.jpg",
              signature: "我的世界我主宰！"
            });
            const { success } = await API.addUserInfo(values);
            if (success) {
              this.$message.success("注册成功，即将进入登录页面", 2, () => {
                this.showRegister = true;
                this.form.resetFields();
              });
            }
          }
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-register-wrap {
  height: 100%;
  position: relative;
  background: #908e94 url(../../assets/banner.png) no-repeat center / cover;
  .form {
    box-sizing: content-box;
    width: 300px;
    position: absolute;
    top: 100px;
    right: 200px;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    .ant-row.ant-form-item {
      .icon-color {
        color: rgba(0, 0, 0, 0.25);
      }
      &:last-child {
        margin: 0;
      }
    }
    .switch {
      float: right;
      font-size: 12px;
    }
    .submit {
      width: 100%;
      font-size: 16px;
    }
  }
}
</style>
