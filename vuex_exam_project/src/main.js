import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
//createApp(App).use(store).mount('#app')
const app=createApp(App)
//
app.use(store)
app.mount('#app')
