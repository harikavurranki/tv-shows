import Vue from 'vue'
import Vuex from 'vuex'
import ShowService from '../services/shows.js'

Vue.use(Vuex)
export const state = {
  showData: {},
  searchResults: [],
  showDetails: [],
  showName: '',
  seasonEpisodeDetails: [],
  showSeasonDetails: []
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
    showdata.data.sort((a, b) => b.rating.average - a.rating.average)
    var showsByGenre = {
      PopularShows: {
        label: 'Popular Shows',
        value: showdata.data.slice(0, 50)
      }
    }
    showdata.data.map(show => {
      show.genres.map(genre => {
        if (showsByGenre[genre]) {
          showsByGenre[genre].value.push(show)
        } else {
          showsByGenre[genre] = { label: genre, value: [show] }
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
  setShowName ({ commit, state }, showName) {
    commit('SET_SHOWNAME', showName)
  },
  async getShowData ({ commit, state }, showId) {
    const showData = await ShowService.getShowDetailsById(showId)
    commit('SET_SHOWDATA', showData.data)
  }
}
const store = new Vuex.Store({
  mutations,
  actions,
  state
})
export default store
