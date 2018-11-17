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
  <lt-row>
    <lt-button>默认按钮</lt-button>
    <lt-button type="primary">主要按钮</lt-button>
    <lt-button type="success">成功按钮</lt-button>
    <lt-button type="info">信息按钮</lt-button>
    <lt-button type="warning">警告按钮</lt-button>
    <lt-button type="danger">危险按钮</lt-button>
  </lt-row>
  <lt-row>
    <lt-button plain>朴素按钮</lt-button>
    <lt-button type="primary" plain>主要按钮</lt-button>
    <lt-button type="success" plain>成功按钮</lt-button>
    <lt-button type="info" plain>信息按钮</lt-button>
    <lt-button type="warning" plain>警告按钮</lt-button>
    <lt-button type="danger" plain>危险按钮</lt-button>
  </lt-row>
  <lt-row>
    <lt-button round plain>圆角按钮</lt-button>
    <lt-button round type="primary">主要按钮</lt-button>
    <lt-button round type="success">成功按钮</lt-button>
    <lt-button round type="info">信息按钮</lt-button>
    <lt-button round type="warning">警告按钮</lt-button>
    <lt-button round type="danger">危险按钮</lt-button>
  </lt-row>
</template>
```
:::


### 水波纹效果
使用rpple属性；来增加Button的水波纹效果
:::code rpple
```html
<template>
  <lt-button rpple>默认按钮</lt-button>
  <lt-button rpple type="primary">主要按钮</lt-button>
</template>
```
:::

### Attribute
| 参数   | 说明  | 类型     | 可选值                                                | 默认值 |
|------|-----|--------|----------------------------------------------------|-----|
| type | 类型  | string | primary / success / warning / danger / info / text | -   |
