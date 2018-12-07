<template>
  <div class="lt-slidebar">
    <vue-scroll>
      <div v-for="(item, index) in list" :key="index"  class="lt-nav__container">
        <span class="lt-nav__container__title">
          {{item.name}}
        </span>
        <div v-for="(group, i) in item.groups" :key="i"  class="lt-nav__group">
          <div class="lt-nav__group__title">
            {{group.groupName}}
          </div>
          <ul class="lt-nav__list" v-for="(list, j) in group.list" :key="j">
            <li class="lt-nav__item"><router-link :to="list.path">{{list.title}}</router-link> </li>
          </ul>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.lt-slidebar {
  // padding-bottom: 200px;
  box-sizing: border-box;
  height: calc(100vh - 80px);
  // overflow-y: auto;
}
.lt-nav__container {
  a {
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #333;
    text-decoration: none;

  }
  &__title {
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #333;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 700;
  }
  &:last-child {
    padding-bottom: 240px;
  }
}
.lt-nav__group {
  &__title {
    font-size: 12px;
    color: rgb(153, 153, 153);
    line-height: 26px;
    margin-top: 12px;
  }
}
.lt-nav {
  &__item a{
    font-size: 14px;
    color: rgb(68, 68, 68);
    &:hover {
      color: rgb(64, 158, 255);
    }
  }
}
</style>
