export const cart = {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      let findedIndex = state.cart.findIndex((p) => p.id === product.id);
      findedIndex === -1
        ? state.cart.push({ ...product, quantity: 1 })
        : state.cart.splice(findedIndex, 1, { ...state.cart[findedIndex], quantity: state.cart[findedIndex].quantity + 1 });
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter((p) => p.id != product.id);
    },
    increaseProductCount(state, product) {
      state.cart = state.cart.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    },
    decreaseProductCount(state, product) {
      state.cart = state.cart.map((p) => {
        return p.id === product.id && p.quantity
          ? {
              ...p,
              quantity: p.quantity - 1,
            }
          : p;
      });
    },
  },
};
