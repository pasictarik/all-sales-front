import axios from 'axios'
import { API } from '@/main'

export default {
  async login (request) {
    return axios.post(API + '/users/login', request)
  },
  async testToken (authToken) {
    return axios({
      method: 'GET',
      url: API + '/testToken',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchUser (authToken, id) {
    return axios({
      method: 'GET',
      url: API + '/users/find/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchOffers () {
    return axios({
      method: 'GET',
      url: API + '/offers/index',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
