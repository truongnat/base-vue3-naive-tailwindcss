import { PagesKey } from '@constants';
import { RouteRecordRaw } from 'vue-router';

import {
  ChatPage,
  DashboardPage,
  ErrorPage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  SignUpPage,
} from '@pages';

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
  {
    path: '/chat',
    name: PagesKey.CHAT_PAGE,
    component: ChatPage,
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

  {
    path: '/auth/login',
    name: PagesKey.LOGIN_PAGE,
    component: LoginPage,
  },
  {
    path: '/auth/signup',
    name: PagesKey.SIGN_UP_PAGE,
    component: SignUpPage,
  },
];
