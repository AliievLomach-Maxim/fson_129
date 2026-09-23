import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import TaskList from '../TaskList/TaskList'
import Modal from '../Modal/Modal'
import TaskForm from '../TaskForm/TaskForm'
import { createTasks, deleteTask, updateTask } from '../../services/taskService'
import css from './App.module.css'
import type { NewTaskData, Task, UpdatedTaskData } from '../../types/task'
import SearchBox from '../SearchBox/SearchBox'
import { useToggle } from '../../hooks/general-hooks'
import { useGetTasks } from '../../hooks/api-hooks'

export default function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false)

  // const openModal = () => setIsModalOpen(true)

  // const closeModal = () => setIsModalOpen(false)

  const [isModalOpen, openModal, closeModal] = useToggle()
  // const [isShowTimer, showTimer, hideTimer] = useToggle()

  const queryClient = useQueryClient()

  const [inputValue, setInputValue] = useState('')

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('e.target.value', e.target.value)
  //   if (e.target.value.includes('!')) return
  //   setInputValue(e.target.value)
  // }

  const handleSearch = useDebouncedCallback((text: string) => {
    if (text.includes('!')) return
    setInputValue(text)
  }, 1000)

  const { data, isLoading, isFetching } = useGetTasks(inputValue)
  // const { data, isLoading, isFetching } = useQuery({
  //   queryKey: ['tasks', inputValue],
  //   queryFn: () => getTasks(inputValue),
  //   placeholderData: keepPreviousData,
  // })

  const mutation = useMutation({
    mutationFn: (newTaskData: NewTaskData) => createTasks(newTaskData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
      closeModal()
    },
  })

  const handleCreateMutation = (taskText: string) => {
    mutation.mutate({
      text: taskText,
    })
  }

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTaskData: UpdatedTaskData) => updateTask(updatedTaskData),
    onSuccess: (updatedTask) => {
      queryClient.setQueriesData<Task[]>({ queryKey: ['tasks'] }, (prevTasks) => {
        if (!prevTasks) return []
        return prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      })
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
    },
  })

  const handleDeleteMutation = (id: string) => {
    deleteTaskMutation.mutate(id)
  }

  // useEffect(() => {
  //   console.log('Fetch smth... by inputValue')
  // }, [inputValue])

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox value={inputValue} onSearch={handleSearch} />

        {inputValue && isFetching && <h2 style={{ color: 'red' }}>Searching...</h2>}

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

// 'input',()=>{}
