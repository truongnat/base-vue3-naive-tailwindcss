import { PagesKey } from './../constants/pages';
import { RouteRecordRaw } from 'vue-router';

import LandingPage from '../pages/LandingPage/ui.vue';
import DashboardPage from '../pages/DashboardPage/ui.vue';
import ErrorPage from '../pages/ErrorPage/ui.vue';
import NotFoundPage from '../pages/ErrorPage/NotFoundPage/ui.vue';

export const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PagesKey.LADING_PAGE,
    component: LandingPage,
  },
  {
    path: '/dashboard',
    name: PagesKey.DASHBOARD_PAGE,
    component: DashboardPage,
  },

  // router throw error page
  {
    path: '/:pathMatch(.*)*',
    name: PagesKey.NOTFOUND_PAGE,
    component: NotFoundPage,
  },
  {
    path: '/error/:statusCode',
    name: PagesKey.ERROR_PAGE,
    component: ErrorPage,
  },
];
