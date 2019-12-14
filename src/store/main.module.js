import ApiService from '@/common/api.service'
import { SAVE_IN_WAKE_UP } from './actions.type'
import { SET_IN_WAKE_UP } from './mutations.type'

const state = {
  times: {
    category: '',
    user: {}
  }
}

const actions = {
  async [SAVE_IN_WAKE_UP]({ commit }, payload) {
    ApiService.put(payload.resource, payload.slug, payload.time)
      .then(({ data }) => {
        commit(SET_IN_WAKE_UP, data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

const mutations = {
  [SET_IN_WAKE_UP](state, { data }) {
    state.times = data.times
  }
}

const getters = {
  times(state) {
    return state.times
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
