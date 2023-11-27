## ScrollDiv 滚动容器

### 基本用法

一个 div 容器，它的总高度是上边框到屏幕底部的距离，reduce属性可以控制下边框到屏幕底部的距离。

:::demo
```html
<template>
    <ele-scroll-div :reduce="16">
        <template slot-scope="{height}">
            <div :style="{height: `${height}px`, overflow: 'auto', background: '#409EFF'}">
                高度 {{height}} <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
            </div>
        </template>
        <template slot="footer">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
            </el-pagination>
        </template>
    </ele-scroll-div>
</template>
```
:::

### Attributes
| 参数      | 说明 | 类型      | 可选值                                     | 默认值   |
|---------- |--|---------- |-----------------------------------------|-------- |
| reduce     | 减差 | number  | - |    0     |

### Slot
| name      | 说明 |
|---------- |--|
| footer     | 底部组件，例如分页 |
