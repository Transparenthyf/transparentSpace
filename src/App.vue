<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped>
#menu {
  .flex-grow {
    flex-grow: 1;
  }
}
</style>
