> {{ description }}

## 安装

```sh
npm install {{#if_eq scope 'project'}}@{{ port }}/{{/if_eq}}{{#if_eq scope 'common'}}@strongsoft/{{/if_eq}}{{ name }} --save
```

## 使用

```js
{{#if_eq cliType 'component'}}
<template>
  <div>
    <vue-component />
  </div>
</template>

<script>
import VueComponent from '{{#if_eq scope 'project'}}@{{ port }}/{{/if_eq}}{{#if_eq scope 'common'}}@strongsoft/{{/if_eq}}{{ name }}'

export default {
  components: {
    VueComponent
  }
}
</script>
{{/if_eq}}
{{#if_eq cliType 'plugin'}}
import Vue from 'vue'
import VuePlugin from '{{#if_eq scope 'project'}}@{{ port }}/{{/if_eq}}{{#if_eq scope 'common'}}@strongsoft/{{/if_eq}}{{ name }}'

Vue.use(VuePlugin)
// 或者，你也可以传入可选参数
Vue.use(VuePlugin,{})
{{/if_eq}}
```

## 属性

参数 | 类型 | 可选值 | 说明
--- | --- | --- | ---

## 更新日志

- 1.0.0
新增 初始版本发布

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```