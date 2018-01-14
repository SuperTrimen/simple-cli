<template>
  <div id="app">
    {{#if_eq cliType 'component'}}
    <VueComponent/>
    {{/if_eq}}
    {{#if_eq cliType 'plugin'}}
    请开启你的插件开发之旅！
    {{/if_eq}}
  </div>
</template>

<script>
{{#if_eq cliType 'component'}}import VueComponent from './lib/'{{/if_eq}}
export default {
  name: 'app'{{#if_eq cliType 'component'}},
  components: {
    VueComponent
  }
  {{/if_eq}}
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
