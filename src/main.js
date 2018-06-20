// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/index.css'
import 'babel-polyfill'
import FastClick from 'fastclick'
import VueClickoutside from 'vue-clickoutside'
import '@/assets/js/flexible.js'

Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(VueClickoutside)
Vue.directive('v-clickoutside', VueClickoutside)
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
