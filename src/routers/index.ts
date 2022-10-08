import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import NotFound from "@/app/pages/NotFound.vue";
import Dashboard from "@/app/pages/Dashboard.vue";
import HomePage from "@/app/pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
