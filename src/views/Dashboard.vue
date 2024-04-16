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

                <Account />
                <!-- Card List Kursus -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                    <div class="bg-white rounded-lg shadow-lg p-4">
                        <div class="flex justify-between items-center mb-10">
                            <h2 class="text-xl font-semibold mb-2 text-cyan-600">Total Materi</h2>
                            <div class="bg-cyan-600 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
                                    <path fill="#ffffff" fill-rule="evenodd"
                                        d="M4.88 0a1 1 0 0 0-1 1v4.25a1 1 0 0 0 1 1h4.25a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM1 7.75a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h4.25a1 1 0 0 0 1-1V8.75a1 1 0 0 0-1-1zm6.75 1a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.75a1 1 0 0 1-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-gray-500">6 Materi</p>
                            <p class="text-gray-500">2 Intruktur</p>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-4">
                        <div class="flex justify-between items-center mb-10">
                            <h2 class="text-xl font-semibold mb-2 text-cyan-600">Materi Diselesaikan</h2>
                            <div class="bg-cyan-600 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path stroke="white" stroke-linecap="round" stroke-width="2"
                                            d="M5 13V3.5c0-.236 0-.354.073-.427C5.146 3 5.264 3 5.5 3h4.096c.2 0 .3 0 .39.036c.09.037.161.106.305.245l1.488 1.438c.144.139.216.208.306.245c.09.036.19.036.39.036h6.195c.243 0 .364 0 .407.078c.042.078-.023.18-.155.384L16.174 9.73c-.084.132-.127.197-.127.271c0 .073.043.14.127.27l2.748 4.268c.132.204.197.306.155.384c-.043.078-.164.078-.407.078h-6.196c-.2 0-.3 0-.39-.036c-.09-.037-.161-.106-.305-.245l-1.488-1.438c-.144-.139-.216-.208-.306-.245c-.09-.036-.19-.036-.39-.036zm0 0v6" />
                                        <path fill="white"
                                            d="M5 3.5v9c0 .236 0 .354.073.427c.073.073.191.073.427.073h4.096c.2 0 .3 0 .39.036c.09.037.161.106.305.245l1.488 1.438c.144.139.216.208.306.245c.09.036.19.036.39.036h6.195c.243 0 .364 0 .407-.078c.042-.078-.023-.18-.155-.384l-2.748-4.267c-.084-.132-.127-.198-.127-.271c0-.074.043-.14.127-.27l2.748-4.268c.132-.204.197-.306.155-.384C19.034 5 18.913 5 18.67 5h-6.196c-.2 0-.3 0-.39-.036c-.09-.037-.161-.106-.305-.245l-1.488-1.438c-.144-.139-.216-.208-.306-.245C9.895 3 9.795 3 9.595 3H5.5c-.236 0-.354 0-.427.073C5 3.146 5 3.264 5 3.5" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-gray-500">1 Materi</p>
                            <p class="text-gray-500">dari 6 Materi</p>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-4">
                        <div class="flex justify-between items-center mb-10">
                            <h2 class="text-xl font-semibold mb-2 text-cyan-600">Tugas Diselesaikan</h2>
                            <div class="bg-cyan-600 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="white"
                                        d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-gray-500">2 Tugas</p>
                            <p class="text-gray-500">dari 34 Tugas</p>
                        </div>

                    </div>
                    <!-- Tambahkan card kursus lainnya sesuai kebutuhan -->
                </div>

                <div class="py-5">

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-5">
                        <div class="bg-white rounded-lg shadow-lg px-4 py-5">
                            <h2 class="text-xl font-semibold mb-2 text-cyan-600">List Nilai</h2>
                            <table
                                class="w-full whitespace-nowrap bg-white divide-y divide-gray-200 rounded-lg overflow-hidden">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama Tugas
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Ket Instruktur
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nilai
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Tugas 1</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Terlalu lama dalam memecahkan
                                                masalah</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">65</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div class="bg-white rounded-lg shadow-lg px-4 py-5">
                            <h2 class="text-xl font-semibold mb-2 text-cyan-600">Progress Belajar Kamu</h2>
                            <div class="max-w-4xl mx-auto">
                                <div class="relative wrap overflow-hidden p-10 h-full">
                                    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                                        style="left: 50%"></div>
                                    <!-- Timeline Item 1 -->
                                    <div class="mb-8 flex justify-between items-center w-full left-timeline">
                                        <div class="order-1 w-5/12"></div>
                                        <div
                                            class="z-20 flex items-center order-1 bg-cyan-600 shadow-xl w-8 h-8 rounded-full">
                                            <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
                                        </div>
                                        <div class="order-1 bg-cyan-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                            <h3 class="mb-3 font-bold text-white">HTML CSS</h3>
                                            <div class="flex justify-between">
                                                <p class="text-white text-sm">
                                                    24 Materi
                                                </p>
                                                <p class="text-white text-sm">
                                                    3 Tugas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Timeline Item 2 -->
                                    <div
                                        class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
                                        <div class="order-1 w-5/12"></div>
                                        <div
                                            class="z-20 flex items-center order-1 bg-white border-2 border-cyan-600 text-cyan-600 shadow-xl w-8 h-8 rounded-full">
                                            <h1 class="mx-auto text-cyan-600 font-semibold text-lg">2</h1>
                                        </div>
                                        <div
                                            class="order-1 bg-white border-2 border-cyan-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                            <h3 class="mb-3 font-bold text-cyan-600">JavaScript</h3>
                                            <p class="text-sm leading-snug tracking-wide text-cyan-600">Memahami
                                                JavaScript untuk membuat interaksi dinamis pada website.</p>
                                        </div>
                                    </div>
                                    <!-- Timeline Item 3 -->
                                    <!-- Add similar markup for other timeline items -->
                                    <!-- Timeline Item 4 -->
                                    <!-- Timeline Item 5 -->
                                    <!-- Timeline Item 6 -->
                                    <!-- Timeline Item 7 -->
                                </div>
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
import Account from '../components/Account.vue';
export default {
    name: 'DashboardComponent',
    components: {
        Sidebar,
        Navbar,
        Account
    }
}
</script>