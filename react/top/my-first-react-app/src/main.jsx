import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Saluda from './Greeting'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Saluda />
  </React.StrictMode>,
)
