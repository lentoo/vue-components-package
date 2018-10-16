import notify from './notify'

export default (Vue) => {
  Vue.prototype.$notify = notify;
}