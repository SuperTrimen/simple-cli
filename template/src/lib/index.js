import {{#if_eq cliType 'component'}}VueComponent{{/if_eq}}{{#if_eq cliType 'plugin'}}VuePlugin{{/if_eq}} from './{{ name }}'
export default {{#if_eq cliType 'component'}}VueComponent{{/if_eq}}{{#if_eq cliType 'plugin'}}VuePlugin{{/if_eq}}
