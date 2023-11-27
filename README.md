# ELE-UI

基于 element-ui 封装的组件。

## 安装

```js
npm i @liz-q/ele-ui -S
```

## 使用

[在线文档](https://zhengzheng123.github.io/ele-ui-docs/#/zh-CN/component/installation)

前提是要安装 vue 和 element-ui.

```js
"peerDependencies": {
    "element-ui": "^2.15.12",
    "vue": "^2.5.17"
}
```

> 如果你使用 element-ui 按需引入，并且 ele-ui 组件中依赖的 element-ui 组件你没有引入，这时会报错！你只要引入提示未引入的组件即可。`element-ui`引入方法请看[这里](https://element.eleme.io/#/zh-CN/component/quickstart)



完整引入`@liz-q/ele-ui`

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import EleUI from '@liz-q/ele-ui';
import '@liz-q/ele-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(EleUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
