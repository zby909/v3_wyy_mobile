import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'normalize.css';
import '@/styles/index.scss';
import '@/styles/font/iconfont.css';
import '@/styles/font/iconfont.js';
import allCommonCpn from '@/components';
import vant from '@/plugins/vant';

const app = createApp(App);
app.use(allCommonCpn);
app.use(vant);
app.use(router).mount('#app');
