import Vue from 'vue'
import router from './router'
import App from './App.vue'

import DemoBlock from './components/demo-block.vue'

import lt from '../src/main'
import './assets/styles/common.scss'

import 'highlight.js/styles/color-brewer.css';

Vue.component(DemoBlock.name, DemoBlock)
Vue.use(lt)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')