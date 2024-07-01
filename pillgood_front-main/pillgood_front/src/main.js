import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Vuex 스토어를 불러옴

createApp(App).use(store).use(router).mount('#app');
