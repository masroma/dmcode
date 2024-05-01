<template>
    <div class="w-full justify-center h-full bg-cyan-100 items-center mx-auto  py-20  px-2">
        <div class="max-w-xl mx-auto">
            <div class="bg-white p-5 shadow-lg rounded-lg flex flex-col">
                <div class="flex flex-col justify-center items-center">
                    <img src="/logo.png" class="w-1/2 text-center" alt="logo dmcode" style="margin-left: -18px;">
                    <p class="text-cyan-600 text-center font-semibold">
                        Silahkan masukan email yang terdaftar dibawah ini!<br />untuk recovery password
                    </p>
                </div>

                <form @submit.prevent="reset" class="my-5 flex flex-col gap-y-5">
                    <div class="flex flex-col gap-y-2">
                        <p
                            :class="validation.error && validation.error.email && validation.error.email.length > 0 ? 'text-red-500' : 'text-cyan-600'">
                            Email
                        </p>
                        <div
                            :class="['flex', 'border-2', { 'border-red-500': validation.error && validation.error.email[0] }, 'border-cyan-600', 'rounded-lg']">
                            <input v-model="user.email" type="text"
                                class="flex-1 py-3 px-3 rounded-lg focus:outline-none" placeholder="email">
                            <div class="p-3 flex-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path :fill="validation.error && validation.error.email[0] ? '#FF3131' : '#00a3af'"
                                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                                </svg>
                            </div>

                        </div>
                        <p v-if="validation.error && validation.error.email[0]"
                            class="text-[11px] text-red-500 text-sm">
                            {{ validation.error.email[0] }}</p>
                    </div>


                    <button class="bg-cyan-600 p-3 text-white font-semibold rounded-lg">
                        <p v-if="!loading" class="font-semibold text-white ">Reset password</p>
                        <p v-else class="font-semibold text-white ">Loading ...</p>
                    </button>

                    <div class="flex justify-between items-center">
                        <p class="text-cyan-600">
                            <router-link :to="{ name: 'home' }" class="font-semibold">
                                Kembali ke home
                            </router-link>
                        </p>

                        <p class="text-cyan-600">
                            <router-link :to="{ name: 'login' }" class="font-semibold">Login</router-link>
                        </p>


                    </div>




                </form>
            </div>


        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useToast } from "vue-toastification"
import { useStore } from 'vuex'

export default {

    name: 'LoginComponent',

    setup() {


        const loading = ref(false);
        const toast = useToast()
        const store = useStore()
        //user state
        const user = reactive({
            email: '',

        })

        //validation state
        const validation = ref([])


        function reset() {

            loading.value = true;
            //define variable 
            let email = user.email

            //panggil action "login" dari module "auth" di vuex
            store.dispatch('auth/resetPassword', {
                email
            })
                .then(() => {
                    //redirect ke dashboard
                    // router.push({ name: 'resetpassword' })
                    toast.success("silahkan cek email untuk reset password")
                    loading.value = false;
                    user.email = ""
                }).catch(error => {

                    //assign validaation message

                    validation.value = error
                    toast.error(`${validation.value.error}`)

                    loading.value = false;

                }).finally(() => {
                    // Set loading to false setelah proses login selesai
                    loading.value = false;
                });
        }




        //return object
        return {



            reset,
            user,
            validation,

            loading
        }

    }

}
</script>