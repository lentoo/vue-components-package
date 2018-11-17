<style>
  .lt-button + .lt-button {
    margin-left: 10px;
  }
</style>

## Button 按钮
常用的操作按钮

### 基础用法
基础的按钮用法
:::code 使用type属性；来定义Button的样式
```html
<template>
  <lt-button>默认按钮</lt-button>
  <lt-button type="primary">主要按钮</lt-button>
  <lt-button type="success">成功按钮</lt-button>
  <lt-button type="info">信息按钮</lt-button>
  <lt-button type="warning">警告按钮</lt-button>
  <lt-button type="danger">危险按钮</lt-button>
</template>
```
:::

### Attribute
| 参数   | 说明  | 类型     | 可选值                                                | 默认值 |
|------|-----|--------|----------------------------------------------------|-----|
| type | 类型  | string | primary / success / warning / danger / info / text | -   |
