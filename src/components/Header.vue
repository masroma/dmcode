<template>
    <div class="w-full shadow-md bg-white sticky top-0 z-50">
        <div class="max-w-7xl  mx-auto flex justify-between items-center gap-x-5 py-3 px-3">
            <router-link :to="{ name: 'home' }">
                <img src="/logo.png" alt="logo" class="hidden md:block" /> <!-- Muncul di tampilan tablet dan hp -->
                <img src="/icon.png" alt="logo" class="w-12 block md:hidden" /> <!-- Muncul di tampilan dekstop -->
            </router-link>

            <router-link :to="{ name: 'tentangkami' }" class="hidden lg:flex lg:items-center">Tentang kami</router-link>
            <router-link :to="{ name: 'biaya' }" class="hidden lg:flex lg:items-center">Biaya Kursus</router-link>
            <router-link :to="{ name: 'roadmap' }" class="hidden lg:flex lg:items-center">Roadmap</router-link>
            <router-link :to="{ name: 'konsepbelajar' }" class="hidden lg:flex lg:items-center">Konsep
                belajar</router-link>

            <div class="hidden lg:flex  ps-5 items-center bg-gray-50 border-[1px] border-cyan-600 rounded-lg">
                <input type="text" name="" placeholder="cari kursus kamu" class="bg-gray-50 flex-1 focus:outline-none"
                    id="">
                <button
                    class="bg-cyan-600 py-3 px-3  text-white font-semibold border-[1px] rounded-r-lg border-cyan-600"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21l-4.3-4.3" />
                        </g>
                    </svg></button>
            </div>
            <div>
                <button @click="toggleSidebar" class="block lg:hidden focus:outline-none">
                    <svg v-if="!sidebarOpen" class="h-8 w-8 text-gray-600" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    <svg v-else class="h-8 w-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex item-center gap-x-2">
                <router-link :to="{name:'login'}" class="bg-cyan-600 py-3 px-5 rounded-lg text-white font-semibold text-center">Masuk</router-link>
                <router-link :to="{name:'register'}"
                    class="bg-white border-2 border-cyan-600 py-3 px-5 rounded-lg text-cyan-600 font-semibold text-center">Daftar</router-link>
            </div>
        </div>
    </div>


    <!-- sidebar -->
    <div :class="sidebarOpen ? 'lg:block' : 'hidden lg:block'" class="lg:hidden">
        <!-- Sidebar content -->
        <div class="bg-cyan-800  h-screen w-full px-2 py-3">
            <div class="flex flex-col my-5 gap-y-3">
                <router-link :to="{name:'login'}" class="bg-white text-cyan-600 font-semibold py-3 rounded-md text-center">Masuk</router-link>
                <router-link :to="{name:'register'}" class="bg-cyan-600 text-white font-semibold py-3 rounded-md text-center">Daftar</router-link>
            </div>
            <div class="flex bg-gray-50 items-center px-2">
                <input type="text" class="bg-gray-50 py-3 px-2 flex-1 focus:outline-none" placeholder="cari kursus">
               <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
               </button>
                
            </div>

            <div class="flex flex-col gap-y-2 my-5">
                <router-link :to="{name:'tentangkami'}" class="text-white text-base ">Tentang Kami</router-link>
                <router-link :to="{name:'biaya'}" class="text-white text-base ">Biaya Kursus</router-link>
                <router-link :to="{name:'roadmap'}" class="text-white text-base ">Roadmap Belajar</router-link>
                <router-link :to="{name:'konsepbelajar'}" class="text-white text-base ">Konsep Belajar</router-link>
            </div>
        </div>
    </div>
    <!-- sidebar -->
</template>


<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const sidebarOpen = ref(false);
    const router = useRouter();

    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    // Tutup sidebar saat pindah halaman
    router.beforeEach((to, from, next) => {
      sidebarOpen.value = false;
      next();
    });

    return {
      sidebarOpen,
      toggleSidebar
    };
  }
};
</script>
