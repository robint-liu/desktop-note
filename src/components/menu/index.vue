<template>
  <div class="menu-wrap">
    <div class="menu-left">
      <user-info />
      <a-button
        type="primary"
        size="small"
        @click="toggleCollapsed"
        class="menuCollapsed"
      >
        <a-icon :type="isMenuCollapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <my-menu :isMenuCollapsed="isMenuCollapsed" />
    </div>
    <div class="menu-right">
      <slot name="menuRight"></slot>
    </div>
  </div>
</template>

<script>
import userInfo from "@components/user-info";
import myMenu from "./menu";

export default {
  computed: {
    isMenuCollapsed: function() {
      return this.$store.state.isMenuCollapsed;
    }
  },
  methods: {
    toggleCollapsed() {
      this.$store.commit("changeMenuCollapsed");
    }
  },
  components: {
    "user-info": userInfo,
    "my-menu": myMenu
  }
};
</script>

<style lang="less" scoped>
.menu-wrap {
  display: flex;
  .menu-left {
    .menuCollapsed {
      margin: 5px 5%;
      width: 90%;
      outline: none;
      box-shadow: none;
    }
  }
  .menu-right {
    flex: 1 1;
    position: relative;
  }
}
</style>
