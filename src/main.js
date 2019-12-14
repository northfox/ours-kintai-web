import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import dayjs from 'dayjs'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ApiService from './common/api.service'

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs

ApiService.init()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
