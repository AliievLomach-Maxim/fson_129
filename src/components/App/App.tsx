import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const App = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false)

  const showSidebar = () => setIsShowSidebar(true)
  const hideSidebar = () => setIsShowSidebar(false)

  return (
    <div>
      <h1>My super site</h1>
      <button onClick={showSidebar}>open</button>
      {isShowSidebar && <Sidebar onClose={hideSidebar} />}
    </div>
  )
}

export default App

// import { useState } from 'react'
// import Timer from '../Timer/Timer'

// const App = () => {
//   const [isShow, setIsShow] = useState(false)
//   return (
//     <div>
//       <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
//       {isShow && <Timer />}
//     </div>
//   )
// }

// export default App
// import { useEffect, useState } from 'react'
// import { searchArticles } from '../../services/api'

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const [articles, setArticles] = useState([])

//   // setCounter(counter + 1)
//   //

//   useEffect(() => {
//     // console.log('useEffect')
//     // searchArticles('css').then((res) => setArticles(res))
//     async function fetchData() {
//       // You can await here
//       const response = await searchArticles('css')
//       setArticles(response)
//       // ...
//     }
//     fetchData()
//   }, [])
//   // if(firstRender === true){callback()}else{return}

//   // if(prevcounter !== counter){callback()}else{return}
//   // useEffect(() => {
//   //   console.log('counter', counter)
//   // }, [counter])

//   // console.log('render App')

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>{counter}</button>
//       <pre>{JSON.stringify(articles, null, 2)}</pre>
//     </div>
//   )
// }

// export default App

// // App() > setCounter(counter + 1) > re-render (App()) > setCounter(counter + 1)> re-render...
