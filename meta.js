const fs = require('fs')
const path = require('path')
const { exec, spawn } = require('child_process')

module.exports = {
    "prompts": {
        "cliType": {
            "type": "list",
            "message": "您要开发？",
            "default": 0,
            "choices": [{
                "name": "Vue组件",
                "value": "component",
                "short": "Vue组件"
            }, {
                "name": "Vue插件",
                "value": "plugin",
                "short": "Vue插件"
            }]
        },
        "scope": {
            "type": "list",
            "message": "请选择适用范围？",
            "default": 0,
            "choices": [{
                "name": "通用（以@strongsoft作为前缀）",
                "value": "common",
                "short": "通用"
            }, {
                "name": "项目（以@端口号作为前缀）",
                "value": "project",
                "short": "项目"
            }]
        },
        "port": {
            "when": "scope === 'project'",
            "type": "string",
            "required": true,
            "label": "项目部署到服务器的端口号？",
            "validate": port => {
                return port && port % 1 === 0
            }
        },
        "name": {
            "type": "string",
            "required": true,
            "label": "名称？"
        },
        "description": {
            "type": "string",
            "required": true,
            "label": "简要概述？"
        },
        "author": {
            "type": "string",
            "required": true,
            "label": "作者？"
        },
        "sass": {
            "when":"cliType === 'component'",
            "type": "confirm",
            "message": "是否使用sass？",
            "default": false
        }
    },
    "complete": (data, helpers) => {
        const runCommand = (cmd, args, options) => {
            return new Promise((resolve, reject) => {
                const spwan = spawn(
                    cmd,
                    args,
                    Object.assign({
                            cwd: process.cwd(),
                            stdio: 'inherit',
                            shell: true,
                        },
                        options
                    )
                )
                spwan.on('exit', () => {
                    resolve()
                })
            })
        }
        const msg = `   常用命令：\n\n   安装依赖：npm install\n      代码规范检测：npm run lint\n   自动修复代码规范问题：npm run fix\n   启动本地服务器：npm run dev\n   发布成npm包：npm publish`
        const file = path.join(
            data.inPlace ? '' : data.destDirName,
            'src', 'lib', data.name + `${data.cliType==='component'?'.vue':'.js'}`
        )
        const componentContent = `<template>
  <div class='${data.name}'>
    请开启你的组件开发之旅！
  </div>
</template>

<script>
export default {
  name: '${data.name}',
  props: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  .${data.name}{

  }
</style>
`
        const pluginContent = `const VuePlugin = {
  install: (Vue, options) => {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      // ...
    })

    // 3. 注入组件
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      // ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
}
export default VuePlugin
`
        fs.writeFile(file, data.cliType === 'component' ? componentContent : pluginContent, err => {
            if (err) throw err
        })
        console.log('开始安装依赖......')
        runCommand('npm', ['install'], { cwd: `${data.name}` })
            .then(() => {
                console.log('\n   依赖安装完成！')
                console.log('   开始启动！')
                runCommand('npm', ['run', 'dev'], { cwd: `${data.name}` })
                console.log(msg)
            })
    }
}