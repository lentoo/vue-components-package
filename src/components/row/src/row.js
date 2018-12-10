
export default {
  name: 'cc-row',
  props: {
    // 标签
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: String
  },
  computed: {
    justifys() {
      return ['start', 'center', 'end', 'space-between', 'space-around']
    }
  },
  render(h) {
    const style = {}
    const classList = []
    if (this.gutter) {
      style.marginLeft = `-${this.gutter / 2}px`
      style.marginRight = style.marginLeft;
    }
    if (this.type && this.type === 'flex') {
      classList.push('cc-row__flex')
    }
    if (this.justify && this.justifys.includes(this.justify)) {
      classList.push(`is-justify-${this.justify}`)
    }
    return h(this.tag, {
      class: [
        'cc-row',
        classList
      ],
      style
    }, this.$slots.default)
  }
}