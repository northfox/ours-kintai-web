import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import dayjs from 'dayjs'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ApiService from './common/api.service'
import constants from './common/constants'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$constants = constants

ApiService.init()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
