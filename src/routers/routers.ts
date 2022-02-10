import { PagesKey } from '@constants';
import { RouteRecordRaw } from 'vue-router';

import {
  RoomsPage,
  DashboardPage,
  ErrorPage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  SignUpPage,
  RoomChat,
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
    path: '/rooms',
    name: PagesKey.ROOMS_PAGE,
    component: RoomsPage,
  },
  {
    path: '/rooms/chat/:id',
    name: PagesKey.CHAT_PAGE,
    component: RoomChat,
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
