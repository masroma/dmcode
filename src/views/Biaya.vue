<template>
    <div class="container max-w-7xl  mx-auto mt-2 py-5 lg:py-10 px-2">
        <div class="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <!-- Judul -->
            <h1 class="text-3xl font-semibold text-center mb-6">Price List</h1>
            <!-- Harga Normal -->
            <div class="mb-6">
                <h2 class="text-lg font-semibold mb-2">Harga Normal</h2>
                <p class="text-2xl font-bold text-red-600 line-through">Rp 490.000</p>
            </div>
            <!-- Harga Diskon -->
            <div class="mb-6">
                <h2 class="text-lg font-semibold mb-2">Harga Diskon</h2>
                <p class="text-2xl font-bold text-green-600">Rp 290.000</p>
            </div>
            <!-- Fitur -->
            <div class="mb-6">
                <h2 class="text-lg font-semibold mb-2">Apa yang Anda Dapatkan:</h2>
                <ul>
                    <li class="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00a3af" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"/></svg>
                        <span>Akses semua materi tanpa biaya tambahan</span>
                    </li>
                    <li class="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00a3af" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"/></svg>
                        <span>Akses tanya jawab di kolom diskusi</span>
                    </li>
                    <li class="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00a3af" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"/></svg>
                        <span>Live Zoom untuk konsultasi</span>
                    </li>
                </ul>
            </div>
            <!-- Tombol Beli -->
            <div class="flex justify-center">
                <button class="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg">
                    Beli Kursus
                </button>
            </div>
        </div>
    </div>
</template>