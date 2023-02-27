import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'
import axios from 'axios'
import socket_ from './util/socket'
import VueCookies from 'vue3-cookies'


// console.log((Math.random() + 1).toString(36).substring(2));

//configuration axios

//'http://192.168.88.254:4044' //Sur serveur
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:4044' //'http://localhost:4044' 


const app = createApp(App)
app.use(store)
app.use(socket_)
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: false,
    sameSite: "None"
})
app.config.globalProperties.$http = axios
app.use(router)
app.mount('#app')