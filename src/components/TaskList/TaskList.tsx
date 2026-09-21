import type { Task } from '../../types/task'
import css from './TaskList.module.css'

interface TaskListProps {
  tasks: Task[]
  handleUpdate: (task: Task) => void
  handleDelete: (id: string) => void
}

export default function TaskList({ tasks, handleUpdate, handleDelete }: TaskListProps) {
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type='checkbox'
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={() => handleUpdate(task)}
          />
          <span className={css.text}>{task.text}</span>
          <button type='button' className={css.button} onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
