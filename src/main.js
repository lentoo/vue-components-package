import Vue from 'vue'

import Notification from './components/notification'

const components = [
  // Notification
]
const _init = (Vue) => {
  components.map( component => Vue.component(component.name, component))
  
  Vue.use(Notification)
}
_init(Vue)
const install = (Vue) => {
  _init(Vue)
}
export default {
  Notification,
  install
}