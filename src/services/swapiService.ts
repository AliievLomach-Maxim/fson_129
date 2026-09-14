import axios from 'axios'
import type { Person } from './types'

export const fetchPerson = async (personId: number) => {
  const response = await axios.get<Person>(`https://swapi.info/api/people/${personId}`)
  return response.data
}
