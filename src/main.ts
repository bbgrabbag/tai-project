import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap';

const app = createApp(App)
app.provide('bootstrap', bootstrap)
app.mount('#app')
