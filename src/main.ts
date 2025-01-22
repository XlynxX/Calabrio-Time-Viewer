import './assets/main.css'
import 'primeicons/primeicons.css';   

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Timeline from 'primevue/timeline';
import Nora from '@primevue/themes/nora';

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Nora
    }
});
app.component('Timeline', Timeline);

app.mount('#app')
