import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskForm from './componentes/TaskForm/TaskForm.jsx'
import TaskList from './componentes/TaskList/TaskList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TaskList/>
  <TaskForm/>
  </React.StrictMode>,
)







