<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const view = reactive({
  activeIndex: router.path
})

onMounted(() => {
  console.log(router.path)
})
</script>

<template>
  <el-menu id="menu" :router="true" :default-active="view.activeIndex" :ellipsis="false" mode="horizontal">
    <div>logo</div>
    <div class="flex-grow"></div>
    <el-menu-item index="/">个人简介</el-menu-item>
    <el-menu-item index="/instance">项目实例</el-menu-item>
    <el-menu-item index="/about">关于本站</el-menu-item>
    <div>模式切换</div>
  </el-menu>
</template>

<style scoped less>
.flex-grow {
  flex-grow: 1;
}
</style>
