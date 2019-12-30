<template>
  <footer>
    咨询请发送邮件：<span class="mail">liuyang9301@sina.cn</span>
    <a-divider type="vertical" />
    <a href="/about/introduction">关于桌面记</a>
    <a-divider type="vertical" />
    <span>© 桌面记</span>
  </footer>
</template>

<script>
export default {
  name: "index.vue"
};
</script>

<style scoped lang="less">
footer {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  color: #888;
  border-top: 1px solid #f8f8f8;
  span.mail {
    color: #1890ff;
    font-size: 16px;
  }
  a {
    color: #888;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
