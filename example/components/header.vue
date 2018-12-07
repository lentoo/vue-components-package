<template>
  <header class="lt-header">
    <div class="li-header-warpper container">
      <img class="lt-header__logo"  src="../assets/images/logo.png" alt="logo" srcset="">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .lt-header {
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 8px 0 8px rgba(0, 0, 0, .2);
    box-sizing: border-box;
    &__logo {
      display: inline-block;
      width: 200px;
      height: 80px;
    }
  }
</style>
