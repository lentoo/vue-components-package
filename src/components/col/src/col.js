export default {
  name: "cc-col",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    span: {
      type: Number,
      default: 24
    },
    offset: Number
  },
  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options._componentTag !== "cc-row") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0
    }
  },
  render(h) {
    const classList = []
    classList.push(`cc-col-${this.span}`);
    if (this.offset) {
      classList.push(`cc-col-offset-${this.offset}`)
    }
    const style = {}
    if (this.gutter && this.gutter !== 0) {
      style.paddingLeft = `${this.gutter / 2}px`;
      style.paddingRight = style.paddingLeft
    }
    // ["span", "offset"].forEach( prop => {
    //   this[prop]
    // })
    return h(this.tag,
      {
        class:["cc-col", classList],
        style
      }, this.$slots.default);
  }
};
