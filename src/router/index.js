import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from '../store'

const routes = [
  {
    name: "MainPage",
    path: "/",
    redirect: { name: "HomePage" },
    component: () => import("../views/index.vue"),
    children: [
      { name: "HomePage", path: "", component: () => import("../views/Home") },
      { name: "LoginPage", path: "login", component: () => import("../views/Login") },
      { name: "AccountPage", path: "account", component: () => import("../views/Account"), meta: { requiresAuth: true } },
    ],
  },
  { name: "AccountCheck", path: "/account/:key", component: () => import("../common/CheckAccount.vue") },
  { name: "NotFound", path: "*", component: () => import("../common/NotFound.vue") },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters["user/isAuthenticated"];
  console.log(isAuthenticated);
  

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: "LoginPage" });
  }
  if (to.name === "LoginPage" && isAuthenticated && from.name !== null) {
    return next(false);
  }
  // if link pasted to another tab
  if (to.name === "LoginPage" && isAuthenticated && from.name === null) {
    return next({ name: "HomePage" });
  }
  next();
});

export default router;
