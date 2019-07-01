import { axios } from './config'

export default {

  listar: (pagina) => {
    return axios.get('beers', {
      params: {
        page: pagina,
        per_page: 16
      }
    })
  },

  filtarNome: (beerName) => {
    return axios.get('beers', {
      params: {
        beer_name: beerName
      }
    })
  },

  home: () => {
    return axios.get('http://localhost:3000/home')
  },

  cadastro: (name, email, password) => {
    return axios.post('http://localhost:3000/users', {
      name,
      email,
      password
    })
  },

  login: (email, password) => {
    axios.post('http://localhost:3000/login', {
      email,
      password
    }).then(res => {
      console.log(res)
    }).catch (err => {
        alert('Credencias inválidas')
        console.log(err)
    })
  }
}