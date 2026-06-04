import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontaxt from '../public/theme/Themecontaxt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontaxt>

      <App />
    </Usercontaxt>
    
    
  </StrictMode>,
)
