<template>
    <Banner />

    <div class="max-w-6xl mx-auto">
        <div class="flex flex-col items-center mx-auto py-5  lg:pt-20 lg:pb-10 justify-center">
            <h1 class="xl:text-5xl lg:text-lg sm:text-sm md:text-md font-semibold text-cyan-600">
                Mengapa Belajar di
            </h1>
            <img src="/logo.png" alt="logo" class="w-1/2 lg:w-max">
        </div>

        <div class="flex flex-col lg:gap-y-10">
            <div class="flex flex-col gap-3 bg-cyan-100 px-5 py-5">
                <h5 class="text-xl lg:text-3xl  font-semibold text-cyan-600">
                    1. Materi Terstuktur <span class="font-bold">from zero to hero</span>
                </h5>
                <p class="text-base lg:text-lg">Kami akan mengajarkan kepada kalian materi dari basic sampai ke level
                    advance, materi
                    yang kami sajikan berbentuk ebook online, sehingga akan memudahkan kalian dalam belajar atau
                    mengulang materi, dan juga sorce code semua sudah tersedia di github untuk memudahkan proses belajar
                </p>
            </div>
            <div class="flex flex-col gap-3 bg-white px-5 py-5">
                <h5 class="text-xl lg:text-3xl  font-semibold text-cyan-600">
                    2. Akses Kelas <span class="font-bold">Selamanya</span>
                </h5>
                <p class="text-base lg:text-lg">Cukup membayar satu kali maka temen temen sudah bisa mendapatkan materi
                    full akses
                    selamanya, baik itu materi ebook nya dan juga sorce code nya, dan temen temen masih bisa bertanya
                    juga di kolom diskusi materi selama aktif menjadi siswa di kelas tersebut</p>
            </div>
            <div class="flex flex-col gap-3 bg-cyan-100 px-5 py-5">
                <h5 class="text-xl lg:text-3xl font-semibold text-cyan-600">
                    3. Instruktur <span class="font-bold">Berpengalaman</span>
                </h5>
                <p class="text-base lg:text-lg">Ini adalah keunggulan kami, biasanya tempat kurus online pengajarnya
                    berasal dari
                    developer kemudian berusaha mengajar, tentunya hal seperti itu sulit dipahami penjelasanya bagi
                    murid, di kami semua instruktur adalah basicnya pengajar sehingga sudah terlatih dalam memeberikan
                    pemahaman kepada murid</p>
            </div>
            <div class="flex flex-col gap-3 bg-white px-5 py-5">
                <h5 class="text-xl lg:text-3xl font-semibold text-cyan-600">
                    4. Forum <span class="font-bold">Tanya jawab dan zoom online</span>
                </h5>
                <p class="text-base lg:text-lg">bagi murid murid yang bener bener sudah mentok dan tidak paham dengan
                    materi atau
                    problem ketika menyelesaikan tugas materi, maka kami instruktur akan menyediakan sesi online tatap
                    muka seminggu sekali (buat jadwal janji dengan instruktur)</p>
            </div>
        </div>
    </div>

    <div class="w-full mx-auto bg-gradient-to-r from-white to-cyan-100">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center py-10 px-2">
                <h1 class="text-md lg:text-2xl font-semibold">
                    Materi Tersedia
                </h1>

                <router-link :to="{ name: 'home' }" class="text-cyan-600 font-semibold text-sm">Lihat
                    Semua</router-link>
            </div>

            <div class="grid lg:grid-cols-4 gap-4 pb-20 px-3">
                <div class="bg-white shadow-lg rounded-lg hover:shadow-xl">
                    <img src="/banner.png" class="w-100 rounded-t-lg">
                    <div class="p-5 flex flex-col gap-y-2 lg:gap-y-3">
                        <p class="text-xs lg:text-sm text-gray-500">Instruktur Mang Asep</p>
                        <h1 class="lg:text-xl font-bold">HTML & CSS ( Design web toko online )</h1>
                        <div class="flex text-gray-500 text-xs lg:text-sm items-center justify-between">
                            <p>Level Pemula</p>
                            <p>25 Materi</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg hover:shadow-xl">
                    <img src="/banner.png" class="w-100 rounded-t-lg">
                    <div class="p-5 flex flex-col gap-y-2 lg:gap-y-3">
                        <p class="text-xs lg:text-sm text-gray-500">Instruktur Mas Cherry </p>
                        <h1 class="lg:text-xl font-bold">PHP BASIC ( CRUD Data & logic auth )</h1>
                        <div class="flex text-gray-500 text-xs lg:text-sm items-center justify-between">
                            <p>Level Pemula</p>
                            <p>34 Materi</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg hover:shadow-xl">
                    <img src="/banner.png" class="w-100 rounded-t-lg">
                    <div class="p-5 flex flex-col gap-y-3">
                        <p class="text-xs lg:text-sm text-gray-500">Instruktur Mas roma & Mas Cherry</p>
                        <h1 class="lg:text-xl font-bold">Laravel From Basic to advance ( membangun </h1>
                        <div class="flex text-gray-500 text-xs lg:text-sm items-center justify-between">
                            <p>Level Medium/advance</p>
                            <p>55 Materi</p>
                        </div>

                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-lg hover:shadow-xl">
                    <img src="/banner.png" class="w-100 rounded-t-lg">
                    <div class="p-5 flex flex-col gap-y-3">
                        <p class="text-xs lg:text-sm text-gray-500">Instruktur Mas Roma & Mang Asep</p>
                        <h1 class="lg:text-xl font-bold">Javascript Basic & Vue js from zero to hero</h1>
                        <div class="flex text-gray-500 text-xs lg:text-sm items-center justify-between">
                            <p>Level Pemula</p>
                            <p>25 Materi</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto mb-10">
        <div class="flex flex-col items-center mx-auto pt-10 pb-10 justify-center gap-2 lg:gap-5">
            <h1 class="text-2xl lg:text-5xl font-semibold text-cyan-600">
                Biaya Investasi
            </h1>
            <p class="lg:text-xl text-center">10% dari biaya kursus ini akan diinfakkan untuk <br />
                <a href="https://maps.app.goo.gl/Sk4sef5e4rLjfCrB7" class="lg:text-xl font-bold text-cyan-600">Pesantren
                    Daarul Mukhtar Tangerang</a>
            </p>
        </div>

        <div class="mx-2">
            <div class="shadow-xl max-w-lg mx-auto border-[1px] border-cyan-600 px-5 py-5 rounded-lg">

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#00a3af" fill-rule="evenodd"
                                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Akses semua materi tanpa biaya tambahan</span>
                        </li>
                        <li class="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#00a3af" fill-rule="evenodd"
                                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Akses tanya jawab di kolom diskusi</span>
                        </li>
                        <li class="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#00a3af" fill-rule="evenodd"
                                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                                    clip-rule="evenodd" />
                            </svg>
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

    </div>



</template>

<script>
import Banner from '../components/Banner.vue'
export default {
    name: 'HomeComponent',
    components: {
        Banner
    }
}
</script>