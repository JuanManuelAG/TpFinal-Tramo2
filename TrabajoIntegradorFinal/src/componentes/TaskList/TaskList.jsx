import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';
import taskwit from './Images/taskwit.png';
import FotoUser  from './Images/FotoUser.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './TaskList.css'



function TaskList ({tasks, onEdit, onDelete}) {
 
  const handleTaskComplete = (taskId) => {
  const updatedTasks = tasks.map((task) =>
  task.id === taskId ? { ...task, completed: !task.completed } : task
);
setTasks(updatedTasks);
};
    const [showAllTasks, setShowAllTasks] = useState(false);
  
    const handleToggleTasks = () => {
      setShowAllTasks(!showAllTasks);
    };

    const visibleTasks = showAllTasks ? tasks : tasks.slice(0, 4);

    const handleSearch = (event) => {
      const searchText = event.target.value.toLowerCase();
      const tareasFiltradas = tasks.filter((task) => {
        return task.name.toLowerCase().includes(searchText)
      });
      setTasks (tareasFiltradas);

    }

    return(
        <div className='home' >
        
        <header>
        <img src={taskwit}  />
        <img src={FotoUser}  />
       
      
      </header>

      <input
          type="text"
          placeholder="Buscar tarea..."
          onChange={handleSearch}
        />
        
        <div className='today-add'> 
          <h2>Today</h2>
       <Router>
        <NavLink to="/taskForm" className="add-link">
           +
        </NavLink>
        </Router>
        </div>

      <div className="task-list">
        {tasks === undefined ? (
          <p>No hay datos disponibles.</p>
        ) : tasks.length === 0 ? (
          <p>No hay tareas para mostrar.</p>
        ) : (
          <div className="tasks">
            {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span>{task.name}</span>
              <button onClick={() => handleTaskComplete(task.id)}>
                {task.completed ? 'X' : null}
              </button>
              <button onClick={() => handleDelete(task.id)}>Borrar</button>
            </div>
            ))}
          </div>
          )}
      </div>
      {!showAllTasks && tasks.length > 4 && (
            <button onClick={handleToggleTasks}>See more</button>
      )}
    </div>
  );
}

export default TaskList 