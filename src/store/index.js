import Vue from 'vue'
import Vuex from 'vuex'
import ShowService from '../services/shows.js'
Vue.use(Vuex)
export const state = {
  showData: {},
  searchResults: [],
  showDetails: [],
  showName: '',
  seasonEpisodeDetails: []
}
export const mutations = {
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
  },
  SET_EPISODEDETAILS (state, data) {
    state.seasonEpisodeDetails = data
  },
  SET_SEASONDETAILS (state, data) {
    state.showSeasonDetails = data
  }
}
export const actions = {
  async getSearchResults ({ commit, state }, payload) {
    const searchData = await ShowService.getSearchResultsByQuery(payload.query)
    commit('SET_SEARCHRESULTS', searchData.data)
  },
  async getShowsList ({ commit, state }) {
    const showdata = await ShowService.getShowDetails()
    var showsByGenre = {}
    showdata.data.map(el => {
      el.genres.map(data => {
        if (showsByGenre[data]) {
          showsByGenre[data] = { label: data, value: [...showsByGenre[data].value, el] }
        } else {
          showsByGenre[data] = { label: data, value: [el] }
        }
      })
    })
    commit('SET_SHOWDETAILS', showsByGenre)
  },
  async getEpisodesData ({ commit, state }, seasonId) {
    const episodeData = await ShowService.getEpisodesDataBySeasonId(seasonId)
    commit('SET_EPISODEDETAILS', episodeData.data)
  },
  async getSeasonDetails ({ commit, state }, showId) {
    const seasonData = await ShowService.getShowSeasons(showId)
    commit('SET_SEASONDETAILS', seasonData.data)
  },
  setShowData ({ commit, state }, show) {
    commit('SET_SHOWDATA', show)
  },
  setShowName ({ commit, state }, showName) {
    commit('SET_SHOWNAME', showName)
  }
}
export const modules = {}
const store = new Vuex.Store({
  modules,
  mutations,
  actions,
  state
})
export default store
