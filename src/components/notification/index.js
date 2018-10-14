import Notification from './notification.vue'
import notify from './notify'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify;
}