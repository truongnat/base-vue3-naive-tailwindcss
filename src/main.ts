import { createApp } from 'vue';

import './config/firebases/';

import App from './App.vue';

import './assets/styles/global.css';
import naive from 'naive-ui';
import 'vfonts/FiraCode.css';

import routers from './routers';
import { store } from '@store';
import { i18n } from '@lang';

const app = createApp(App);
app.use(naive).use(routers).use(store).use(i18n);
app.mount('#app');
