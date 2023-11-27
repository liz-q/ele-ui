## Dialog 通用弹框

### 基本用法

:::demo

```html

<template>
    <div>
        <el-button @click="handleClick">点击</el-button>
        <ele-dialog
                ref="eleDialog"
                :title="title"
                @ok="ok"
                @cancel="cancel"
        >
            <div>
                <dialog-content></dialog-content>
            </div>
        </ele-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '标题'
            }
        },
        methods: {
            handleClick() {
                this.$refs.eleDialog.show()
            },
            ok() {
                console.log('=====点击确定了====')
                this.$refs.eleDialog.show()
            },
            cancel() {
                console.log('=====点击取消了====')
            }
        },
        watch: {
            search(val) {
                this.searchMethod()
            }
        }
    }
</script>
```

:::

### 显示时刷新内容

visibleRefresh 属性控制当 dialog 隐藏时销毁内容区域，当显示时加载全新的内容区域，避免缓存。

:::demo

```html

<template>
    <div>
        <el-button @click="handleClick">点击</el-button>
        <ele-dialog
                ref="eleDialog"
                visibleRefresh
                :title="title"
                @ok="ok"
                @cancel="cancel"
        >
            <div>
                <dialog-content></dialog-content>
            </div>
        </ele-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '标题'
            }
        },
        methods: {
            handleClick() {
                this.$refs.eleDialog.show()
            },
            ok() {
                console.log('=====点击确定了====')
                this.$refs.eleDialog.show()
            },
            cancel() {
                console.log('=====点击取消了====')
            }
        },
        watch: {
            search(val) {
                this.searchMethod()
            }
        }
    }
</script>
```

:::

### Attributes
el-dialog 中的属性在这里都能用

| 参数            | 说明             | 类型      | 可选值  | 默认值   |
|----------------|----------------|---------|------|-------|
| visibleRefresh | 控制显示与隐藏式是否刷新内容 | boolean | - | false |
| okLoading | 控制确定按钮loading  | boolean | - | false |
| hasFooter | 是否包含footer     | boolean | - | true  |
| okText | 确定按钮文本         | string  | - | 确定    |
| cancelText | 取消按钮文本         | string  | - | 取消    |

### 方法

| 方法名 | 说明 | 参数 |
|---------- |--|---------- |
| show | 显示 dialog | - |
| hide | 隐藏 dialog | - |

### Events

| 方法名 | 说明 | 回调参数 |
|---------- |--|---------- |
| ok | 点击确定回调 | - |
| cancel | 点击取消回调 | - | 
