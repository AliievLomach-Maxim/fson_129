import { useId } from 'react'

interface SearchFormProps {
  handleSearch: (query: string) => void
  isLoading: boolean
}

const SearchForm = ({ handleSearch, isLoading }: SearchFormProps) => {
  const uniqId = useId()

  const handleSubmit = (formData: FormData) => {
    const searchQuery = formData.get('search') as string
    handleSearch(searchQuery)
  }
  return (
    <form action={handleSubmit}>
      <label htmlFor={uniqId}>Search items:</label>
      <br />
      <input type='text' name='search' id={uniqId} />

      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Searching..' : 'Search'}
      </button>
    </form>
  )
}

export default SearchForm
