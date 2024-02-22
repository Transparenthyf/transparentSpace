<script setup lang="ts">
import { onMounted, reactive } from 'vue'

/** 卡片列表总宽度 */
const cardListWidth: number = 23
/** 当前选中卡片宽度 */
const activeCardWidth: number = 13

interface Card {
  name: string
  displayName: string
  span: number
}
/** 卡片列表 */
let cardList = reactive<Card[]>([
  {
    name: 'annotation',
    displayName: '标注台',
    span: 0
  },
  {
    name: 'go',
    displayName: '流程图',
    span: 0
  },
  {
    name: 'three',
    displayName: '3D',
    span: 0
  }
])

// const view = reactive({})

/**
 * 放大某个卡片
 * @param cardName 要放大的卡片名
 */
function magnifyCard(cardName: string) {
  for (const card of cardList) {
    if (card.name === cardName) {
      card.span = activeCardWidth
    } else {
      card.span = Math.floor((cardListWidth - activeCardWidth) / cardList.length)
    }
  }
}

/** 重新分配空间 */
function recoverCard() {
  for (const card of cardList) {
    card.span = Math.floor(cardListWidth / cardList.length)
  }
}

onMounted(() => {
  recoverCard()
})
</script>

<template>
  <div class="container">
    <el-row justify="space-around" @mouseleave="recoverCard">
      <el-col v-for="card of cardList" :key="card.name" :span="card.span" @mouseenter="magnifyCard(card.name)">
        <el-card shadow="hover"> {{ card.displayName }} </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped less>
.el-row {
  height: 100%;

  .el-col {
    transition: all 0.3s ease-in-out;
  }

  .el-card {
    height: 100%;
  }
}
</style>
