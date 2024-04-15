//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
    },

    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "login" */ '../views/Home.vue')
    },

    {
        path: '/tentang-kami',
        name: 'tentangkami',
        component: () => import( /* webpackChunkName: "login" */ '../views/Tentangkami.vue')
    },

    {
        path: '/kebijakan-privasi',
        name: 'kebijakanprivasi',
        component: () => import( /* webpackChunkName: "login" */ '../views/Kebijakanprivasi.vue')
    },

    {
        path: '/syarat-penggunaan',
        name: 'syaratpenggunaan',
        component: () => import( /* webpackChunkName: "login" */ '../views/Syaratpenggunaan.vue')
    },

    {
        path: '/roadmap',
        name: 'roadmap',
        component: () => import( /* webpackChunkName: "login" */ '../views/Roadmap.vue')
    },

    {
        path: '/konsep-belajar',
        name: 'konsepbelajar',
        component: () => import( /* webpackChunkName: "login" */ '../views/Konsepbelajar.vue')
    },

    {
        path: '/lupa-password',
        name: 'lupapassword',
        component: () => import( /* webpackChunkName: "login" */ '../views/Lupapassword.vue')
    },

    {
        path: '/laporan-donasi',
        name: 'laporandonasi',
        component: () => import( /* webpackChunkName: "login" */ '../views/Laporandonasi.vue')
    },
    {
        path: '/biaya',
        name: 'biaya',
        component: () => import( /* webpackChunkName: "login" */ '../views/Biaya.vue')
    },

]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router