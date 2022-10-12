import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import NotFound from '@/app/pages/NotFound.vue';
import Dashboard from '@/app/pages/Dashboard.vue';
import HomePage from '@/app/pages/HomePage.vue';
import UsersPage from '@/app/pages/UsersPage.vue';
import MessagesPage from '@/app/pages/MessagesPage.vue';

//Layouts
import DefaultLayout from '@/app/layouts/versions/DefaultLayout.vue';
import HomeLayout from '@/app/layouts/versions/HomeLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { layout: DefaultLayout },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { layout: HomeLayout },
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage,
    meta: { layout: HomeLayout },
  },
  {
    path: '/messages',
    name: 'MessagesPage',
    component: MessagesPage,
    meta: { layout: HomeLayout },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
