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
                    <h2 class="text-xl font-bold text-cyan-600 capitalize">Profile</h2>
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
                        <router-link class="text-sm text-cyan-600" :to="{ name: 'profile' }">Profile</router-link>

                    </div>
                </div>
                <!-- Card List Kursus -->
                <div class="grid grid-cols-8 gap-4">
                    <div class="col-span-6">
                        <div class="w-full p-4 shadow-lg bg-white">
                            <h2 class="font-bold text-cyan-600">Update Profile</h2>
                            <form class="py-5">
                                <div class="flex my-5 w-full gap-5">
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Username
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg">
                                            <input type="text"
                                                class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none bg-white"
                                                placeholder="Username ">

                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Email
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg">
                                            <input type="text"
                                                class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none bg-white"
                                                placeholder="Email ">

                                        </div>
                                    </div>
                                </div>

                                <div class="flex my-5 w-full gap-5">
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Nama Depan
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg">
                                            <input type="text"
                                                class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none bg-white"
                                                placeholder="Nama depan ">

                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-y-2 mb-5 w-full">
                                        <p class="text-cyan-600">
                                            Nama Belakang
                                        </p>
                                        <div class="border-2 border-cyan-600 rounded-lg">
                                            <input type="text"
                                                class="w-full py-3 px-3 rounded-lg text-sm text-gray-500 focus:outline-none bg-white"
                                                placeholder="Nama belakang ">

                                        </div>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <button
                                        class="bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-700">Update
                                        profile</button>


                                </div>

                            </form>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="w-full p-4 shadow-lg bg-white">
                            <div class="w-full flex flex-col gap-5 justify-center items-center">
                                <img src="https://via.placeholder.com/200x200" alt="" class="rounded-full w-36 h-36">
                                <label for="file-upload" class="cursor-pointer">
                                    <span
                                        class="bg-cyan-600 hover:bg-cyan-700 text-white p-1 px-3 text-xs rounded-md">Ganti
                                        photo profile</span>
                                    <input id="file-upload" type="file" class="sr-only">
                                </label>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>

</template>


<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'DashboardComponent',
    components: {
        Sidebar,
        Navbar
    }
}
</script>