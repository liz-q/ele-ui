## Pagination 基础分页

### 自定义分页

改变分页条数或者页数都会触发 change 事件。更多功能参考 ElementUI 官网。

:::demo

```html

<template>
    <div>
        <ele-pagination v-bind="pagination" @change="handlePaginationChange"></ele-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pagination: {
                    total: 50,
                    pageSize: 15,
                    pageNum: 2
                }
            }
        },
        methods: {
            handlePaginationChange (val) {
              console.log(val);
              this.pagination = val
            }
        }
    }
</script>
```

:::

### Attributes
| 参数      | 说明 | 类型      | 可选值                                     | 默认值   |
|---------- |--|---------- |-----------------------------------------|-------- |
| total     | - | number  | - |    0     |
| pageSize     | - | number  | - |    15     |
| pageNum     | - | number  | - |    1     |
| pageSizes     | - | number[]  | - |    [15, 30, 45, 60, 100]     |
| marginBottom     | 下边距 | number  | - | 16px |
| layout     | - | String  | - | sizes, total, prev, pager, next |
