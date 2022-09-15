// Bootstrap variables
/* import 'bootstrap/scss/bootstrap.scss'; */
import './styles/main.scss';
/* import 'bootstrap/dist/css/bootstrap.css'; */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/js/bootstrap';

createApp(App).use(router).mount('#app');
