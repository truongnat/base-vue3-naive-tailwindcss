/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from 'vue';

// @ts-ignore
import App from './App.vue';
import './assets/styles/global.css';
import naive from 'naive-ui';
import 'vfonts/FiraCode.css';

import routers from './routers';
import { api } from './config/api';

// api.auth.login().catch((e) => console.log('err', e));

const app = createApp(App);
app.use(naive).use(routers);
app.mount('#app');
