## BaseTable 基础表格
在 <a href="https://element.eleme.io/#/zh-CN/component/table" target="_blank">el-table</a> 的基础上封装了一层。 `el-table` 上的特性全部可用。

### 添加选择列和序号列

:::demo `selection` 属性开启选择列，`index` 属性开启序号列。
```html
<template>
    <ele-base-table 
        row-key="id"
        :data="list"
        selection
        :selectionProps="selectionProps"
        index
    >
        <ele-table-column prop="date" label="日期" width="180"></ele-table-column>
        <ele-table-column prop="name" label="姓名" width="180"></ele-table-column>
        <ele-table-column prop="address" label="地址"></ele-table-column>
    </ele-base-table>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: 1,
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        id: 2,
                        date: '2016-05-04',
                        name: '张三',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        id: 3,
                        date: '2016-05-01',
                        name: '李四',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        id: 4,
                        date: '2016-05-03',
                        name: '王五',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
                selectionProps: {
                    selectable (row, index) {
                      return row.name !== '张三'
                    },
                    reserveSelection: true // 为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
                }
            };
        }
    };
</script>
```
:::

### 添加单选

:::demo 添加单选的前提是开启 `selection`，同时提供 `radio` 属性，为true则为单选，为false则为多选
```html
<template>
    <el-button @click="handleRadio">单选</el-button>
    <el-button @click="handleMultiple">多选</el-button>
    <ele-base-table
        :data="list"
        selection
        :radio="radio"
        @radio-change="handleRadioChange"
    >
        <ele-table-column prop="date" label="日期" width="180"></ele-table-column>
        <ele-table-column prop="name" label="姓名" width="180"></ele-table-column>
        <ele-table-column prop="address" label="地址"></ele-table-column>
    </ele-base-table>
</template>
<script>
    export default {
      data () {
        return {
            radio: true,
          list: [
              {
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
              }
          ]
        }
      },
        methods: {
            handleRadioChange (row) {
              console.log(row, 'row')
            },
            handleRadio () {
              this.radio = true
            },
            handleMultiple () {
              this.radio = false
            }
        }
    }
</script>
```
:::

### Attributes
| 参数   | 说明                                                                                                        | 类型      | 可选值       | 默认值   |
|------|-----------------------------------------------------------------------------------------------------------|---------|-------------  |-------|
| data | 数据列表                                                                                                      | array   | — | -     |
| loading | 数据加载状态                                                                                                    | boolean | — | false |
| border | 是否要边框                                                                                                     | boolean | — | false |
| cellStyle | 单元格样式                                                                                                     | object  | — | -     |
| compact | 紧凑型表格                                                                                                     | boolean | — | false |
| selection | 渲染选择列，默认是多选                                                                                               | boolean | — | false |
| selectionProps | 开启selection时，传给type=selection 列的属性集合                                                                      | object  | — | -     |
| radio | 在开启selection的基础上，开启该属性选择列变为单选                                                                             | boolean | — | false |
| index | 渲染序号列（如果传入baseList实例，序号会根据baseList.pageNum和baseList.pageSize计算）                                           | boolean | — | false |
| baseList | <a href="https://zhengzheng123.github.io/blog/utils/class/base-list.html" target="_blank">BaseList</a> 实例 | object  | — | -     |

### Events
| 事件名称 | 说明       | 回调参数          |
|--------- |----------|---------------|
| radio-change | 单选被选中时触发 | Function(row) |
