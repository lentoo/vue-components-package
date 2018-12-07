export default {
  name: 'cc-row',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'cc-row'
      ]
    }, this.$slots.default)
  }
}