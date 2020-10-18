import axios from 'axios'

export default {
  getData (url) {
    const response = axios.get(url).then((res) => {
      return res
    }).catch((error) => {
      return error
    })
    return response
  }
}
