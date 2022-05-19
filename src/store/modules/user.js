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
      console.log(state.user);
      console.log(localStorage.getItem("commercejs_customer_token"));
      
      return state.user || localStorage.getItem("commercejs_customer_token") ? true : false;
    },
  },
};
