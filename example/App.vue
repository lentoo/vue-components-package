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
          <router-view></router-view>
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
      list: []
    };
  },
  mounted() {
    this.list = data
  },
  methods: {
    open() {
      this.$notify()
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
</style>
