## FlexBox 弹性布局

快速生成一个垂直居中的 flex 容器。

### 默认是两端对齐，垂直居中

:::demo
```html
<template>
    <div>
        <ele-flex-box class="demo-padding" style="padding: 16px;">
            <el-button>左侧</el-button>
            <el-button>右侧</el-button>
        </ele-flex-box>
    </div>
</template>
```
:::

### 你可以传入任何flex容器属性

:::demo <a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank">flex布局教程</a>
```html
<template>
    <div>
        <ele-flex-box class="demo-padding" style="height: 60px;" align-items="flex-start" justify-content="center">
            <el-button>左侧</el-button>
            <el-button>右侧</el-button>
        </ele-flex-box>
    </div>
</template>
```
:::
