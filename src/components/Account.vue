<template>
    <div class="flex items-center gap-x-2">
        <img src="https://via.placeholder.com/50x50" class="h-12 w-12 rounded-full">
        <div class="flex flex-col ">

            <h2 class="text-md font-bold text-cyan-600 capitalize">{{ user.name }}</h2>

            <div class=" text-cyan-600 w-max text-xs font-semibold">{{ user.email }}
            </div>
        </div>
    </div>
</template>


<script>

//hook vuex
import { useStore } from 'vuex'

//hook vue router
import { useRouter } from 'vue-router'

//hook vue
import { computed, onMounted } from 'vue'



export default {

    name: 'DashboardComponent',

    setup() {

        //store vuex
        const store = useStore()
        //mounted
        onMounted(() => {
            //panggil action "getUser" dari module "auth" vuex
            store.dispatch('auth/getUser')

        })

        //data user login
        const user = computed(() => {
            return store.state.auth.user
        })


        return {    // <-- method logout
            user,       // <-- state user
        }

    }
}
</script>

<style></style>

<style></style>