import CommonService from './index.js'
const baseURL = 'http://api.tvmaze.com'
export default {
  getShowDetails () {
    const response = CommonService.getData(`${baseURL}/shows`).then((res) => {
      return res
    })
    return response
  },
  getShowSeasons (showId) {
    const response = CommonService.getData(`${baseURL}/shows/${showId}/seasons`).then((res) => {
      return res
    })
    return response
  },
  getEpisodesDataBySeasonId (seasonId) {
    const response = CommonService.getData(`${baseURL}/seasons/${seasonId}/episodes`).then((res) => {
      return res
    })
    return response
  },
  getSearchResultsByQuery (query) {
    const response = CommonService.getData(`${baseURL}/search/shows?q=${query}`).then((res) => {
      return res
    })
    return response
  },
  getShowDetailsById (showId) {
    const response = CommonService.getData(`${baseURL}/shows/${showId}`).then((res) => {
      return res
    })
    return response
  }
}
