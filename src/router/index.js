import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: 'main' },
    component: () => import ('../views/Home.vue')
  },
  {
    path: "/plans",
    name: "Plans",
    meta: { layout: 'main' },
    component: () => import ('../views/Plans.vue')
  },
  {
    path: "/settings",
    name: "Settings",
    meta: { layout: 'main' },
    component: () => import ('../views/Settings.vue')
  },
  {
    path: "/staff",
    name: "Staff",
    meta: { layout: 'main' },
    component: () => import ('../views/Staff.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
