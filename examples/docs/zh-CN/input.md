## Input 基础input

### 传入查询方法，当值改变时触发

传入 searchMethod ，当 search 变化触发 searchMethod

:::demo

```html

<template>
    <div>
        <ele-input v-model="search" :width="240" search :searchMethod="searchMethod"></ele-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                search: ''
            }
        },
        methods: {
            searchMethod (val) {
              console.log(val, '=====val====')
            }
        }
    }
</script>
```

:::

### 添加防抖

debounce 属性开启防抖，默认延迟 500 毫秒

:::demo

```html

<template>
    <div>
        <ele-input
                v-model="search"
                :width="240"
                search
                debounce
                clearable
        ></ele-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                search: ''
            }
        },
        methods: {
            searchMethod () {
              console.log(this.search, '=====search====')
            }
        },
        watch: {
            search (val) {
              this.searchMethod()
            }
        }
    }
</script>
```

:::

### 手动触发查询

只有点击查询图标、清空图标、光标失去焦点才触发查询。

:::demo

```html

<template>
    <div>
        <ele-input
                v-model="search"
                :width="240"
                manual
                search
                clearable
                @change="searchMethod"
        ></ele-input>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                search: '123'
            }
        },
        methods: {
            searchMethod (val) {
              console.log(val, '=====search====')
            }
        },
        watch: {
        }
    }
</script>
```

:::

### Attributes
| 参数      | 说明 | 类型      | 可选值                                     | 默认值   |
|---------- |--|---------- |-----------------------------------------|-------- |
| className     | 自定义类名 | string  | - |    -     |
| width     | 宽度 | number  | - |    -     |
| searchMethod     | 输入回调函数 | function  | - |    -     |
| delay     | 开启 debounce 时，延迟时间 | number  | - |    500ms     |
| debounce     | 开启 debounce | boolean  | - |    -     |
| manual     | 开启手动触发查询 | boolean  | - |    -     |
| search     | 是否展示搜索图标 | boolean  | - |    -     |

### Events

| 事件名 | 说明               | 回调参数 |
|--| ------------------ | -------- |
| change | 内容变化事件 | val  |
