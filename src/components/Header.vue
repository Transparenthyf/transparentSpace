<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const view = reactive({
  activeIndex: router.path
})
</script>

<template>
  <el-menu id="menu" :router="true" :default-active="view.activeIndex" :ellipsis="false" mode="horizontal">
    <div id="logo">
      <p>透明奇遇记</p>
    </div>
    <div class="flex-grow"></div>
    <el-menu-item index="/">个人简介</el-menu-item>
    <el-menu-item index="/instance">项目实例</el-menu-item>
    <el-menu-item index="/about">关于本站</el-menu-item>
    <div>
      <p>模式切换</p>
    </div>
  </el-menu>
</template>

<style scoped less>
#menu {
  padding: 0 10px;
  .flex-grow {
    flex-grow: 1;
  }
  border-bottom: 1px, solid, #dcdfe6;
}
</style>
