import CommonService from './index.js'

export default {
  getShowDetails () {
    const response = CommonService.getData('http://api.tvmaze.com/shows').then((res) => {
      return res
    })
    return response
  },
  getShowSeasons (showId) {
    const response = CommonService.getData('http://api.tvmaze.com/shows/' + showId + '/seasons').then((res) => {
      return res
    })
    return response
  },
  getEpisodesDataBySeasonId (id) {
    const response = CommonService.getData('http://api.tvmaze.com/seasons/' + id + '/episodes').then((res) => {
      return res
    })
    return response
  },
  getSearchResultsByQuery (query) {
    const response = CommonService.getData('http://api.tvmaze.com/search/shows?q=' + query).then((res) => {
      return res
    })
    return response
  },
  getShowCastDetails (showId) {
    const response = CommonService.getData('http://api.tvmaze.com/shows/' + showId + '/cast').then((res) => {
      return res
    })
    return response
  }
}
