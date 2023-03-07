import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import menuTemplate from './components/template/menuTemplate.vue'



 
const app = createApp(App)

app.component('menuTemplate', menuTemplate)
app.component('menuTemplate', menuTemplate)
app.use(router)
app.mount('#app')
