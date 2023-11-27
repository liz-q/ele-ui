## Title 标题

一个标题容器

### 不同尺寸的标题

:::demo type 为字符串类型时 
```html
<template>
    <div>
        <ele-title size="large">大标题 18px</ele-title>
        <br>
        <ele-title size="medium">中标题 16px</ele-title>
        <br>
        <ele-title size="small">小标题 14px（默认）</ele-title>
        <br>
        <ele-title size="mini">超小标题 12px</ele-title>
    </div>
</template>
```
:::

### 自定义标题样式

:::demo size 可以是样式对象。
```html
<template>
    <div>
        <ele-title :size="{fontSize: '20px', color: '#409EFF'}">自定义标题</ele-title>
    </div>
</template>
```
:::

### Attributes
| 参数   | 说明   | 类型            | 可选值       | 默认值   |
|------|------|---------------|-------------  |-------|
| size | 标题尺寸 | string或object | — | small |
