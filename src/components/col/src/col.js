export default {
  name: 'cc-col',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'cc-col'
      ]
    },this.$slots.default)
  }
}