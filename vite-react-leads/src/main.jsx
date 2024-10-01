import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const leads = [
  {name: "Astor Gomes", email: "astor@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Bruno Girald", email: "bruno@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Carlos Simpa", email: "carlos@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Eduardo Ricardo", email: "eduardo@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Fernando Gimenes", email: "fernando@email.com", numPhone: "+55 11 98765-4321"},
  {name: "Nicolas Lima", email: "nicoas@email.com", numPhone: "+55 11 98765-4321"}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App leads={leads}/>
  </StrictMode>,
)
