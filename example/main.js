import Vue from 'vue'
import router from './router'
import App from './App.vue'

import DemoBlock from './components/demo-block.vue'
import './assets/styles/common.scss'
import lentoo from '@'
// import { Button, Row } from '../src'
// import '@/components/theme-chalk/index.scss'

import 'highlight.js/styles/color-brewer.css';
Vue.component(DemoBlock.name, DemoBlock)
Vue.use(lentoo)
    // .use(Row)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')