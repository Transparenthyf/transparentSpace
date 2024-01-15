<script setup lang="ts">
import { reactive } from 'vue'

const view = reactive({
  cardList: [
    {
      name: 'annotation',
      displayName: '标注平台',
      span: 7
    },
    {
      name: 'go',
      displayName: '流程图',
      span: 7
    },
    {
      name: 'three',
      displayName: '3D',
      span: 7
    }
  ]
})

function magnifyCard(cardName: string) {
  for (const card of view.cardList) {
    if (card.name === cardName) {
      card.span = 15
    } else {
      card.span = 3
    }
  }
}

function recover() {
  for (const card of view.cardList) {
    card.span = 7
  }
}
</script>

<template>
  <div class="container">
    <el-row justify="space-around" @mouseleave="recover">
      <el-col v-for="card of view.cardList" :key="card.name" :span="card.span" @mouseenter="magnifyCard(card.name)">
        <el-card shadow="hover"> {{ card.displayName }} </el-card>
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
