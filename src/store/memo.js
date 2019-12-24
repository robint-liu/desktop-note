export default {
  state: {
    memoList: [],
    memoCondition: {},
    memoModalVisible: false
  },
  mutations: {
    updateMemoCondition(state, data) {
      state.memoCondition = data || [];
    },
    updateMemoList(state, data) {
      state.memoList = data || [];
    },
    deleteMemoList(state, index) {
      state.memoList.splice(index, 1);
    },
    memoModalVisible(state) {
      state.memoModalVisible = !state.memoModalVisible;
    }
  }
};
