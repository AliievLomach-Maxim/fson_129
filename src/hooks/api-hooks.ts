import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getTasks } from '../services/taskService'

export const useGetTasks = (searchText?: string) => {
  return useQuery({
    queryKey: ['tasks', searchText],
    queryFn: () => getTasks(searchText),
    placeholderData: keepPreviousData,
  })
}
