import Vue from "vue";
import Vuex from "vuex";
import { loader } from "./modules/loader";
import { user } from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
    user,
  },
});
