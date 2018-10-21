import Vue from 'vue'

import Notification from './components/notification'
import Button from './components/button'

const components = [
  Button,
  Notification
]
const _init = (Vue) => {
  components.map( component => Vue.use(component))
}
_init(Vue)
const install = (Vue) => {
  _init(Vue)
}
export default {
  Notification,
  install
}