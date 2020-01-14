<template>
  <div class="login-register-wrap">
    <a-form :form="form" class="form" @submit="handleSubmit">
      <a-form-item has-feedback>
        <a-input
          v-decorator="[
            'account',
            {
              rules: [{ required: true, message: '请输入账号!' }]
            }
          ]"
          placeholder="账号"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item has-feedback>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入密码!' }]
            }
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a class="register" v-show="showRegister" @click="toRegister">
          免费注册
        </a>
        <a-button
          type="primary"
          html-type="submit"
          class="login"
          v-text="showRegister ? '登录' : '注册'"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
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
      this.showRegister = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("values: ", this.showRegister, values);
          // todo 1、存储在将indexDB和cookie中；2、将indexDB 数据库名与account进行耦合，${account}@将indexDB
          // 将用户信息存储在indexDB中
          // cookie存储情况：${account}@isLogin，过期时间为三天，三天后重新登录
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
  background: #908e94 url(../../assets/banner.png) no-repeat center / 100% 100%;
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
      &:last-child {
        margin: 0;
      }
    }
    .register {
      float: right;
      font-size: 12px;
    }
    .login {
      width: 100%;
      font-size: 16px;
    }
  }
}
</style>
