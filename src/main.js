import Vue from 'vue'
import App from './App.vue'
import Notify from './components/notification'

Vue.config.productionTip = false

Vue.use(Notify)

new Vue({
  render: h => h(App)
}).$mount('#app')
