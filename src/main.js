import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// axios.defaults.baseURL='http://localhost:44329'

new Vue({
  el: '#app',
  render: h => h(App)
})
