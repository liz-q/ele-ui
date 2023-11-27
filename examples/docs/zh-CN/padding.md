## Padding 内边距容器

一个含有内边距的div容器

### 等内边距容器

:::demo 使用`size`属性定义内边距的大小，默认是 16。
```html
<template>
    <ele-padding class="demo-padding" :size="16">
        内边距为16px
    </ele-padding>
</template>
```
:::

### 不等内边距容器

:::demo 使用`sizes`定义每个方向的内边距。
```html
<template>
    <ele-padding class="demo-padding" :sizes="[16, 24]">
        上下为16px，左右为24px
    </ele-padding>
    <br>
    <ele-padding class="demo-padding" :sizes="[10, 24, 16, 24]">
        上右下左分别是：10px, 24px, 16px, 24px
    </ele-padding>  
</template>
```
:::

### 控制在某个方向上内边距是否存在

:::demo 使用`type`属性定义需要哪个方向的边距。1 代表需要，0 代表不需要。
```html
<template>
    <ele-padding class="demo-padding" :type="[1,0,1,0]">
        上下有，左右没有
    </ele-padding>
    <br>
    <ele-padding class="demo-padding" :type="[0,1,0,1]">
        上下没有，左右有
    </ele-padding>
    <br>
    <ele-padding class="demo-padding" :type="[1,0]">
        上下有，左右没有
    </ele-padding>
    <br>
    <ele-padding class="demo-padding" :type="[0,1]">
        上下没有，左右有
    </ele-padding>
</template>
```
:::

### flex 布局

:::demo 使用`flex`属性开启`flex`布局。默认垂直居中对齐，左右两端对齐。也可以改变默认布局，`flex`容器属性都可以当做组件属性传入。<a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank">flex布局教程</a>
```html
<template>
    <ele-padding class="demo-padding" flex>
        <div>left</div>
        <div>right</div>
    </ele-padding>
    <br>
    <ele-padding class="demo-padding" flex justifyContent="flex-satrt">
        <div>logo</div>
        <div style="margin-left: 24px;">title</div>
    </ele-padding>
</template>
```
:::

### 内部元素间距

:::demo 使用`gutter`属性设置内部元素间距。
```html
<template>
    <ele-padding class="demo-padding" flex justifyContent="flex-satrt" :gutter="16">
        <div style="border: 1px solid #ddd;">元素一</div>
        <div style="border: 1px solid #ddd;">元素二</div>
    </ele-padding>
</template>
```
:::

### Attributes
| 参数      | 说明 | 类型      | 可选值                                     | 默认值   |
|---------- |--|---------- |-----------------------------------------|-------- |
| size     | 尺寸（内边距） | number  | - |    16     |
| sizes     | 多个尺寸（内边距） | number[]  | - |    -     |
| type     | 类型（依次代表上，右，下，左，1代表在这个方向有值，0代表没值） | array  | [1,0,1,0] |    [1]     |
| flex     | 开启flex布局 | boolean  | - |    false     |
| gutter     | 内部元素间距 | number  | - |    -     |
