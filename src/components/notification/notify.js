import Notification from './notification.vue'
import Vue from 'vue'

const Component = {
  extends: Notification,
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
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
  for (let i = index; i < instances.length; i++) {
    const inst = instances[i];
    inst.verticalOffset = inst.verticalOffset - removeHeight - 16
  }
}
const notify = (options) => {
  if (Vue.prototype.$isServer) return
  const id = `notification_${seed++}`

  let instance = new NotificationConstrucotr({
    propsData: options
  })
  
  instance.id = id
  instance = instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true

  let verticalOffset = 0
  instances.forEach( item => {
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