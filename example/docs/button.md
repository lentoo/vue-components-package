## Button 按钮
常用的操作按钮

### 基础用法
基础的按钮用法
:::code 使用type属性；来定义Button的样式
```html
<template>
  <lxb-button>默认按钮</lxb-button>
  <lxb-button type="primary">主要按钮</lxb-button>
  <lxb-button type="success">成功按钮</lxb-button>
</template>
```
:::

### Attribute
| 参数   | 说明  | 类型     | 可选值                                                | 默认值 |
|------|-----|--------|----------------------------------------------------|-----|
| type | 类型  | string | primary / success / warning / danger / info / text | -   |
