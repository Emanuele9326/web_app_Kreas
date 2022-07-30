import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'


const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)

app.use(router)

app.mount('#app')