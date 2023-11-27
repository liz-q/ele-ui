## Tooltip 图标提示


### 基本用法

默认显示的图标是 el-icon-question，通过 className 属性可以自定义图标。
v-on 绑定 click 事件，点击图标触发。

:::demo 
```html
<template>
    <div>
        <ele-tooltip>默认图标</ele-tooltip>
        <ele-tooltip content="自定义图标" class-name="el-icon-warning"></ele-tooltip>
        <ele-tooltip content="监听点击事件" @click="handleClick"></ele-tooltip>
    </div>
</template>
<script>
    export default {
      methods: {
          handleClick (e) {
            console.log('-------点击图标了----')
          }
      }
    }
</script>
```
:::

### 修改图标的颜色

开启 highLight 可以高亮图标，默认色号是 #409EFF（蓝色）
如果想改变颜色可以使用 highLightColor 属性自定义，前提是开启 highLight

:::demo
```html
<template>
    <div>
        <ele-tooltip highLight>默认高亮</ele-tooltip>
        <ele-tooltip highLight highLightColor="red">自定义图标颜色</ele-tooltip>
    </div>
</template>
<script>
    export default {
      methods: {
      }
    }
</script>
```
:::

### 修改触发内容

上面都是图标提示，如果不使用图标，可以通过 slot 为 action 改变。


:::demo
```html
<template>
    <div>
        <ele-tooltip content="Tooltip 内容">
            <template slot="action">
                <el-button @click="handleClick">按钮</el-button>
            </template>
        </ele-tooltip>
    </div>
</template>
<script>
    export default {
      methods: {
          handleClick () {
            console.log('--- 点击了 ---')
          }
      }
    }
</script>
```
:::
