<script setup lang="ts">
import { onMounted, reactive } from 'vue'

/** 卡片列表总宽度 */
const cardListWidth: number = 23
/** 当前选中卡片宽度 */
const activeCardWidth: number = 13

interface Card {
  /** 卡片名 */
  name: string
  /** 显示名称 */
  displayName: string
  /** 卡片宽度 */
  span: number
  /** 简介 */
  resume: string
  /** 详情 */
  detail: string
  /** 是否被选中 */
  isActive: boolean
  /** 项目链接 */
  link: string
  /** 图片链接 */
  image: string
}
/** 卡片列表 */
let cardList = reactive<Card[]>([
  {
    name: 'diagram',
    displayName: '流程图(制作中)',
    span: 0,
    resume: '使用提供的模块配置流程',
    detail: '模块可以任意组合，支持设置模块参数、获取相连模块参数等功能',
    isActive: false,
    link: 'https://diagram.transparenthyf.cc/',
    image: 'https://transparenthyf.cc/images/diagram.png'
  },
  {
    name: 'annotation',
    displayName: '标注台(制作中)',
    span: 0,
    resume: '对图片特征进行标注',
    detail: '标注台支持多边形、矩形、圆形、多段线的绘制、修改和裁剪功能，并且支持多种快捷键',
    isActive: false,
    link: 'https://annotation.transparenthyf.cc/',
    image: 'https://transparenthyf.cc/images/annotation.png'
  },
  {
    name: 'three',
    displayName: '3D 展示(制作中)',
    span: 0,
    resume: '展示一个简单的 3D 场景',
    detail: '支持简单的视角切换',
    isActive: false,
    link: 'https://three.transparenthyf.cc/',
    image: 'https://transparenthyf.cc/images/three.png'
  }
])

/** 选中卡片计时器 */
let selectCardTimer: number | null = null

// const view = reactive({})

/**
 * 放大某个卡片
 * @param cardName 要放大的卡片名
 */
function magnifyCard(cardName: string) {
  for (const card of cardList) {
    if (card.name === cardName) {
      card.span = activeCardWidth

      if (selectCardTimer !== null) {
        // 进入此分支说明鼠标在 300 ms 内进入了新的 card
        clearTimeout(selectCardTimer)
        selectCardTimer = null
      }
      selectCardTimer = setTimeout(() => {
        card.isActive = true
        selectCardTimer = null
      }, 200)
    } else {
      card.span = Math.floor((cardListWidth - activeCardWidth) / cardList.length)
      card.isActive = false
    }
  }
}

/** 重新分配空间 */
function recoverCard() {
  for (const card of cardList) {
    card.span = Math.floor(cardListWidth / cardList.length)
    card.isActive = false
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
        <a :href="card.link" target="_blank" class="no-underline">
          <el-card shadow="hover">
            <h1>{{ card.displayName }}</h1>
            <p>{{ card.resume }}</p>
            <p v-if="card.isActive">{{ card.detail }}</p>
            <img :src="card.image" alt="展示图片" class="resizable-image" />
          </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped less>
.el-row {
  height: 100%;

  .el-col {
    height: 100%;
    transition: all 0.3s ease-in-out;
  }

  .el-card {
    height: 100%;

    .resizable-image {
      width: 100%;
      height: calc(100% - 200px);
      object-fit: contain;
    }
  }
}
</style>
