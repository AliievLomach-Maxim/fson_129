import type { DebouncedState } from 'use-debounce'

interface SearchBoxProps {
  value: string
  onSearch: DebouncedState<(text: string) => void>
}

const SearchBox = ({ onSearch, value }: SearchBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    onSearch(e.target.value)
  }
  return <input type='text' defaultValue={value} onChange={handleChange} placeholder='Search...' />
}

export default SearchBox
