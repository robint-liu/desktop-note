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
      <slot name="menuRight" />
      <Footer />
    </div>
  </div>
</template>

<script>
import userInfo from "@components/user-info";
import myMenu from "./menu";
// footer组件
import Footer from "@components/footer/index.vue";

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
    "my-menu": myMenu,
    Footer
  }
};
</script>

<style lang="less" scoped>
.menu-wrap {
  display: flex;
  .menu-left {
    padding-top: 15px;
    .menuCollapsed {
      margin: 5px 5%;
      width: 90%;
      outline: none;
      box-shadow: none;
    }
  }
  .menu-right {
    flex: 1 1;
    height: calc(100vh);
    position: relative;
    border-left: 1px solid rgb(232, 232, 232);
  }
}
</style>
