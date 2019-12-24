export default {
  state: {
    // 待办事项
    todoList: [],
    todoListCondition: {},
    todoListModalVisible: false
  },
  mutations: {
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
    }
  }
};
