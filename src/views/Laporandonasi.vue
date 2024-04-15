<template>
    <div class="container max-w-7xl  mx-auto mt-2 py-5 lg:py-10 px-2">
        <h1 class="text-3xl font-semibold text-center mb-6">Laporan Donasi</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Total Donasi Masuk -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Total Donasi Masuk</h2>
            <p class="text-2xl font-bold text-green-600">$5,000</p>
        </div>
        <!-- Total Donasi yang Sudah Disalurkan -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Total Donasi yang Sudah Disalurkan</h2>
            <p class="text-2xl font-bold text-blue-600">$3,000</p>
        </div>
        <!-- Sisa Donasi -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Sisa Donasi</h2>
            <p class="text-2xl font-bold text-red-600">$2,000</p>
        </div>
    </div>

    <!-- Daftar Penyaluran -->
    <div class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Daftar Penyaluran</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li class="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold mb-2">Tanggal Penyaluran</h3>
                <p class="text-base text-gray-600">20 April 2024</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Nominal Penyaluran</h3>
                <p class="text-base text-gray-600">$1,500</p>
            </li>
            <li class="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold mb-2">Tanggal Penyaluran</h3>
                <p class="text-base text-gray-600">22 April 2024</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Nominal Penyaluran</h3>
                <p class="text-base text-gray-600">$1,500</p>
            </li>
            <!-- Tambahkan item lain sesuai kebutuhan -->
        </ul>
    </div>
    </div>
</template>