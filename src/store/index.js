import Vue from 'vue'
import Vuex from 'vuex'
import ShowService from '../services/shows.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showData: {},
    searchResults: [],
    showDetails: [],
    showName: ''
  },
  mutations: {
    SET_SEARCHRESULTS (state, data) {
      state.searchResults = data
    },
    SET_SHOWDETAILS (state, data) {
      state.showDetails = data
    },
    SET_SHOWDATA (state, data) {
      state.showData = data
    },
    SET_SHOWNAME (state, data) {
      state.showName = data
    }
  },
  actions: {
    async getSearchResults ({ commit, state }, payload) {
      const searchData = await ShowService.getSearchResultsByQuery(payload.query)
      commit('SET_SEARCHRESULTS', searchData.data)
    },
    setShowDetails ({ commit, state }, showsByGenre) {
      commit('SET_SHOWDETAILS', showsByGenre)
    },
    setShowData ({ commit, state }, show) {
      commit('SET_SHOWDATA', show)
    },
    setShowName ({ commit, state }, showName) {
      commit('SET_SHOWNAME', showName)
    }
  },
  modules: {
  }
})
