import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'

// StrictMode > App() mounting > testing > unmount > App() mounting

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
