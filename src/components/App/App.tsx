import CatsInfo from '../CatsInfo/CatsInfo'
import catsData from '../../cats.json'

// const cat1 = {
//   id: 1,
//   name: 'Mr. Whiskerson',
//   age: 3,
//   email: 'whiskerson@catmail.com',
//   image: 'https://cataas.com/cat/says/Hello',
//   available: true,
// }

// const cat2 = {
//   id: 2,
//   name: 'Sir Pounce-a-lot',
//   age: 5,
//   email: 'pouncealot@catmail.com',
//   image: 'https://cataas.com/cat/says/Meow',
//   available: false,
// }

const App = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        {/* <CatsInfo catData={cat1} extraInfo='test' />
        <hr />
        <CatsInfo catData={cat2} /> */}
        {catsData.map((cat) => (
          <CatsInfo catData={cat} extraInfo={cat.id > 3 ? 'test' : undefined} key={cat.id} />
        ))}
        <hr />
        render
        <br />
        {/* {[
          <CatsInfo catData={cat1} extraInfo='test' />,
          <CatsInfo catData={cat1} extraInfo='test' />,
          <CatsInfo catData={cat1} extraInfo='test' />,
        ]} */}
        {/* {true}
        {false}
        {undefined}
        {null}
        {''}
        {0}
        {NaN} */}
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App

// const getName = (obj) => {
//   const user = obj.user
//   const extrainfo = obj.extrainfo

//   return `${user.name} + ${extrainfo}`
// }
// getName({ user: { name: 'Alex' }, extrainfo: 'asd' })
// getName('qwe', {})
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()
// getName()

// const getName = (props) => {
//   return props.user.name
// }
// const data = { user: { name: 'Alex' } }
// getName(data)
// const user = { name: 'Alex' }
// getName(user)

// const SomeComponent = () => {
//   return (
//     <>
//       <p></p>
//       <p></p>
//     </>
//   )
// }
