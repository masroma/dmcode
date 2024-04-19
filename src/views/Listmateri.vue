<template>
    <div class="flex h-screen">
        <!-- Sidebar -->

        <Sidebar />

        <!-- Main Content -->
        <div class="flex flex-col w-full mr-64">
            <!-- Navbar -->
            <Navbar />
            <!-- Content -->
            <main class="p-6 ml-64  mt-20 bg-gray-100">

                <div class="my-5">
                    <h2 class="text-xl font-bold text-cyan-600 capitalize">Materi HTML & CSS</h2>
                    <div class="flex items-center gap-x-2">
                        <router-link class="text-sm text-cyan-600" :to="{ name: 'dashboard' }">Dashboard</router-link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="#00a3af"
                                    d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z" />
                            </g>
                        </svg>
                        <router-link class="text-sm text-cyan-600" :to="{ name: 'sertifikat' }">kursus
                            Saya</router-link>

                    </div>
                </div>

                <div class="my-5">
                    <img src="/banner.png" alt="banner" class="w-full">
                </div>



                <div class="my-5 bg-white shadow-lg w-full flex items-center p-5 space-x-10">
                    <div @click="changeTab('materi')" class="capitalize"
                        :class="{ 'border-b-2 border-cyan-600': tabactive === 'materi', 'cursor-pointer': tabactive !== 'materi' }">
                        materi
                    </div>

                    <div @click="changeTab('assets')"
                        :class="{ 'border-b-2 border-cyan-600': tabactive === 'assets', 'cursor-pointer': tabactive !== 'assets' }">
                        Assets </div>
                    <div @click="changeTab('diskusi')"
                        :class="{ 'border-b-2 border-cyan-600': tabactive === 'diskusi', 'cursor-pointer': tabactive !== 'diskusi' }">
                        Tanya instruktur </div>
                </div>


                <div class="bg-white shadow-lg p-5 w-full" v-if="tabactive == 'materi'">
                    <h2 class="text-xl font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, praesentium!
                    </h2>
                    <p class="text-sm my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nemo sequi
                        iusto pariatur amet
                        consectetur corrupti consequatur accusantium eligendi illo, quibusdam possimus esse veniam
                        nihil
                        ea
                        explicabo a libero quo?
                    </p>
                    <p class="text-sm my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nemo sequi
                        iusto pariatur amet
                        consectetur corrupti consequatur accusantium eligendi illo, quibusdam possimus esse veniam
                        nihil
                        ea
                        explicabo a libero quo?
                    </p>
                    <p class="text-sm my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nemo sequi
                        iusto pariatur amet
                        consectetur corrupti consequatur accusantium eligendi illo, quibusdam possimus esse veniam
                        nihil
                        ea
                        explicabo a libero quo?
                    </p>


                </div>

                <div class="bg-white shadow-lg p-5 w-full" v-if="tabactive == 'assets'">
                    <h2 class="text-xl font-semibold capitalize">
                        Assets
                    </h2>
                    <div v-for="index in 3" :key="index" class="flex bg-cyan-100 px-3 py-3 justify-between my-5">
                        <p class="text-cyan-600 font-semibold">Resource code </p>
                        <button
                            class="bg-cyan-600 text-white px-3 py-1 flex items-center rounded-lg text-xs">Download</button>
                    </div>

                </div>

                <div class="flex flex-col gap-y-5 w-full" v-if="tabactive == 'diskusi'">
                    <div class="bg-white shadow-lg p-5">
                        <h2 class="text-xl font-semibold">
                            Tanya instruktur
                        </h2>
                        <div class="flex flex-col gap-y-5 my-5">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-sm text-cyan-600 font-semibold">Pertanyaan </p>
                                <textarea class="bg-gray-50 w-full rounded-lg border-2 border-gray-100 p-2"
                                    placeholder="Tuliskan Problem Kalian "></textarea>
                            </div>
                            <div class="flex flex-col gap-y-2">
                                <p class="text-sm text-cyan-600 font-semibold">Gambar</p>
                                <input type="file" class="bg-gray-50 w-full rounded-lg border-2 border-gray-100 p-2">
                            </div>

                            <div class="flex flex-col gap-y-2">
                                <p class="text-sm text-cyan-600 font-semibold">Tautan link</p>
                                <input type="text" class="bg-gray-50 w-full rounded-lg border-2 border-gray-100 p-2"
                                    placeholder="Tautan link kode">
                            </div>

                            <button class="w-full bg-cyan-600 text-white font-smibold p-2 rounded-lg hover:bg-cyan-500">
                                Kirim Pertanyaan
                            </button>
                        </div>
                    </div>

                    <div class="bg-white shadow-lg p-5">
                        <h2 class="text-xl font-semibold">
                            List Pertanyaan
                        </h2>
                        <div class="flex flex-col gap-y-5 my-5">
                            <div class="bg-gray-100 p-3 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center gap-x-2">
                                        <img src="https://via.placeholder.com/100x100" class="h-8 w-8 rounded-full"
                                            alt="pp">
                                        <p class="text-sm font-semibold"> alam saputra</p>
                                    </div>
                                    <p class="text-sm font-semibold"> 24 Maret 2024</p>
                                </div>
                                <p class="my-3 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.
                                    Voluptate
                                    assumenda quae
                                    animi. Excepturi totam labore reiciendis porro nemo sequi! A, perspiciatis! Corrupti
                                    soluta, quasi dicta dignissimos quod reiciendis similique odio.</p>
                            </div>

                            <div class="ms-5 bg-cyan-100 p-3 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center gap-x-2">
                                        <img src="https://via.placeholder.com/100x100" class="h-8 w-8 rounded-full"
                                            alt="pp">
                                        <p class="text-sm font-semibold"> Instruktur</p>
                                    </div>
                                    <p class="text-sm font-semibold"> 24 Maret 2024</p>
                                </div>
                                <p class="my-3 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.
                                    Voluptate
                                    assumenda quae
                                    animi. Excepturi totam labore reiciendis porro nemo sequi! A, perspiciatis! Corrupti
                                    soluta, quasi dicta dignissimos quod reiciendis similique odio.</p>
                            </div>

                            <div class="ms-5 bg-gray-100 p-3 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center gap-x-2">
                                        <img src="https://via.placeholder.com/100x100" class="h-8 w-8 rounded-full"
                                            alt="pp">
                                        <p class="text-sm font-semibold"> Instruktur</p>
                                    </div>
                                    <p class="text-sm font-semibold"> 24 Maret 2024</p>
                                </div>
                                <p class="my-3 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.
                                    Voluptate
                                    assumenda quae
                                    animi. Excepturi totam labore reiciendis porro nemo sequi! A, perspiciatis! Corrupti
                                    soluta, quasi dicta dignissimos quod reiciendis similique odio.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>

        <div class="bg-white shadow-lg h-screen w-64 fixed right-0 z-50 overflow-y-auto">

            <ul class=" bg-white p-4">
                <li v-for="index in 30" :key="index" class="hover:bg-gray-50 px-1 py-2 border-b-2 border-gray-100">

                    <router-link :to="{ name: 'dashboard' }"
                        class="text-cyan-600 text-xs font-semibold hover:cursor-pointer">Lorem ipsum dolor sit amet
                        consectetur adipisicing.</router-link>

                </li>
            </ul>
        </div>

    </div>

</template>


<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import Account from '../components/Account.vue';
import { ref } from "vue";
export default {
    name: 'DashboardComponent',
    components: {
        Sidebar,
        Navbar,
        Account
    },
    setup() {


        const tabactive = ref('materi');



        const changeTab = async (tab) => {

            tabactive.value = tab;


        };

        return {
            tabactive,
            changeTab
        }

    }
}
</script>