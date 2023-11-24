import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskForm from './componentes/TaskForm/TaskForm.jsx'
import TaskList from './componentes/TaskList/TaskList.jsx'
import { TaskListV2 } from './componentes/TaskList/TaskListV2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < TaskListV2/>
  </React.StrictMode>,
)







