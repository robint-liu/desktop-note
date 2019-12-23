import Vue from "vue";
import Vuex from "vuex";
import memo from "./memo";

Vue.use(Vuex);

const homeStore = {
  state: {
    isMenuCollapsed: false,
    // 待办事项
    todoList: [],
    todoListCondition: {},
    todoListModalVisible: false,
    // 我的备忘
    memoList: [],
    memoCondition: {},
    memoModalVisible: false
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
    todoListModalVisible(state) {
      state.todoListModalVisible = !state.todoListModalVisible;
    },
    deleteTodoList(state, index) {
      state.todoList.splice(index, 1);
    },
    updateMemoCondition(state, data) {
      state.todoListCondition = data || [];
    }
  },
  actions: {}
};

export default new Vuex.Store(Object.assign({}, homeStore, memo));
