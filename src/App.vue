<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <notification :show="true" content="test">
    </notification> -->
    <!-- <button @click="notify('top-left')">top-left</button>
    <button @click="notify('top-right')">top-right</button>
    <button @click="notify('bottom-left')">bottom-left</button>
    <button @click="notify('bottom-right')">bottom-right</button> -->
    <!-- <demo-block></demo-block> -->
    <notification-md></notification-md>
  </div>
</template>

<script>
import NotificationMd from '../example/docs/notification.md'
import 'highlight.js/styles/color-brewer.css';
// import Notification from './components/notification/notification.vue'

export default {
  name: 'app',
  components: {
    NotificationMd
  },
  mounted () {
  },
  methods: {
    notify (position) {
      this.$notify({
        title: '标题',        
        content: '这是一条通知内容',
        position
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
