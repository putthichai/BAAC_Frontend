import { createApp } from 'vue';

import 'material-design-icons-iconfont/dist/material-design-icons.min.css';
import './assets/styles/style.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

app.mount('#app');
