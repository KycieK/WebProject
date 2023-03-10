import { createApp } from 'vue'
// import {HeartFill } from 'bootstrap-icons'
import App from './App.vue'
import router from './router'
import 'bootstrap'
// import 'bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
createApp(App).use(router).mount('#app')
