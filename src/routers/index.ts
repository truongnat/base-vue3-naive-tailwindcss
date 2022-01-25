import { createRouter, createWebHistory } from 'vue-router';
import { routers } from './routers';

const app_router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default app_router;
