<script setup lang="ts">
import { reactive } from 'vue'

const view = reactive({
  activeIndex: '1'
})
</script>

<template>
  <el-menu id="menu" :default-active="view.activeIndex" :ellipsis="false" mode="horizontal">
    <el-menu-item>logo</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">个人简介</el-menu-item>
    <el-menu-item index="2">项目实例</el-menu-item>
    <el-menu-item index="5">关于本站</el-menu-item>
  </el-menu>
</template>

<style scoped less>
.flex-grow {
  flex-grow: 1;
}
</style>
