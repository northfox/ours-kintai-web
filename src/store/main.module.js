import ApiService from '@/common/api.service'
import { FIND_IN_TIME_WAKE_UP, SAVE_IN_TIME_WAKE_UP } from './actions.type'
import { SET_IN_TIME_WAKE_UP } from './mutations.type'

const state = {
  user: {},
  times: [],
  time: {
    category: '',
    user: {},
    inTime: '',
    outTime: ''
  }
}

const actions = {
  async [SAVE_IN_TIME_WAKE_UP]({ commit }, payload) {
    ApiService.post(payload.resource, payload.data)
      .then(({ data }) => {
        commit(SET_IN_TIME_WAKE_UP, data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  },
  async [FIND_IN_TIME_WAKE_UP](context, payload) {
    const { data } = await ApiService.get(payload.resource)
    context.commit(SET_IN_TIME_WAKE_UP, data)
    return data.time
  }
}

const mutations = {
  [SET_IN_TIME_WAKE_UP](state, { data }) {
    state.time = data.time
  }
}

const getters = {
  times(state) {
    return state.times
  },
  time(state) {
    return state.time
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
