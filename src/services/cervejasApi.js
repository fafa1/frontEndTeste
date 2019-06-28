import { axios } from './config'

export default {

  listar: _ => {
    return axios.get('beers', {
      params: {
        page: 1,
        per_page: 10
      }
    })
  }
}