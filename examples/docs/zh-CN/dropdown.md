## Dropdown 通用下拉

### 基础用法


:::demo

```html

<template>
    <div>
        <ele-dropdown :options="options" @command="handleCommand"></ele-dropdown>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { label: '黄金糕', command: 'a' },
                    { label: '狮子头', command: 'b' },
                    { label: '螺蛳粉', command: 'c' },
                    { label: '双皮奶', command: 'd', disabled: true },
                    { label: '蚵仔煎', command: 'e', divided: true }
                ]
            }
        },
        methods: {
            handleCommand(command) {
                console.log('click on item ' + command);
            }
        }
    }
</script>
```

:::

### 按钮形式


:::demo

```html

<template>
    <div>
        <ele-dropdown
                :options="options"
                triggerEle="text"
                split-button
                type="primary"
                @command="handleCommand"
                text="下拉更多"
        ></ele-dropdown>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    { label: '黄金糕', command: 'a' },
                    { label: '狮子头', command: 'b' },
                    { label: '螺蛳粉', command: 'c' },
                    { label: '双皮奶', command: 'd', disabled: true },
                    { label: '蚵仔煎', command: 'e', divided: true }
                ]
            }
        },
        methods: {
            handleCommand(command) {
                console.log('click on item ' + command);
            }
        }
    }
</script>
```

:::
