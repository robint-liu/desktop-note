import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuCollapsed: false
  },
  mutations: {
    // 直接改变store.state, 无需返回值
    changeMenuCollapsed(state) {
      state.isMenuCollapsed = !state.isMenuCollapsed;
    }
  },
  actions: {}
});
