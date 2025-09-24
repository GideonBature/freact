import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NavBar from './components/NavBar/NavBar.tsx'
import { SearchProvider } from './components/context/SearchContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <NavBar />
        <App />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
