<template>
    <div class="w-full justify-center h-full bg-cyan-100 items-center mx-auto  py-20  px-2">
        <div class="max-w-xl mx-auto">
            <div class="bg-white p-5 shadow-lg rounded-lg flex flex-col">
                <div class="flex flex-col justify-center items-center">
                    <img src="/logo.png" class="w-1/2 text-center" alt="logo dmcode" style="margin-left: -18px;">
                    <p class="text-cyan-600 text-center font-semibold">
                        Masukan Password Baru Kamu
                    </p>

                    <!-- <p class="text-red-500" v-if="!validation.error.password">{{ validation.error }}</p> -->


                </div>

                <form @submit.prevent="resetpassword" class="my-5 flex flex-col gap-y-5">

                    <div class="flex flex-col gap-y-2">
                        <p :class="validation.error && validation.error.password[0] ? 'text-red-500' : 'text-cyan-600'">
                            Password
                        </p>
                        <div
                            :class="['flex', 'border-2', { 'border-red-500': validation.error && validation.error.password[0] }, 'border-cyan-600', 'rounded-lg']">
                            <input v-model="user.password" :type="showPassword ? 'text' : 'password'"
                                class="flex-1 focus:outline-none py-3 px-3 rounded-lg" placeholder="password">
                            <span class="p-3 flex-items-center" @click="togglePasswordVisibility" v-if="!showPassword">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        :fill="validation.error && validation.error.password[0] ? '#FF3131' : '#00a3af'"
                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                </svg>

                            </span>
                            <span class="p-3 flex-items-center" @click="togglePasswordVisibility" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        :fill="validation.error && validation.error.password[0] ? '#FF3131' : '#00a3af'"
                                        d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>

                        <p v-if="validation.error && validation.error.password"
                            class="text-[11px] text-red-500 text-sm">
                            {{ validation.error.password[0] }}</p>
                    </div>

                    <div class="flex flex-col gap-y-2">
                        <p :class="validation.error && validation.error.password[0] ? 'text-red-500' : 'text-cyan-600'">
                            Konfirmasi Password
                        </p>
                        <div
                            :class="['flex', 'border-2', { 'border-red-500': validation.error && validation.error.password[0] }, 'border-cyan-600', 'rounded-lg']">
                            <input v-model="user.password_confirmation"
                                :type="showPasswordConfirmation ? 'text' : 'password'"
                                class="flex-1 focus:outline-none py-3 px-3 rounded-lg" placeholder="password">
                            <span class="p-3 flex-items-center" @click="togglePasswordConfirmationVisibility"
                                v-if="!showPasswordConfirmation">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        :fill="validation.error && validation.error.password[0] ? '#FF3131' : '#00a3af'"
                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                </svg>

                            </span>
                            <span class="p-3 flex-items-center" @click="togglePasswordConfirmationVisibility" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        :fill="validation.error && validation.error.password[0] ? '#FF3131' : '#00a3af'"
                                        d="M14.33 7.17A15.642 15.642 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756a4 4 0 0 0 4.695-4.695l2.648-2.647C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5c-.598 0-1.183-.032-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z" />
                                </svg>
                            </span>

                        </div>
                        <p v-if="validation.error && validation.error.password"
                            class="text-[11px] text-red-500 text-sm">
                            {{ validation.error.password[0] }}</p>
                    </div>

                    <button class="bg-cyan-600 p-3 text-white font-semibold rounded-lg">
                        <p v-if="!loading" class="font-semibold text-white ">Buat Password Baru</p>
                        <p v-else class="font-semibold text-white ">Loading ...</p>
                    </button>




                    <div class="flex justify-center items-center">
                        <p class="text-cyan-600">
                            Sudah ingat password ? <router-link :to="{ name: 'login' }" class="font-semibold">masuk
                            </router-link>
                        </p>




                    </div>
                </form>
            </div>


        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useToast } from "vue-toastification"
//hook vue router
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router';


export default {

    name: 'RegisterComponent',

    setup() {

        const password = ref('');
        const showPassword = ref(false);
        const showPasswordConfirmation = ref(false);
        const loading = ref(false);
        const route = useRoute();
        const token = ref(null);
        const email = ref(null);


        // Methods
        const togglePasswordVisibility = () => {

            showPassword.value = !showPassword.value;
        };

        const togglePasswordConfirmationVisibility = () => {

            showPasswordConfirmation.value = !showPasswordConfirmation.value;
        };

        onMounted(() => {
            // Ambil token dari URL saat komponen dimount
            token.value = route.query.token;
            email.value = route.query.email;
        });

        //user state
        const user = reactive({
            token: token,
            email: email,
            password: '',
            password_confirmation: ''
        })

        //validation state
        const validation = ref([])
        const store = useStore()

        //route
        const router = useRouter()
        const toast = useToast()
        function resetpassword() {

            loading.value = true;
            //define variable 
            let token = user.token
            let email = user.email
            let password = user.password
            let password_confirmation = user.password_confirmation

            //panggil actions "register" dari module "auth"
            store.dispatch('auth/prosesresetpasword', {
                token,
                email,
                password,
                password_confirmation
            })
                .then(() => {

                    //redirect ke dashboard
                    router.push({ name: 'login' })
                    toast.success("Update password berhasil!,silahkan login")

                }).catch(error => {

                    //show validaation message
                    // validation.value = error;
                    router.push({ name: 'lupapassword' })
                    validation.value = error;
                    loading.value = false;
                    // console.log(validation.value.error.password[0])
                    if (!validation.value.error.password) {
                        toast.error(`${validation.value.error}`)
                    }



                })
        }


        //return object
        return {

            password,
            showPassword,
            togglePasswordVisibility,
            togglePasswordConfirmationVisibility,
            user,
            validation,
            showPasswordConfirmation,
            loading,
            resetpassword,
            toast,
            token,
            email
        }

    }

}
</script>