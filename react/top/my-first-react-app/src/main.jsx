import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Saludados from './Greeting'
import TaskList from './Tasking'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList />
  </React.StrictMode>,
)
