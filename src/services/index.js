import axios from 'axios'

export default {
  getData (url) {
    const response = axios.get(url).then((res) => {
      return res
    })
    return response
  }
}
