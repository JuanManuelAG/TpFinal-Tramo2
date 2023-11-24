import './App.css'

import React, { useState } from 'react';
import TaskList from './componentes/TaskList/TaskList.jsx'


function App() {

  const [editTask, setEditTask] = useState(null); 



  const handleEditTask = (task) => {
    setEditTask(task); 
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    );
  };

  return (
    <div className="app">
      {editTask !== null && (
        <TaskForm task={editTask} setEditTask={setEditTask} />
      ) }
        <>

          <TaskList
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </>

    </div>
  );
}

export default App