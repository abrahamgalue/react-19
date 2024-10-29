import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Next.js, Remix y otros...
console.log(renderToString(<App />))
