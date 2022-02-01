import { createApp } from 'vue';

import App from './App.vue';

import './assets/styles/global.css';
import naive from 'naive-ui';
import 'vfonts/FiraCode.css';

import routers from './routers';
import { store } from '@store';

const app = createApp(App);
app.use(naive).use(routers).use(store);
app.mount('#app');
