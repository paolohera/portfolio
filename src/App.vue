<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './views/Nav.vue'
import Body from './views/Body.vue'
import Footer from './views/Footer.vue'
import Space from './components/Space.vue'
</script>

<template>
  <Space />
   <Nav />
   
   <RouterView />
  <Body />
  <Footer />
</template>

<style scoped>

</style>
