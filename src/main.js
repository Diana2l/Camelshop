import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './Routes'

createApp(App).use(router).mount('#app') // use router
