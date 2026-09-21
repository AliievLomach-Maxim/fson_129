import css from './TaskForm.module.css'

interface TaskFormProps {
  handleCreate: (taskText: string) => void
  isLoading: boolean
}

export default function TaskForm({ handleCreate, isLoading }: TaskFormProps) {
  const handleSubmit = (formData: FormData) => {
    // console.log(formData.get('text') as string)
    handleCreate(formData.get('text') as string)
  }

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name='text' className={css.input} rows={5}></textarea>
      </label>

      <button type='submit' className={css.button} disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}
