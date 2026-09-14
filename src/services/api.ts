import axios from 'axios'
import type { Article } from './types'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

interface SearchArticlesResponse {
  hits: Article[]
  nbPages: number
  page: number
}

export const searchArticles = async (query: string, page: number) => {
  const response = await axios.get<SearchArticlesResponse>(`/search`, {
    params: {
      query,
      hitsPerPage: 10,
      page: page - 1,
    },
  })
  return response.data
}

// const searchArticles2 = async (query: string) => {
//   const response = await axios.get(`/qweqwe`)
//   return response.data.hits
// }
