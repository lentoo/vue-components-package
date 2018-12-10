## Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局
使用单一分栏创建基础的栅格布局。

:::code 通过row和col组件，并通过组件的```span```属性我们可以自由地组合布局
```html
<template>
  <cc-row>
    <cc-col :span="24">
      <div class="grid-content bg-purple"></div>
    </cc-col>
  </cc-row>
  <cc-row>
    <cc-col :span="12"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="12"><div class="grid-content bg-purple-dark"></div></cc-col>
  </cc-row>
  <cc-row>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple-light"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row>
    <cc-col :span="4"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-light"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-light"></div></cc-col>
  </cc-row>
</template>
<style lang="scss">
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::

### 分栏偏移
支持偏移指定栏数
:::code 通过指定col组件的```offset```属性可以指定分栏偏移的栏数
```html
<template>
  <cc-row>
    <cc-col :offset="12" :span="12"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row>
    <cc-col :offset="6" :span="6"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :offset="6" :span="6"><div class="grid-content bg-purple-light"></div></cc-col>
  </cc-row>
  <cc-row>
    <cc-col :span="4"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :offset="4" :span="4"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :offset="4" :span="4"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
</template>
<style lang="scss">
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::

### 分栏间隔
分栏之间存在间隔
:::code 通过Row组件的```gutter```属性来指定每一栏之间的间隔，默认间隔为0。
```html
<template>
  <cc-row :gutter="20">
    <cc-col :span="12"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="12"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="12"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="12"><div class="grid-content bg-purple-dark"></div></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple-light"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="4"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-light"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-light"></div></cc-col>
  </cc-row>
</template>
<style lang="scss">
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::

### 混合布局
通过基础的 1/24 分栏任意组合形成较为复杂的混合布局
:::code 使用 Row组件的```gutter```属性和Col组件的```span```、```offset```属性实现各种布局
```html
<template>
  <cc-row :gutter="20">
    <cc-col :span="12"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :offset="6" :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :offset="6" :span="6"><div class="grid-content bg-purple-dark"></div></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="2"><div class="grid-content bg-purple-dark"></div></cc-col>
    <cc-col :span="4"><div class="grid-content bg-purple-light"></div></cc-col>
    <cc-col :span="8"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="8"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :offset="4" :span="4"><div class="grid-content bg-purple-light"></div></cc-col>
    <cc-col :span="8"><div class="grid-content bg-purple-dark"></div></cc-col>
  </cc-row>
</template>
<style lang="scss">
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::

### 对齐方式
通过```flex```布局来对分栏进行灵活的对齐
:::code 将Row组件的```type```属性赋值为'flex'，可以启动flex布局，并通过```justify```属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
```html
<template>
  <cc-row type="flex" :gutter="20" justify="start">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row type="flex" justify="end" :gutter="20">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row type="flex" justify="center" :gutter="20">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row type="flex" justify="space-between" :gutter="20">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
  <cc-row type="flex" justify="space-around" :gutter="20">
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
    <cc-col :span="6"><div class="grid-content bg-purple"></div></cc-col>
  </cc-row>
</template>
<style lang="scss">
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::

### Col Api
| 参数   | 说明               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| span   | 栅格占据的列数     | number | -      | 24     |
| offset | 栅格左侧的间隔格数 | number | -      | 0      |
| tag    | 自定义元素标签     | string | -      | div    |