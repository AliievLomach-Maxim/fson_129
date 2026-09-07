import axios from 'axios'
import type { Article } from './types'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

interface SearchArticlesResponse {
  hits: Article[]
}

export const searchArticles = async (query: string) => {
  const response = await axios.get<SearchArticlesResponse>(`/search?query=${query}`)
  return response.data.hits
}

// const searchArticles2 = async (query: string) => {
//   const response = await axios.get(`/qweqwe`)
//   return response.data.hits
// }
