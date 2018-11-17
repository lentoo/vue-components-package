<template>
  <button @click="$emit('click')" class="lt-button" :class="[`lt-button__${btnType}`]"><slot></slot></button>
</template>

<script>
export default {
  name: 'lt-button',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    btnType() {
      const btnTypes = ['default', 'primary', 'success', 'info', 'warning', 'danger']
      return btnTypes.includes(this.type) ? this.type : 'default'
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
  .lt-button {
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    &__default{
      &:hover {
        color: $primaryColor;
        border-color: #c6e2ff;
        background-color: $defaultHoverBgColor;
      }
      &:active {
        border-color: $primaryColor;
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
    }
    &__success {
      color: $defaultColor;
      border-color: $successColor;;
      background-color: $successColor;
      &:hover {
        background-color: $successHoverColor;
      }
      &:active {
        background-color: $successColor;
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
    }
  }
</style>
