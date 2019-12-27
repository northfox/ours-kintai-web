import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const API_URL = 'http://localhost:3000/api/v1'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },
  setHeader() {
    Vue.axios.defaults.headers.common['Authorization'] = `Token hogehoge`
  },
  query(resource, params) {
    return Vue.axios.get(resource, params).catch((error) => {
      console.error(error)
    })
  },
  post(resource, params) {
    return Vue.axios.post(resource, params).catch((error) => {
      console.error(error)
    })
  },
  put(resource, params) {
    return Vue.axios.put(resource, params).catch((error) => {
      console.error(error)
    })
  }
}

export default ApiService
