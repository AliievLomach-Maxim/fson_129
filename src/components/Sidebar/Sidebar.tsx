import { createPortal } from 'react-dom'
import css from './Sidebar.module.css'
import { useEffect } from 'react'

interface SidebarProps {
  onClose: () => void
}

export default function Sidebar({ onClose }: SidebarProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      console.log(e.key)
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return createPortal(
    <div className={css.wrapper}>
      <div className={css.sidebar}>
        <button onClick={onClose}>Close</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum culpa modi?
          Quaerat repellat sit error officia dolore? Suscipit nisi aliquam voluptates accusamus
          repellat illo expedita necessitatibus laudantium animi quo?
        </p>
      </div>
    </div>,
    document.getElementById('sidebar-root') as HTMLDivElement,
  )
}
