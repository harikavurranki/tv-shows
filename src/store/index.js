import Vue from 'vue'
import Vuex from 'vuex'
import ShowService from '../services/shows.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showData: '',
    searchResults: []
  },
  mutations: {
    SET_SEARCHRESULTS (state, data) {
      state.searchResults = data
    }
  },
  actions: {
    async getSearchResults ({ commit, state }, payload) {
      const searchData = await ShowService.getSearchResultsByQuery(payload.query)
      commit('SET_SEARCHRESULTS', searchData.data)
    }
  },
  modules: {
  }
})
