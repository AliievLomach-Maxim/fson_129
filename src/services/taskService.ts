import axios from 'axios'
import type { NewTaskData, Task, UpdatedTaskData } from '../types/task'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io'

export const getTasks = async (searchText?: string) => {
  const res = await axios.get<Task[]>('/tasks', { params: { search: searchText } })
  return res.data
}

export const createTasks = async (newTaskData: NewTaskData) => {
  const res = await axios.post<Task>('/tasks', newTaskData)
  return res.data
}

export const updateTask = async (updatedTaskData: UpdatedTaskData) => {
  const res = await axios.put<Task>(`/tasks/${updatedTaskData.id}`, updatedTaskData)
  return res.data
}

export const deleteTask = async (id: string) => {
  const res = await axios.delete<void>(`/tasks/${id}`)
  return res.data
}
