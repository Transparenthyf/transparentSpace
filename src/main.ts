import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// element plus 基础样式
import 'element-plus/dist/index.css'
// 覆盖 element plus 样式
import './assets/less/element.less'

// 界面基础样式
import './assets/less/base.less'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
