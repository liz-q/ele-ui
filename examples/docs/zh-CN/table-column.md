## TableColumn 基础列

### 基础用法

:::demo
```html
<template>
    <ele-base-table :data="list">
        <ele-table-column
                prop="date"
                label="日期"
                width="240">
        </ele-table-column>
        <ele-table-column
                prop="name"
                label="姓名"
                width="180"
        >
            <template slot-scope="scope">
                {{scope.row.name}}123
            </template>
        </ele-table-column>
        <ele-table-column
                prop="address"
                label="地址"
        >
            <template slot="header" slot-scope="scope">地址 {{scope.column.property}}</template>
        </ele-table-column>
    </ele-base-table>
</template>
<script>
    export default {
      data () {
        return {
          list: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
          }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
</script>
```
:::

### 使用默认过滤器和自定义过滤器

defaultFormatter 属性开启使用默认过滤器，值为空显示 / 。当 defaultFormatter 和 formatter 属性同时存在，以 formatter 为准。

:::demo
```html
<template>
    <ele-base-table :data="list">
        <ele-table-column
                prop="date"
                label="日期"
                width="240">
        </ele-table-column>
        <ele-table-column
                defaultFormatter
                prop="name"
                label="姓名"
                width="180"
        >
        </ele-table-column>
        <ele-table-column
                defaultFormatter
                prop="address"
                label="地址"
                :formatter="formatter"
        >
        </ele-table-column>
    </ele-base-table>
</template>
<script>
    export default {
        data () {
            return {
                list: [{
                    date: '2016-05-02',
                    name: '',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            formatter(row, {property}, cellValue, index) {
                let val = row[property];

                if (property === 'address') {
                    val += '----123';
                }

                return val;
            }
        }
    }
</script>
```
:::

### 表头合并

:::demo
```html
<template>
    <ele-base-table :data="list">
        <ele-table-column
                prop="date"
                label="日期"
                width="240">
        </ele-table-column>
        <ele-table-column label="材料量" align="center">
            <ele-table-column
                    defaultFormatter
                    prop="name"
                    label="姓名"
                    width="180"
            >
            </ele-table-column>
            <ele-table-column
                    prop="address"
                    label="地址"
            >
            </ele-table-column>
        </ele-table-column>
    </ele-base-table>
</template>
<script>
    export default {
        data () {
            return {
                list: [{
                    date: '2016-05-02',
                    name: '',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
        }
    }
</script>
```
:::
