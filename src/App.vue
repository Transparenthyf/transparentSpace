<script setup lang="ts">
import Footer from './components/Footer.vue'
import { reactive } from 'vue'

const view = reactive({
  activeIndex: 1
})
</script>

<template>
  <el-menu :default-active="view.activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2"> 2 </el-sub-menu>
    <el-menu-item index="3">3</el-menu-item>
    <el-menu-item index="4">4</el-menu-item>
  </el-menu>
  <Footer></Footer>
</template>

<style scoped></style>
