import SearchForm from '../SearchForm/SearchForm'
import { useState } from 'react'
import ArticleList from '../ArticleList/ArticleList'
import { searchArticles } from '../../services/api'
import type { Article } from '../../services/types'

const App = () => {
  const [hits, setHits] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSearch = async (query: string) => {
    try {
      setError(false)
      setHits([])

      setIsLoading(true)
      const data = await searchArticles(query)
      setHits(data)
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <SearchForm handleSearch={handleSearch} isLoading={isLoading} />
      <hr />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Oops... Some error. Pls reload the page</h2>}
      {hits.length > 0 && <ArticleList articles={hits} />}
      {/* <ArticleList articles={hits} /> */}
    </div>
  )
}

export default App

// import { useId } from 'react'
// import CustomForm from '../CustomForm/CustomForm'

// const App = () => {
//   // const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
//   //   e.preventDefault()
//   //   const form = e.currentTarget
//   //   const formData = new FormData(form)

//   //   const username = formData.get('username') as string
//   //   const username2 = formData.get('username2') as string

//   //   const data = {
//   //     username,
//   //     username2,
//   //   }
//   //   console.log('data', data)
//   //   // console.log(form.elements.username.value)
//   //   // console.log(e)

//   //   form.reset()
//   // }

//   return (
//     <div>
//       <CustomForm />
//       <h2>Label for someth...</h2>
//       <CustomForm />
//       <CustomForm />
//     </div>
//   )
// }
// export default App
