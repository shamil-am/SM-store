import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    name: "MainPage",
    path: "/",
    redirect: { name: "HomePage" },
    component: () => import("../views/index.vue"),
    children: [
      { name: "HomePage", path: "", component: () => import("../views/Home") },
      { name: "LoginPage", path: "login", component: () => import("../views/Login") },
    ],
  },
  { name: "NotFound", path: "*", component: () => import("../common/NotFound.vue") },
];

const router = new VueRouter({
  routes,
});

export default router;
