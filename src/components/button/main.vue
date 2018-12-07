<template>
  <button ref="btn" @click="onClick" class="cc-button" :class="[{
    [`cc-button__${btnType}`]: true,
    'is-plain': plain !== undefined,
    'is-round': round !== undefined
  }]"><slot></slot></button>
</template>

<script>
export default {
  name: "cc-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: null,
    rpple: null,
    round: null
  },
  computed: {
    btnType() {
      const btnTypes = [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger"
      ];
      return btnTypes.includes(this.type) ? this.type : "default";
    }
  },
  methods: {
    onClick($event) {
      if (this.rpple !== undefined) {
        this.addRippleEffect($event)
      }
      this.$emit('click')
    },
    addRippleEffect(e) {
      const target = this.$refs.btn;
      const rect = target.getBoundingClientRect();
      let ripple = target.querySelector('.ripple');
      if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple'
        ripple.style.height = ripple.style.width = Math.max(rect.width,
          rect.height) + 'px'
          target.appendChild(ripple);
      }
      ripple.classList.remove('show');
      const top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop;
      const left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft;
      ripple.style.top = top + 'px'
      ripple.style.left = left + 'px'
      ripple.classList.add('show');
      setTimeout(()=>{
        ripple.classList.remove('show');
      }, 1000)
    }
  }
};
</script>

<style lang="scss">
@import "../theme-chalk//index.scss";
.cc-button {
  box-sizing: border-box;
  width: 100px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  border-radius: 4px;
  -webkit-appearance: none;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  font-size: 14px;
  color: #606266;
  text-align: center;
  position: relative;
  overflow: hidden;
  user-select: none;
  &__default {
    &:hover {
      color: $primaryColor;
      border-color: #c6e2ff;
      background-color: $defaultHoverBgColor;
    }
    &:active {
      border-color: $primaryColor;
    }
    &.is-plain {
      background-color: #fff;
      color: #606266;
      &:hover {
        color: $primaryColor;
        border-color: $primaryHoverColor;
      }
    }
  }
  &__primary {
    color: $defaultColor;
    border-color: $primaryColor;
    background-color: $primaryColor;
    &:hover {
      background-color: $primaryHoverColor;
    }
    &:active {
      background-color: $primaryColor;
    }
    &.is-plain {
      background-color: #ecf5ff;
      color: $primaryColor;
      &:hover {
        color: $defaultColor;
        background-color: $primaryHoverColor;
      }
    }
  }
  &__success {
    color: $defaultColor;
    border-color: $successColor;
    background-color: $successColor;
    &:hover {
      background-color: $successHoverColor;
    }
    &:active {
      background-color: $successColor;
    }
    &.is-plain {
      background-color: #f0f9eb;
      color: #67c23a;
      &:hover {
        color: $defaultColor;
        background-color: $successColor;
      }
    }
  }
  &__info {
    color: $defaultColor;
    border-color: $infoColor;
    background-color: $infoColor;
    &:hover {
      background-color: $infoHoverColor;
    }
    &:active {
      background-color: $infoActiveColor;
    }
    &.is-plain {
      background-color: #f4f4f5;
      border-color: #d3d4d6;
      color: #909399;
      &:hover {
        color: $defaultColor;
        background-color: $infoActiveColor;
      }
    }
  }
  &__warning {
    color: $defaultColor;
    border-color: $warningColor;
    background-color: $warningColor;
    border-color: $warningColor;
    &:hover {
      background-color: $warningHoverColor;
    }
    &:active {
      background-color: $warningActiveColor;
    }
    &.is-plain {
      background-color: #fdf6ec;
      border-color: #f5dab1;
      color: #e6a23c;
      &:hover {
        color: $defaultColor;
        background-color: $warningHoverColor;
      }
    }
  }
  &__danger {
    color: $defaultColor;
    border-color: $dangerColor;
    background-color: $dangerColor;
    border-color: $dangerColor;
    &:hover {
      background-color: $dangerHoverColor;
    }
    &:active {
      background-color: $dangerActiveColor;
    }
    &.is-plain {
      background-color: #fef0f0;
      border-color: #fbc4c4;
      color: #f56c6c;
      &:hover {
        color: $defaultColor;
        background-color: $dangerHoverColor;
      }
    }
  }
  &.is-round {
    border-radius: 20px;
  }
}
.ripple {
  position: absolute;
  background: rgba(0, 0, 0, .2);
  border-radius: 100%;
  transform: scale(0);
  pointer-events: none;
}
.ripple.show {
  animation: ripple 0.75s ease;
}

@keyframes ripple {
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
