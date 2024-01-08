<script setup lang="ts">
import Footer from './components/Footer.vue'
import { reactive } from 'vue'

const view = reactive({
  activeIndex: '1'
})
</script>

<template>
  <el-menu id="menu" :default-active="view.activeIndex" mode="horizontal">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item index="2">Processing Center</el-menu-item>
    <el-menu-item index="3">Processing Center</el-menu-item>
    <el-menu-item index="4">Processing Center</el-menu-item>
  </el-menu>
  <Footer></Footer>
</template>

<style scoped></style>
