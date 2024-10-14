import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BackgroundProvider } from './context/background.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </BrowserRouter>,
)
