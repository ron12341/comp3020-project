import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
<<<<<<< Updated upstream
import NavBar from './components/navbar.tsx'
import CustomizePage from './CustomizePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomizePage />
=======
import DisplayPreview from './DisplayPreview.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisplayPreview />
>>>>>>> Stashed changes
  </StrictMode>,
)
