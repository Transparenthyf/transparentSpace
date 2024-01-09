import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../pages/Resume.vue'
import Instance from '../pages/Instance.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/instance',
    name: 'Instance',
    component: Instance
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
