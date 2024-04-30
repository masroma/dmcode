import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import './style.css'

import mixins from './mixins';
import router from './router';
import store from './store'
import '../node_modules/flowbite-vue/dist/index.css'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

const app = createApp(App);
app.use(Toast, {
    // Konfigurasi opsi default untuk toast
    position: "top-right",
    // Ganti warna latar belakang default
    toastOptions: {
        backgroundColor: "#00a3af",
    },
});

//define mixins for global function
app.mixin(mixins)
app.use(router)
app.use(store)
app.use(PrimeVue)



app.mount('#app')