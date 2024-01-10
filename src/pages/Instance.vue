<script setup lang="ts">
import { reactive } from 'vue'

const view = reactive({
  colSpan: {
    annotation: 7,
    go: 7,
    three: 7
  }
})
</script>

<template>
  <div class="container">
    <el-row justify="space-around">
      <el-col :span="view.colSpan.annotation">
        <el-card shadow="hover"> 标注平台 </el-card>
      </el-col>
      <el-col :span="view.colSpan.go">
        <el-card shadow="hover"> Go.js 流程图 </el-card>
      </el-col>
      <el-col :span="view.colSpan.three">
        <el-card shadow="hover"> Three.js 3D </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped less>
.el-row {
  height: 100%;
  .el-card {
    height: 100%;
  }
}
</style>
