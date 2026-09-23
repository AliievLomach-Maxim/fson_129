import { useState } from 'react'

export const useToggle = (): [boolean, () => void, () => void] => {
  const [toggleState, setToggleState] = useState(false)

  const open = () => setToggleState(true)

  const close = () => setToggleState(false)

  return [toggleState, open, close]
}
