export const user = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user ? true : false;
    },
  },
};
