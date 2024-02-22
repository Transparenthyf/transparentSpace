<script setup lang="ts">
import { onMounted } from 'vue'
import axios from '../utils/axios'
import { marked } from 'marked'
import '../assets/less/markdown.less'

let resumeHTML = ''
let resumeContainer: Element | null = null

onMounted(() => {
  axios.get('/resume').then(async (res) => {
    if (res.status === 200) {
      resumeHTML = await marked(res.data)
    }

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
  height: 100%;
  overflow: auto;
  padding: 0 50px;
}
</style>
