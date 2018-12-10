<template>
  <div id="app">
    <cc-header>
    </cc-header>
    <main class="body container">
      <div class="body-left">
        <cc-slideber :list="list"></cc-slideber>
      </div>
      <div class="body-right">
        <vue-scroll>
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
          <cc-row type="flex" justify="space-between" class="nav">
            <cc-col :span="12">
              <router-link v-if="pre" tag="div" :to="pre.path">
                <i class="iconfont icon-arrow-left"></i>
                <span>{{pre.title}}</span>
              </router-link>
            </cc-col>
            <cc-col :span="12">
              <router-link style="text-align: right;" v-if="next" tag="div" :to="next.path">
                <span>{{next.title}}</span><i class="iconfont icon-arrow-right"></i>
              </router-link>
            </cc-col>
          </cc-row>
        </vue-scroll>
      </div>
    </main>
  </div>
</template>

<script>
import CcHeader from "./components/header";
import CcSlideber from "./components/slidebar";
import navConfigJson from "./nav.config.json";
// import Notification from './components/notification/notification.vue'
const data = navConfigJson
export default {
  name: "app",
  components: {
    CcHeader,
    CcSlideber
  },
  data() {
    return {
      list: [],
      navArr: [],
      pre: null,
      next: null
    };
  },
  mounted() {
    this.list = data
    let navArr = []
    this.list.forEach( item => item.groups.forEach( g => navArr = [...navArr, ...g.list]));
    this.navArr = navArr
  },
  watch: {
    $route() {
      const index = this.navArr.findIndex( nav => nav.path === this.$route.path )
      if (index > 0) {
        this.pre = this.navArr[index - 1]
      } else {
        this.pre = null
      }
      if (index < this.navArr.length - 1) {
        this.next = this.navArr[index + 1]
      } else {
       this.next = null
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  h2 {
    font-size: 28px;
    font-weight: 400;
    color: rgb(31, 47, 61);
  }
  h3 {
    margin: 55px 0 20px;
  }
  p {
    font-size: 14px;
    color: rgb(94, 109, 130);
    margin: 14px 0;
  }
}
.body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .body-left {
    flex: 0 0 240px;
  }
  .body-right {
    flex: 1;
    height: calc(100vh - 100px);
    padding-left: 20px;
    padding-top: 20px;
    .__rail-is-vertical {
      position: fixed;
    }
  }
}
.nav {
  div {
    padding: 20px 0;
    line-height: 30px;
    color: #333;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
  .iconfont {
    padding-top: 3px;
    margin-bottom: -3px;
  }
  span {
    font-size: 14px;
    vertical-align: middle;
  }
}
table {
  width: 100%;
  tr {
    border-bottom: 1px solid #ccc;
  }
  th {
    color: #666;
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    padding: 0 10px;

  }
  td {
    padding: 0 10px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
  }
}
.slide-enter-active,.slide-leave-active {
  transition: .3s all ease;
}
.slide-enter,.slide-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
.slide-enter-to,.slide-leave {
  transform: translateY(0);
  opacity: 1;
}
.iconfont {
  position: relative;
  vertical-align: middle;
}
</style>
