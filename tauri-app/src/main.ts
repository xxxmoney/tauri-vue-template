import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import './assets/style.css';
import { router } from './router';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(PrimeVue, {
  theme: 'none'
});
app.use(router);

app.mount('#app');
