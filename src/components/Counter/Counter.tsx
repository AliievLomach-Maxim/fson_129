import { useState } from 'react'

interface CounterProps {
  value: number
  updateFn: () => void
}

const Counter = ({ updateFn, value }: CounterProps) => {
  //   const [counter, setCounter] = useState(0)
  //   const handleClick = () => {
  //     setCounter(counter + 1)
  //   }
  return <button onClick={updateFn}>Counter : {value}</button>
}

export default Counter
