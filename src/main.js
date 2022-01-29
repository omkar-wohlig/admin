import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import router from '@/router'
import VuePaginationTw from "vue-pagination-tw";

const app = createApp(App)
app.use(router)
app.component("VuePaginationTw", VuePaginationTw);

app.mount('#app')
