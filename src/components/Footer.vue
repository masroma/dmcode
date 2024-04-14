<template>
    <div class="w-full shadow-md bg-cyan-600 py-10 px-10 ">
        <div class="max-w-7xl grid lg:grid-cols-4 gap-10 mx-auto">
            <div class="flex flex-col justify-center">
                <img src="/logoputih.png" alt="logo" class="w-1/2  lg:w-max">
            </div>

            <div class="flex flex-col">
                <h1 class="text-white font-bold text-xl mb-3">
                   Menu
                </h1>
                <router-link :to="{ name: 'kebijakanprivasi' }" class="text-white text-base font-semibold">Kebijakan
                    Privasi</router-link>
                <router-link :to="{ name: 'syaratpenggunaan' }" class="text-white text-base font-semibold">Syarat dan
                    ketentuan</router-link>
                <router-link :to="{ name: 'roadmap' }" class="text-white text-base font-semibold">Roadmap
                    Belajar</router-link>
                <router-link :to="{ name: 'konsepbelajar' }" class="text-white text-base font-semibold">Konsep Belajar</router-link>
            </div>

            <div class="flex flex-col">
                <h1 class="text-white font-bold text-xl mb-3">
                    Informasi UMUM
                </h1>
                <router-link :to="{ name: 'home' }" class="text-white text-base font-semibold">Informasi Donasi
                    Infaq</router-link>
                <router-link :to="{ name: 'home' }" class="text-white text-base font-semibold">Laporan Donasi
                    Infaq</router-link>
            </div>

            <div class="flex flex-col">
                <h1 class="text-white font-bold text-xl mb-3">
                    Informasi DMCODE
                </h1>
                <p class="text-white">
                    Alamat : Ruko No 1 LT 2, Jalan wijaya kusuma RT 03 RW 05 Pondok miri gunung sindur Kab bogor
                </p>
                <p class="text-white">
                    Whatsapp : 082299995502 ( chat only )
                </p>
            </div>
        </div>
    </div>

</template>