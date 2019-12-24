import Vue from "vue";
import Vuex from "vuex";
import todoList from "./todo-list";
import memo from "./memo";

Vue.use(Vuex);

const homeStore = {
  state: {
    isMenuCollapsed: false,
    ...memo.state,
    ...todoList.state
  },
  mutations: {
    changeMenuCollapsed(state) {
      state.isMenuCollapsed = !state.isMenuCollapsed;
    },
    ...memo.mutations,
    ...todoList.mutations
  },
  actions: {}
};

export default new Vuex.Store(homeStore);
