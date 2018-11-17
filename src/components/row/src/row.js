export default {
  name: 'lt-row',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'lt-row'
      ]
    }, this.$slots.default)
  }
}