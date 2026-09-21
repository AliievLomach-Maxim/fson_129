import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import TaskList from '../TaskList/TaskList'
import Modal from '../Modal/Modal'
import TaskForm from '../TaskForm/TaskForm'
import { createTasks, deleteTask, getTasks, updateTask } from '../../services/taskService'
import css from './App.module.css'
import type { NewTaskData, Task, UpdatedTaskData } from '../../types/task'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  const closeModal = () => setIsModalOpen(false)

  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  const mutation = useMutation({
    mutationFn: (newTaskData: NewTaskData) => createTasks(newTaskData),
    onSuccess: () => {
      // console.log('onSuccess')
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
      closeModal()
    },
    onError: () => {
      // toast.error()
    },
  })

  const handleCreateMutation = (taskText: string) => {
    mutation.mutate({
      text: taskText,
    })
  }

  // const [counter, setCounter] = useState(0)
  // setCounter(counter + 1)

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTaskData: UpdatedTaskData) => updateTask(updatedTaskData),
    onSuccess: (updatedTask) => {
      // queryClient.invalidateQueries({
      //   queryKey: ['tasks'],
      // })
      // toast.success('Updated')

      queryClient.setQueriesData<Task[]>({ queryKey: ['tasks'] }, (prevTasks) => {
        if (!prevTasks) return []
        return prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      })
    },
    onError: () => {
      // toast.error()
    },
  })

  const handleUpdateMutation = (updateTask: Task) => {
    updateTaskMutation.mutate({
      id: updateTask.id,
      completed: !updateTask.completed,
    })
  }

  const deleteTaskMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
      // toast.success('Deleted...')
    },
    onError: () => {
      // toast.error()
    },
  })

  const handleDeleteMutation = (id: string) => {
    deleteTaskMutation.mutate(id)
  }

  return (
    <div className={css.container}>
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && (
        <TaskList
          tasks={data}
          handleUpdate={handleUpdateMutation}
          handleDelete={handleDeleteMutation}
        />
      )}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm handleCreate={handleCreateMutation} isLoading={mutation.isPending} />
        </Modal>
      )}
    </div>
  )
}
