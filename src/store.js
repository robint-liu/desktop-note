import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuCollapsed: false,
    todoList: [],
    todoListCondition: {},
    itemModalVisible: false
  },
  mutations: {
    // 直接改变store.state, 无需返回值
    changeMenuCollapsed(state) {
      state.isMenuCollapsed = !state.isMenuCollapsed;
    },
    updateTodoList(state, data) {
      state.todoList = data || [];
    },
    updateTodoCondition(state, data) {
      state.todoListCondition = data || [];
    },
    itemModalVisible(state) {
      state.itemModalVisible = !state.itemModalVisible;
    },
    deleteTodoList(state, index) {
      state.todoList.splice(index, 1);
    }
  },
  actions: {}
});
