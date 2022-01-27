import { RouteRecordRaw } from 'vue-router';
import LandingPage from '../pages/LandingPage/ui.vue';
import DashboardPage from '../pages/DashboardPage/ui.vue';

import ErrorPage from '../pages/ErrorPage/ui.vue';
import NotFoundPage from '../pages/ErrorPage/NotFoundPage/ui.vue';

export const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LadingPage',
    component: LandingPage,
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
  },

  // router throw error page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
  {
    path: '/error/:statusCode',
    name: 'ErrorPage',
    component: ErrorPage,
  },
];
