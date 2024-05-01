<template>
  <div>
    <!-- Header -->

    <Header
      v-if="this.$route.name != 'dashboard' && this.$route.name != 'login' && this.$route.name != 'register' && this.$route.name != 'lupapassword' && this.$route.name != 'kursus' && this.$route.name != 'sertifikat' && this.$route.name != 'konsultasi' && this.$route.name != 'listmateri' && this.$route.name != 'profile' && this.$route.name != 'password' && this.$route.name != 'add-kursus' && this.$route.name != 'editmateri' && this.$route.name != 'resetpassword'" />

    <!-- content -->
    <router-view></router-view>

    <!-- footer -->
    <Footer
      v-if="this.$route.name != 'dashboard' && this.$route.name != 'login' && this.$route.name != 'register' && this.$route.name != 'lupapassword' && this.$route.name != 'kursus' && this.$route.name != 'sertifikat' && this.$route.name != 'konsultasi' && this.$route.name != 'listmateri' && this.$route.name != 'profile' && this.$route.name != 'password' && this.$route.name != 'add-kursus' && this.$route.name != 'editmateri' && this.$route.name != 'resetpassword'" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const excludedRoutes = ['login', 'register', 'lupapassword', 'dashboard', 'kursus', 'sertifikat', 'konsultasi', 'listmateri', 'profile', 'password']
    const currentRoute = ref(useRoute().name)
    console.log(currentRoute);
    const isExcludedRoute = computed(() => {
      return excludedRoutes.includes(currentRoute.value)
    })

    const showHeader = computed(() => {
      return !isExcludedRoute.value
    })

    const showFooter = computed(() => {
      return !isExcludedRoute.value
    })

    return {
      showHeader,
      showFooter
    }
  }
}
</script>

<style></style>
