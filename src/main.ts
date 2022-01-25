import { createApp } from 'vue';

import App from './App.vue';
import './assets/styles/global.css';
import naive from 'naive-ui';
import 'vfonts/FiraCode.css';

import routers from './routers';

const app = createApp(App);
app.use(naive).use(routers);
app.mount('#app');
