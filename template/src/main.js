import Vue from 'vue'
{{#if_eq cliType 'plugin'}}import VuePlugin from './lib/'
{{/if_eq}}import App from './App.vue'
{{#if_eq cliType 'plugin'}}Vue.use(VuePlugin)// 或者传入参数对象 Vue.use(VuePlugin,{})
{{/if_eq}}
let vm = new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(vm)
