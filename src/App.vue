<template>
  <div>

    <!-- Header -->
    <Header
      v-if="this.$route.name != 'login' && this.$route.name != 'register' && this.$route.name != 'lupapassword' && this.$route.name != 'dashboard' && this.$route.name != 'kursus' && this.$route.name != 'sertifikat' && this.$route.name != 'konsultasi'" />

    <!-- content -->
    <router-view></router-view>

    <!-- footer -->
    <Footer
      v-if="this.$route.name != 'login' && this.$route.name != 'register' && this.$route.name != 'lupapassword' && this.$route.name != 'dashboard' && this.$route.name != 'kursus' && this.$route.name != 'sertifikat' && this.$route.name != 'konsultasi'" />

  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {

  name: 'AppComponent',

  components: {
    Header,
    Footer
  }
}
</script>

<style></style>