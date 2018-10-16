<template>
  <transition :name="transitionName" @after-leave="afterLeave" @after-enter="afterEnter">
    <div :class="horizontalClass" @mouseenter="mouseenter" @mouseleave="mouseleave" v-show="visible" class="lxb-notification" :style="[verticalPositionn]">
      <h2 class="lxb-notification--title">{{title}}</h2>
      <div class="lxb-notification--content">{{content}}</div>
      <i class="lxb-notification--closeBtn iconfont icon-close">

      </i>
      <!-- <div class="notification-content">
        {{content}}
      </div> -->
      <!-- <div class="notification-close" @click="handleClose">
        {{close}}
      </div> -->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'bottom-right'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    verticalClass() {      
      return /^top-/.test(this.position) ? 'top' : 'bottom'
    },
    horizontalClass() {
      return this.position.indexOf('left') > -1 ? 'left' : 'right'
    },
    verticalPositionn() {
      return {
        [this.verticalClass]: `${this.verticalOffset}px`
      }
    },
    transitionName() {
      return `fade-${this.horizontalClass}`
    }
  },
  data() {
    return {
      verticalOffset: 16,
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
.lxb-notification {
  width: 330px;
  height: 80px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 14px 26px 14px 13px;
  position: fixed;
  transition: all .3s ease;
  &--title {
    padding: 0;
    margin: 0;
    color: #303133;
    font-size: 16px;
  }
  &--content {
    // flex: 0 0 220px;
    color: #606266;
  }
  &--closeBtn {
    position: absolute;
    right: 15px;
    top: 18px;
    color: #909399;
  }
  &.right {
    right: 16px;
  }
  &.left {
    left: 16px;
  }
}
.fade-left-enter {
  opacity: 0;
  transform: translateX(-200%)
}
.fade-right-enter {
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