import mian from './main.vue'
import Vue from 'vue'

const Component = {
  extends: mian,
  computed: {
  },
  data() {
    return {
      timer: null,
      autoClose: 3000,
      height: 0
    }
  },
  mounted () {
    this.createTimer()
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout( () => {
          this.visible = false
        },this.autoClose)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    afterEnter () {
      this.height = this.$el.offsetHeight
    },
    mouseenter () {
      this.clearTimer()
    },
    mouseleave () {
      this.createTimer()
    }
  },
  beforeDestroy () {
    this.clearTimer()
  }
}

const NotificationConstrucotr = Vue.extend(Component)

let seed = 1

const instances = []

const removeInstance = (instance) => {
  if (!instance) return

  const index = instances.findIndex( inst => inst.id === instance.id)
  instances.splice(index, 1)  
  document.body.removeChild(instance.$el)  
  instance.$destroy()
  
  const removeHeight = instance.height
  for (let i = index; i < instances.filter(item => item.position === instance.position).length; i++) {
    const inst = instances[i];
    inst.verticalOffset = inst.verticalOffset - removeHeight - 16
  }
}
const notify = (options) => {
  if (Vue.prototype.$isServer) return
  const id = `notification_${seed++}`
  const { position, autoClose, ...rest } = options
  let instance = new NotificationConstrucotr({
    propsData: {
      position,
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  
  instance.id = id
  instance = instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true

  let verticalOffset = 0
  instances.filter( item => item.position === position).forEach( item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset

  instance.$on('closed', () => {
    removeInstance(instance)
  })

  instance.$on('close', () => {    
    instance.visible = false
  })

  instances.push(instance)
  return instance
}


export default notify