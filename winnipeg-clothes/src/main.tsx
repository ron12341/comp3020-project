import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NavBar from './components/navbar.tsx'
import CustomizePage from './CustomizePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomizePage />
  </StrictMode>,
)