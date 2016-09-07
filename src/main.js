import Vue from 'vue'
import App from './App'
import store from './store'
window.store = store;
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#main',
  components: { App }
})
