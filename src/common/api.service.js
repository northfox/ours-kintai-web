import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const API_URL = 'localhost'

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

  put(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params).catch((error) => {
      console.error(error)
    })
  }
}

export default ApiService
