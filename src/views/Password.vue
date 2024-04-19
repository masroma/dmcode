<template>
    <div class="flex h-screen">
        <!-- Sidebar -->

        <Sidebar />
        <!-- Main Content -->
        <div class="flex flex-col flex-1">
            <!-- Navbar -->
            <Navbar />
            <!-- Content -->
            <main class="p-6 ml-64 mt-20">

                <div class="my-5">
                    <h2 class="text-xl font-bold text-cyan-600 capitalize">Password</h2>
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
                        <router-link class="text-sm text-cyan-600" :to="{ name: 'password' }">Password</router-link>

                    </div>
                </div>
                <!-- Card List Kursus -->
                <div class="grid grid-cols-8 gap-4">
                    <div class="col-span-8">
                        <div class="w-full p-4 shadow-lg bg-white">
                            <h2 class="font-bold text-cyan-600">Update Password</h2>
                            <form class="py-5">
                                <div class="flex my-5 w-full gap-5">
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Password Lama
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg flex">
                                            <input v-model="user.password" :type="showPassword ? 'text' : 'password'"
                                                class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 focus:outline-none bg-white"
                                                placeholder="Password">

                                            <span class="p-3 flex-items-center" @click="togglePasswordVisibility"
                                                v-if="!showPassword">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                                </svg>

                                            </span>
                                            <span class="p-3 flex-items-center" @click="togglePasswordVisibility"
                                                v-else>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                                                </svg>
                                            </span>

                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Konfirmasi Password Lama
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg flex">
                                            <input v-model="user.password_confirmation"
                                                :type="showPasswordConfirmation ? 'text' : 'password'"
                                                class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 focus:outline-none bg-white"
                                                placeholder="Konfirmasi Password Lama">

                                            <span class="p-3 flex-items-center"
                                                @click="togglePasswordConfirmationVisibility"
                                                v-if="!showPasswordConfirmation">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                                </svg>

                                            </span>
                                            <span class="p-3 flex-items-center"
                                                @click="togglePasswordConfirmationVisibility" v-else>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                                                </svg>
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                <div class="flex my-5 w-full gap-5">
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Password Baru
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg flex">
                                            <input v-model="user.password_baru"
                                                :type="showPasswordBaru ? 'text' : 'password'"
                                                class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 focus:outline-none bg-white"
                                                placeholder="Password Baru ">

                                            <span class="p-3 flex-items-center" @click="togglePasswordBaruVisibility"
                                                v-if="!showPasswordBaru">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                                </svg>

                                            </span>
                                            <span class="p-3 flex-items-center" @click="togglePasswordBaruVisibility"
                                                v-else>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                                                </svg>
                                            </span>

                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Konfirmasi Password Baru
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg flex">
                                            <input v-model="user.password_baru_confirmation"
                                                :type="showPasswordBaruConfirmation ? 'text' : 'password'"
                                                class="w-full py-3 px-3 rounded-lg text-sm flex-1 text-gray-500 focus:outline-none bg-white"
                                                placeholder="Konfirmasi Password Baru">

                                            <span class="p-3 flex-items-center"
                                                @click="togglePasswordBaruConfirmationVisibility"
                                                v-if="!showPasswordBaruConfirmation">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                                </svg>

                                            </span>
                                            <span class="p-3 flex-items-center"
                                                @click="togglePasswordBaruConfirmationVisibility" v-else>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#00a3af"
                                                        d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                                                </svg>
                                            </span>

                                        </div>
                                    </div>
                                </div>



                                <div class="flex gap-3">
                                    <button
                                        class="bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-700">Update
                                        password</button>


                                </div>

                            </form>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    </div>

</template>


<script>
import { ref, reactive } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'PasswordComponent',
    components: {
        Sidebar,
        Navbar
    },
    setup() {
        const password = ref('');
        const showPassword = ref(false);
        const showPasswordConfirmation = ref(false);
        const showPasswordBaru = ref(false);
        const showPasswordBaruConfirmation = ref(false);
        // Methods
        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };

        const togglePasswordConfirmationVisibility = () => {

            showPasswordConfirmation.value = !showPasswordConfirmation.value;
        };

        const togglePasswordBaruVisibility = () => {
            showPasswordBaru.value = !showPasswordBaru.value;
        };

        const togglePasswordBaruConfirmationVisibility = () => {

            showPasswordBaruConfirmation.value = !showPasswordBaruConfirmation.value;
        };

        const user = reactive({
            password: '',
            password_confirmation: '',
            password_baru: '',
            password_baru_confirmation: ''

        })

        return {
            password,
            showPassword,
            showPasswordConfirmation,
            togglePasswordVisibility,
            togglePasswordConfirmationVisibility,
            showPasswordBaru,
            showPasswordBaruConfirmation,
            togglePasswordBaruVisibility,
            togglePasswordBaruConfirmationVisibility,
            user

        }



    }
}
</script>