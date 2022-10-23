import { createRouter, createWebHashHistory } from "vue-router";

// 路由配置表
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@pages/home/index.vue"),
  },
  {
    path: "/concern",
    component: () => import("@pages/concern/index.vue"),
  },
  {
    path: "/history",
    component: () => import("@pages/history/index.vue"),
  },
  {
    path: "/collection",
    component: () => import("@pages/collection/index.vue"),
  },
  {
    path: "/creation-center",
    component: () => import("@pages/creationCenter/index.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
