/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from 'react'

export default function Timer() {
  const [time, setTime] = useState(new Date())
  const [counter, setCounter] = useState(0)

  // setInterval(() => {
  //   console.log(Date.now())
  //   setTime(new Date())
  // }, 1000)

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(Date.now())
  //     setTime(new Date())
  //   }, 1000)

  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('useEffect mounted')

  //   return () => {
  //     console.log('Clean FN')
  //   }
  // }, [])

  // return <p>{time.toLocaleTimeString()}</p>

  useEffect(() => {
    // console.log('counter in useEffect', counter)
    console.log('Date.now', Date.now())
    return () => {
      console.log('Unmounted', counter)
    }
  }, [counter])

  //
  console.log('Date.now', Date.now())
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click {counter}</button>
      <p>{Date.now().toString()}</p>
    </div>
  )
}
