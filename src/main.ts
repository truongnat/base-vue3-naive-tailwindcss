import { createApp } from 'vue';

import App from './App.vue';
import './assets/styles/global.css';
import naive from 'naive-ui';
import 'vfonts/FiraCode.css';

const app = createApp(App);
app.use(naive);
app.mount('#app');
