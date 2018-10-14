<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div @mouseenter="mouseenter" @mouseleave="mouseleave" v-show="visible" class="notification" :style="style">
      <div class="notification-content">
        {{content}}
      </div>
      <div class="notification-close" @click="handleClose">
        {{close}}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  props: {
    content: {
      type: String,
      default: ''
    },
    close: {
      type: String,
      default: 'close'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  data() {
    return {
      verticalOffset: 0,
      visible: false,
    };
  },
  mounted() {
    this.visible = this.show
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {},
    mouseenter () {},
    mouseeleave () {}
    
  }
};
</script>

<style lang="scss" scoped>
.notification {
  width: 300px;
  height: 80px;
  line-height: 80px;
  display: flex;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .8);
  color: #f5f5f5;
  transition: all .3s ease;
  .notification-content {
    flex: 0 0 220px;
    padding-left: 20px;
  }
  .notification-close {
    flex: 1;
    background-color: rgba(0, 255, 255, .8);
    cursor: pointer;
    text-align: center;
  }
}
.fade-enter {
  opacity: 0;
  transform: translateX(200%)
}
.fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(200%)
}
</style>