import Vue from 'vue'
import router from './router'
import App from './App.vue'

import vuescroll from "vuescroll/dist/vuescroll-native";
import "vuescroll/dist/vuescroll.css";

import DemoBlock from './components/demo-block.vue'
import './assets/styles/common.scss'
import cc from '../src/index'
// import { Button, Row } from '../src'
// import '@/components/theme-chalk/index.scss'

// import 'highlight.js/styles/color-brewer.css';
import "highlight.js/styles/solarized-light.css";

Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "rgba(64, 158, 255, .8)",
    size: '3px'
  }
};

Vue.component(DemoBlock.name, DemoBlock)
Vue.use(cc)
    // .use(Row)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')