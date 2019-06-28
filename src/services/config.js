import axioss from 'axios'

export const axios = axioss.create({
  baseURL: 'https://api.punkapi.com/v2/',
  // headers: {
  //   Authorizations: 'Bearer {token}'
  // }
})