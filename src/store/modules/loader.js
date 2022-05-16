export const loader = {
  namespaced: true,
  state: {
    loaded: false,
  },
  mutations: {
    show(state) {
      state.loaded = true;
    },
    hide(state) {
      state.loaded = false;
    },
  },
};
