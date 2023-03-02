import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import appHeader from './components/appHeader.vue'



 
const app = createApp(App)

app.component('appHeader', appHeader)
app.component('appHeader', appHeader)
app.use(router)
app.mount('#app')
