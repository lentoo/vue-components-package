<template>
  <header class="cc-header">
    <div class="cc-header-warpper container">
      <img class="cc-header__logo"  src="../assets/images/logo-ccode.png" alt="logo" srcset="">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .cc-header {
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 8px 0 8px rgba(0, 0, 0, .2);
    box-sizing: border-box;
    &__logo {
      display: inline-block;
      height: 55px;
      margin-top: 12px;
    }
  }
</style>
