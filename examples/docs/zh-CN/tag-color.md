## TagColor 颜色标签

### 标签类型

:::demo
```html
<template>
    <div>
        <ele-tag-color>默认标签</ele-tag-color>{{' '}}
        <ele-tag-color type="info">标签二</ele-tag-color>{{' '}}
        <ele-tag-color type="warn">标签三</ele-tag-color>{{' '}}
        <ele-tag-color type="error" bold>加粗标签</ele-tag-color>{{' '}}
        <ele-tag-color type="success" size="mini">mini标签</ele-tag-color>{{' '}}
    </div>
</template>
```
:::

### 标签尺寸

:::demo
```html
<template>
    <div>
        <ele-tag-color type="info">普通大小</ele-tag-color>{{' '}}
        <ele-tag-color type="info" size="mini">小标签</ele-tag-color>{{' '}}
    </div>
</template>
```
:::

### 调整位置
:::demo `offset`属性调整标签相对原来位置的偏移。`offset="bottom=4`表达的意思是相对原来位置向下偏移4px。
```html
<template>
    <el-table :data="tableData">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名（向下偏移4px）"
                width="180"
        >
            <template slot-scope="{row}">
                <ele-tag-color type="info" offset="bottom=4">{{row.name}}</ele-tag-color>
            </template>
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名（未偏移）"
                width="180"
        >
            <template slot-scope="{row}">
                <ele-tag-color type="error">{{row.name}}</ele-tag-color>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
      data () {
        return {
            tableData: [{
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

### 自定义颜色

:::demo 使用 colors 属性自定义 `color, background-color, border-color`，从左到右分别是字体颜色，背景颜色，边框颜色。
```html
<template>
    <div>
        <ele-tag-color :colors="['#FF85C0', '#FFF0F6', '#FFADD2']">标签一</ele-tag-color>
    </div>
</template>
```
:::

### Attributes
| 参数      | 说明 | 类型      | 可选值                                     | 默认值   |
|---------- |--|---------- |-----------------------------------------|-------- |
| type     | 类型 | string  | default / warn / error / info / success |    default     |
| size     | 尺寸 | string  | small / mini |    small     |
| bold     | 加粗 | boolean  | - |    false     |
| cont     | 内容，如果同时提供 slot，优先显示 slot | -  | - |    -     |
| offset     | 偏移（方向=偏移数） | string  | top=10 bottom=-10 right=10 left=-10  |    -     |
| colors     | 提供自定义字体颜色，背景颜色，边框颜色 | array  | - |    -     |
