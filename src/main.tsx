import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/globals.css'
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GamesProvider } from './context/GamesContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <GamesProvider>
          <App />
        </GamesProvider>
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
