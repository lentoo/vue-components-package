export default {
  name: 'lt-col',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'lt-col'
      ]
    },this.$slots.default)
  }
}