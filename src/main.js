import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from '@/router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)
app.use(router)

app.mount('#app')
