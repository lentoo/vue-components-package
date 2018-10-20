## Notification 通知
悬浮出现在页面角落，显示全局的通知提醒消息。
### 基本用法
适用性广泛的通知栏
:::demo Notification 组件提供通知功能，Element 注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。

```html
<template>
    <button @click="notify('top-left')">top-left</button>
    <button @click="notify('top-right')">top-right</button>
    <button @click="notify('bottom-left')">bottom-left</button>
    <button @click="notify('bottom-right')">bottom-right</button>
</template>


<script>
  export default {
    methods: {
      notify(position) {
          this.$notify({
            title: '标题',        
            content: '这是一条通知内容',
            position
          })
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
</script>
```
:::

### 自定义弹出位置
可以让 Notification 从屏幕四角中的任意一角弹出
:::demo 使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。

```html
<template>
    <button @click="notify('top-left')">top-left</button>
    <button @click="notify('top-right')">top-right</button>
    <button @click="notify('bottom-left')">bottom-left</button>
    <button @click="notify('bottom-right')">bottom-right</button>
</template>


<script>
  export default {
    methods: {
      notify(position) {
          this.$notify({
            title: '标题',        
            content: '这是一条通知内容',
            position
          })
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
</script>
```
:::