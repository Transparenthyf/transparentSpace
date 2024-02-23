<script setup lang="ts">
import { onMounted } from 'vue'
import axios from '../utils/axios'
import { marked } from 'marked'
import '../assets/less/markdown.less'

let resumeHTML = ''
let resumeContainer: Element | null = null

onMounted(() => {
  // 向后端请求简历
  axios.get('/resume').then(async (res) => {
    if (res.status === 200) {
      // 将简历转换成 HTML 格式
      resumeHTML = await marked(res.data)
    }

    // 将简历挂载到界面上
    resumeContainer = document.getElementById('resumeContainer')
    if (resumeContainer !== null) {
      resumeContainer.innerHTML = resumeHTML
    }
  })
})
</script>

<template>
  <div class="container">
    <div id="resumeContainer" class="markdown"></div>
  </div>
</template>

<style scoped less>
#resumeContainer {
  width: 1000px;
  height: calc(100% - 60px);
  overflow: visible;
  margin: auto;
}
</style>
