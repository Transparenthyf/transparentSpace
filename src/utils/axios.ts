import axios from 'axios'

let api = ''

if (process.env !== undefined && process.env.NODE_ENV === 'development') {
  api = '/api'
}

axios.defaults.baseURL = api

export default axios
