## Margin 外边距容器

一个含有外边距的 div 容器

### 基本用法

:::demo 使用`size`属性定义外边距的大小，默认是 16
```html
<template>
  <div class="demo-margin-box">
      <ele-margin class="demo-margin" :size="16">内容</ele-margin>
  </div>
</template>
```
:::

### 只有上下边距和左右边距

:::demo 使用`type`属性定义需要哪个方向的边距。1 代表需要，0 代表不需要。
```html
<template>
    <div class="demo-margin-box">
        <ele-margin class="demo-margin" :type="[1,0,1,0]">内容</ele-margin>
    </div>
    <br>
    <div class="demo-margin-box">
        <ele-margin class="demo-margin" :type="[0,1,0,1]">内容</ele-margin>
    </div>
    <br>
    <div class="demo-margin-box">
        <ele-margin class="demo-margin" :type="[1,0]">内容</ele-margin>
    </div>
    <br>
    <div class="demo-margin-box">
        <ele-margin class="demo-margin" :type="[0,1]">内容</ele-margin>
    </div>
</template>
```
:::


### Attributes
| 参数      | 说明 | 类型      | 可选值                                     | 默认值   |
|---------- |--|---------- |-----------------------------------------|-------- |
| size     | 尺寸（外边距） | number  | - |    16     |
| type     | 类型（依次代表上，右，下，左，1代表在这个方向有值，0代表没值） | array  | [1,0,1,0] |    [1]     |
