<template>
  <div class="user-info">
    <a-avatar
      :size="60"
      shape="square"
      :src="avatar"
      :icon="avatar ? '' : 'user'"
    />
    <div class="signature" v-show="hasSignature && !isMenuCollapsed">{{ signature }}</div>
  </div>
</template>

<script>
/*
 * @title: 头像功能模块；
 * @date：2019/09/27
 * @feature：
 *    1、获取本地数据进而展示头像和签名
 *    2、当头像为空时，替换为头像 icon
 *    3、当签名为空时，空时不予显示
 * */

import commonAPI from "@common/api/common.js";

export default {
  name: "index.vue",
  data() {
    return {
      avatar: "",
      signature: ""
    };
  },
  props: {
    params: {
      // 用于接收来自父组件的数据
      type: Number,
      default: 0,
      required: false,
      validator: function(value) {
        return value >= 0;
      }
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    hasSignature: function() {
      return !!this.signature;
    },
    isMenuCollapsed: function() {
      return this.$store.state.isMenuCollapsed;
    }
  },
  async created() {
    // 更新个人信息
    const {
      data: { avatar, signature },
      success
    } = await commonAPI.getUserInfo();
    if (success) {
      this.avatar = avatar;
      this.signature = signature;
    }
  }
};
</script>

<style lang="less" scoped>
.user-info {
  text-align: center;
  .signature {
    font-size: 12px;
    color: #999;
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px 8px;
  }
}
</style>
