const state = {
  todos: [],
};

const actions = {
  ADD_TODO({ commit }, name) {
    commit('ADD_TODO', name);
  }
};

const mutations = {
  ADD_TODO(state, name) {
    state.todos = [
      ...state.todos,
      { id: Date.now(), name },
    ];
  }
};

export default {
  state,
  actions,
  mutations,
};
