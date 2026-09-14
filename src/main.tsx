import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// StrictMode > App() mounting > testing > unmount > App() mounting

const queryClient = new QueryClient()

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
