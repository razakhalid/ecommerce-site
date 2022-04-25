import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
import '@/assets/app.scss';

// Make jQuery available everywhere
window.$ = window.jQuery = jQuery;

let app;

app = createApp(App);

app.use(router);

app.mount('#app');