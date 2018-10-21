<template>
  <button class="lxb-button" :class="[`lxb-button__${btnType}`]"><slot></slot></button>
</template>

<script>
export default {
  name: 'lxb-button',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    btnType() {
      const btnTypes = ['default', 'primary', 'success']
      return btnTypes.includes(this.type) ? this.type : 'default'
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
  .lxb-button {
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
      border-color: #c6e2ff;
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
      border-color: #c6e2ff;
      background-color: $successColor;
      &:hover {
        background-color: $successHoverColor;
      }
      &:active {
        background-color: $successColor;
      }
    }
  }
</style>
