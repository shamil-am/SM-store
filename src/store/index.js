import Vue from "vue";
import Vuex from "vuex";
import { loader } from "./modules/loader";
import { user } from "./modules/user";
import { cart } from "./modules/cart";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
    user,
    cart,
  },
});
