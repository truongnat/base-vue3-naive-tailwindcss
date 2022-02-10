import { createApp } from 'vue';

import './config/firebases';

import App from './App.vue';

import './assets/styles/global.css';
import naive from 'naive-ui';
import 'vfonts/FiraCode.css';

import routers from './routers';
import { store } from '@store';
import { i18n } from '@lang';
import VueLogger from 'vuejs3-logger';
import { logger_opt } from '@config';
import VueNativeSock from 'vue-native-websocket-vue3';

const app = createApp(App);
app.use(naive).use(routers).use(store).use(i18n).use(VueLogger, logger_opt);
// .use(VueNativeSock, 'ws://localhost:5000', {
//   store,
// });
app.mount('#app');
