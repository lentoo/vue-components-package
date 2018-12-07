<style>
  .cc-button + .cc-button {
    margin-left: 10px;
  }
</style>

## Button 按钮
常用的操作按钮

### 基础用法
基础的按钮用法
:::code 使用```type```、```plain```、```round```和```circle```属性来定义 Button 的样式。
```html
<template>
  <cc-row>
    <cc-button>默认按钮</cc-button>
    <cc-button type="primary">主要按钮</cc-button>
    <cc-button type="success">成功按钮</cc-button>
    <cc-button type="info">信息按钮</cc-button>
    <cc-button type="warning">警告按钮</cc-button>
    <cc-button type="danger">危险按钮</cc-button>
  </cc-row>
  <cc-row>
    <cc-button plain>朴素按钮</cc-button>
    <cc-button type="primary" plain>主要按钮</cc-button>
    <cc-button type="success" plain>成功按钮</cc-button>
    <cc-button type="info" plain>信息按钮</cc-button>
    <cc-button type="warning" plain>警告按钮</cc-button>
    <cc-button type="danger" plain>危险按钮</cc-button>
  </cc-row>
  <cc-row>
    <cc-button round plain>圆角按钮</cc-button>
    <cc-button round type="primary">主要按钮</cc-button>
    <cc-button round type="success">成功按钮</cc-button>
    <cc-button round type="info">信息按钮</cc-button>
    <cc-button round type="warning">警告按钮</cc-button>
    <cc-button round type="danger">危险按钮</cc-button>
  </cc-row>
</template>
```
:::


### 水波纹效果
使用rpple属性；来增加Button的水波纹效果
:::code rpple
```html
<template>
  <cc-button rpple>默认按钮</cc-button>
  <cc-button rpple type="primary">主要按钮</cc-button>
</template>
```
:::

### Attribute
| 参数   | 说明  | 类型     | 可选值                                                | 默认值 |
|------|-----|--------|----------------------------------------------------|-----|
| type | 类型  | string | primary / success / warning / danger / info / text | -   |
