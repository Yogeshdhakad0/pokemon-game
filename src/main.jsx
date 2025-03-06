import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Pokeprovider } from './components/context/Pokecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Pokeprovider>
  <App />
  </Pokeprovider>
  </StrictMode>,
)
