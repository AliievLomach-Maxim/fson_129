import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { searchArticles } from '../../services/api'
import ArticleList from '../ArticleList/ArticleList'
import SearchForm from '../SearchForm/SearchForm'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic-light-dark.css'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)

  const handleSearch = (value: string) => {
    setSearchValue(value)
    setPage(1)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['articles', searchValue, page],
    queryFn: () => searchArticles(searchValue, page),
    placeholderData: keepPreviousData,
  })

  return (
    <div>
      <SearchForm isLoading={isLoading} handleSearch={handleSearch} />
      {data && (
        <>
          <ArticleList articles={data.hits} />
          <ResponsivePagination
            current={page}
            total={data.nbPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </>
      )}
    </div>
  )
}

export default App

// import { useQuery } from '@tanstack/react-query'
// import { fetchPerson } from '../../services/swapiService'
// import { useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['persons', counter],
//     queryFn: () => fetchPerson(counter),
//     enabled: counter > 0,
//   })

//   return (
//     <div>
//       {isLoading && <h1>Loading...</h1>}
//       {isError && <h1>Oops..</h1>}
//       <button onClick={() => setCounter(counter - 1)}>-1</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+1</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       {/* <h2>{data}</h2> */}
//     </div>
//   )
// }

// export default App
