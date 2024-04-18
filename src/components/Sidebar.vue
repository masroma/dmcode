<template>
    <aside class="bg-cyan-600 text-white h-screen w-64 flex-shrink-0 flex flex-col justify-between fixed">
        <div class="p-4 flex flex-col gap-y-5">
            <img src="/logoputih.png" alt="logo" style="margin-left: -10px;" />
            <ul class="space-y-4">
                <li><router-link :to="{ name: 'dashboard' }"
                        class="block flex gap-x-2 p-2 items-center rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z" />
                        </svg> Dashboard</router-link></li>
                <li><router-link :to="{ name: 'kursus' }"
                        class="block p-2 gap-x-2 flex items-center rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" fill-rule="evenodd"
                                d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.172 4.172 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z"
                                clip-rule="evenodd" />
                            <path fill="white"
                                d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64c-.109.793-.308 1.213-.613 1.513c-.306.299-.734.494-1.544.6c-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111c-.81-.107-1.238-.302-1.544-.601c-.305-.3-.504-.72-.613-1.513c-.041-.3-.068-.637-.084-1.02a2.464 2.464 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083" />
                        </svg> Kursus Saya</router-link></li>
                <li><router-link :to="{ name: 'sertifikat' }"
                        class="block p-2 flex items-center gap-x-2 rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="white"
                                d="M232 86.53V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h120v24a8 8 0 0 0 12 7l24-13.74L220 231a8 8 0 0 0 12-7v-62.53a51.88 51.88 0 0 0 0-74.94M128 144H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 98.21l-16-9.16a8 8 0 0 0-7.94 0l-16 9.16V172a51.88 51.88 0 0 0 40 0ZM196 160a36 36 0 1 1 36-36a36 36 0 0 1-36 36" />
                        </svg>Sertifikat</router-link></li>
                <li><router-link :to="{ name: 'konsultasi' }"
                        class="block p-2 flex items-center gap-x-2 rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path
                                    d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" />
                                <circle cx="17" cy="17" r="5" />
                            </g>
                        </svg> Jadwal Konsultasi</router-link>
                </li>

            </ul>
        </div>
        <div class="px-1">
            <ul class="space-y-2 bg-cyan-700 p-2 m-2 rounded-lg">

                <li><a href="#" class="block py-2 flex items-center gap-x-2 rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" fill-rule="evenodd"
                                d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                                clip-rule="evenodd" />
                        </svg>Profile</a></li>
                <li><a href="#" class="block py-2 flex items-center gap-x-2 rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
                            <path fill="white" d="M11 11h-1v-1h1zm-3 0h1v-1H8zm5 0h-1v-1h1z" />
                            <path fill="white" fill-rule="evenodd"
                                d="M3 6V3.5a3.5 3.5 0 1 1 7 0V6h1.5A1.5 1.5 0 0 1 13 7.5v.55a2.5 2.5 0 0 1 0 4.9v.55a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 0 13.5v-6A1.5 1.5 0 0 1 1.5 6zm1-2.5a2.5 2.5 0 0 1 5 0V6H4zM8.5 9a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 0 0 0-3z"
                                clip-rule="evenodd" />
                        </svg> Ganti Password</a></li>
                <li><router-link :to="{ name: 'home' }"
                        class="block py-2 flex items-center gap-x-2 rounded hover:bg-cyan-800"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white"
                                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" />
                        </svg> Keluar</router-link></li>
            </ul>
        </div>
    </aside>
</template>