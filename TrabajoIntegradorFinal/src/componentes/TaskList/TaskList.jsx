import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import TaskForm from '../TaskForm/TaskForm';




function TaskList({ }) {

  const [taskList, setTaskList] = useState([]);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);



  const handleAddTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const handleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };


  const handleTaskComplete = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };
  const handleDelete = (taskId) => {
    const filteredTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(filteredTasks);
  };

  const handleToggleTasks = () => {
    setShowAllTasks(!showAllTasks);
  };

  return (
    <div className='home'>
     


      <input
        type="text"
        placeholder="Search"

      />

      <div className='today-add'>
        <h2>Today</h2>
        <Router>
          <NavLink className="add-link" onClick={handleTaskForm}>
            +
          </NavLink>
        </Router>
      </div>

      <div className="task-list">

        {taskList === undefined ? (
          <p>No hay datos disponibles.</p>
        ) : taskList.length === 0 ? (
          <p>No hay tareas para mostrar.</p>
        ) : (
          <div className="tasks">
            {taskList.map((task) => (
              <div key={task.id} className="task-item">
               
               <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleTaskComplete(task.id)}
        />
                <span>{task.titulo}</span>
                <button onClick={() => handleDelete(task.id)}>Borrar</button>
              </div>
            ))}
          </div>


        )}
      </div>
      
      {!showAllTasks && taskList.length > 4 && (
        <button onClick={handleToggleTasks}>See more</button>
      )}
      {showTaskForm && (
        <TaskForm addTask={handleAddTask} tasks={taskList} />)}

    </div>

  );
};

export default TaskList 