export interface Task {
  id: string
  text: string
  completed: boolean
}

export interface NewTaskData {
  text: string
}

export interface UpdatedTaskData {
  id: string
  text?: string
  completed?: boolean
}
