import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskForm from './componentes/TaskForm/TaskForm.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TaskForm/>
    </React.StrictMode>,
)
