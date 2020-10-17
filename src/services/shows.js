import CommonService from './index.js'

export default {
  getShowDetails () {
    const response = CommonService.getData('http://api.tvmaze.com/shows').then((res) => {
      return res
    })
    return response
  }
}
