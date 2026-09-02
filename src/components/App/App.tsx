import { useState } from 'react'
import Counter from '../Counter/Counter'
import TotalValue from '../TotalValue/TotalValue'

interface CounterState {
  a: number
  b: number
  c: number
}

const App = () => {
  const [counter, setCounter] = useState<CounterState>({ a: 0, b: 0, c: 0 })
  // const [value,sv] = useState<number>(0)
  // const handleClickA = () => {
  //   setCounter({ ...counter, a: counter.a + 1 })
  // }
  // const handleClickB = () => {
  //   setCounter({ ...counter, b: counter.b + 1 })
  // }
  // const handleClickC = () => {
  //   setCounter({ ...counter, c: counter.c + 1 })
  // }
  const handleClick = (key: keyof CounterState) => {
    setCounter({ ...counter, [key]: counter[key] + 1 })
  }

  const total = counter.a + counter.b + counter.c

  console.log('counter', counter)
  return (
    <div>
      <Counter updateFn={() => handleClick('a')} value={counter.a} />
      <hr />
      <Counter updateFn={() => handleClick('b')} value={counter.b} />
      <hr />
      <Counter updateFn={() => handleClick('c')} value={counter.c} />
      <hr />
      <h2>Total: {total}</h2>
      {/* <TotalValue obj={counter} /> */}
      {/* <button onClick={handleClick}>Counter : {counter}</button>
      <button onClick={handleClick}>Counter : {counter}</button> */}
    </div>
  )
}

export default App

// const handleClick = (customValue: number) => {
//   console.log(customValue + 2)
// }
// const button = document.querySelector('button')
// button.addEvent('click', (event)=>handleClick(1))

// import { useState } from 'react'
// // let v = true
// const App = () => {
//   const [value, setValue] = useState(true)

//   const handleClick = () => {
//     setValue(!value)
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Toggle</button>
//       <hr />
//       {value && <p>Hello!!</p>}
//     </div>
//   )
// }

// export default App

// import { useState } from 'react'

// // hook > useSomth...
// // const [value, fn] = useState() > let counterValue;
// // const [value, fn] = useState(0) > let counterValue = 0
// const App = () => {
//   const [counterValue, setCounterValue] = useState(0)
//   const handleCounter = () => {
//     // counterValue = counterValue + 1
//     setCounterValue(counterValue + 1) // counterValue = 1
//     // setCounterValue(counterValue + 1) // counterValue = 1
//     // setCounterValue(counterValue + 1) // counterValue = 1
//     console.log('counterValue', counterValue) // 0
//   }
//   console.log('counterValue', counterValue) // 0 > 1

//   return (
//     <div>
//       <button onClick={handleCounter}> Counter {counterValue}</button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   // ts..
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(event)
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click me...</button>
//       <button
//         onClick={(event) => {
//           console.log(event)
//         }}
//       >
//         Click me...
//       </button>

//       <input
//         type='text'
//         onChange={(e) => {
//           console.log('e from input', e)
//         }}
//       />
//     </div>
//   )
// }

// export default App

// // 'input'
// // const button = document.querySelector('')
// // const handleClick = (event) => {}
// // button.addEvent('click', (event) => {})
// // button.addEvent('click', handleClick)

// const someFn2 = () => {
//   const b = 2
// }

// const someFn = () => {
//   someFn2()
//   console.log(2 + b)
// }

// let user = { name: 'Alex', age: 42 }
// user = { ...user, name: 'Bob' }
// user > { name: 'Bob', age: 42 }
