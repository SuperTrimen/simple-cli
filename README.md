# Simple-Cli

> 基于webpack-simple模板改造，一个适合开发组件和插件的精简脚手架。

### 功能

1. 提供组件和插件的开发模板
2. 内置Eslint代码规范检测
3. 已设置好发布成npm包的配置
4. 支持热刷新
5. 代码错误检测

### 使用

如果还没安装过vue-cli，请执行：

``` bash
npm install -g vue-cli
```

初始化开发脚手架：
``` bash
vue init StrongSoftGitHub/simple-cli vue-component[或插件名称]
```

### 开发步骤

1. `vue init StrongSoftGitHub/simple-cli vue-component`，初始化开发脚手架， my-component即组件名称或者插件名称（*适用范围选项，选择通用会以@strongsoft作为前缀，选择项目，则会以@端口号作为前缀*）
2. 开发好完成后，统一在src/lib/index.js文件中导出
3. 在src/App.vue中编写示例
4. 编写README.md（重要）
3. `npm publish`，发布到npm包源


### 组件安装使用

1. 安装
   - 通用组件：`npm install @strongsoft/my-component --save`
   - 项目组件：`npm install @端口号/my-component --save`
2. 使用
   - 通用组件：`import MyComponent from '@strongsoft/my-component'`
   - 项目组件：`import MyComponent from '@端口号/my-component'`

### 插件安装使用

1. 安装
   - 通用插件：`npm install @strongsoft/my-plugin --save`
   - 项目插件：`npm install @端口号/my-plugin --save`
2. 使用
   - 通用插件：
     ```
     import Vue from 'vue'
     import MyPlugin from '@strongsoft/my-plugin'
     Vue.use(MyPlugin)
     //或者传入参数对象
     Vue.use(MyPlugin,{})
     ```
   - 项目插件：
     ```
     import Vue from 'vue'
     import MyPlugin from '@端口号/my-plugin'`
     Vue.use(MyPlugin)
     //或者传入参数对象
     Vue.use(MyPlugin,{})
     ```

### 常用命令

- 安装依赖：npm install
- 启动本地服务器：npm run dev
- 代码规范检测：npm run lint
- 自动修复代码规范问题：npm run fix
- 发布成npm包：npm publish