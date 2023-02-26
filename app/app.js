import Vue from 'nativescript-vue'

import Home from './app.vue'


new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
