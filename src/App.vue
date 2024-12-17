<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './views/Nav.vue'
import Body from './views/Body.vue'
import Footer from './views/Footer.vue'

</script>

<template>
   <Nav />
   <RouterView />
  <Body />
  <Footer />
</template>

<style scoped>

</style>
