<template>
    <header class="ml-64 flex gap-x-32 bg-white shadow-md p-4 items-center w-screen fixed top-0 z-50">
        <Account />
        <div class="flex items-center bg-gray-100  w-1/2 rounded-lg focus:outline-none">
            <input type="text" placeholder="cari kursus kamu disini"
                class="px-3 py-3 flex-1 bg-gray-100 rounded-s-lg focus:outline-none">
            <button
                class="bg-cyan-600 py-3 px-3  text-white font-semibold border-[1px] rounded-r-lg border-cyan-600"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21l-4.3-4.3" />
                    </g>
                </svg></button>
        </div>


    </header>

</template>

<script>
import Account from '../components/Account.vue';

export default {
    name: 'NavbarComponent',
    components: {

        Account
    }
}

</script>