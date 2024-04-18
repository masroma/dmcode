import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import mixins from './mixins';
import router from './router';
import '../node_modules/flowbite-vue/dist/index.css'
const app = createApp(App)

//define mixins for global function
app.mixin(mixins)
app.use(router)

app.mount('#app')