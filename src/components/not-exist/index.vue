<template>
  <div class="not-exist-wrap page-common">
    <div class="empty-image">
      <img
        src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        alt="empty"
      />
    </div>
    <h2 class="empty-description">NOT FOUND!</h2>
  </div>
</template>

<script>
export default {
  name: "index.vue"
};
</script>

<style lang="less" scoped>
@import "../../common/style/common";
.not-exist-wrap {
  height: calc(100vh);
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .empty-image {
    height: 300px;
    margin-bottom: 30px;
    img {
      height: 100%;
      vertical-align: middle;
      border-style: none;
    }
  }
  .empty-description {
    margin: 0;
  }
}
</style>
