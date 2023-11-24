import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskListStyle.css'




function TaskList({ taskList, onDelete }) {


  const [showAllTasks, setShowAllTasks] = useState(false);

  const navigate = useNavigate();

  const showTaskForm = () => {
    navigate('/taskForm')
      ;
  }

  const handleToggleTasks = () => {
    setShowAllTasks(!showAllTasks);
  };

  return (
    <>



      <div className='boxContainer'>
        <header>
          <img src="https://i.imgur.com/x5Kd8Rp.jpg" alt="logoTaskWit" />
          <img src="https://i.imgur.com/3ipHp2e.jpg" alt="iconoUser" />
        </header>


        <input className='search'
          type="text"
          placeholder="Search"

        />

        <div className='today-Add'>
          <img src="https://i.imgur.com/Xt8Tl3W.jpg" alt="TodayImg" />

          <span className='btnAdd'>
            <button onClick={showTaskForm}>
              <img src="https://i.imgur.com/4hay4Sa.jpg" alt="AddImg" />
            </button>
          </span>

        </div>


        <div className='boxItem'>
          <div className='Item'>
            {taskList === undefined ? (
              <p>No hay datos disponibles.</p>
            ) : taskList.length === 0 ? (
              <p>No hay tareas para mostrar.</p>
            ) : (
              <div className="tasks">
                {taskList.map((task) => (
                  <div key={task.id} className="task-item">
                    <div className='check-Title'>
                      <label>
                        <input type="checkbox" />
                        <span></span>
                      </label>
                    </div>
                    <span className='titleItem'>{task.titulo}</span>
                   <div className='btnDelete'>
                    <span>
                    <button onClick={() => onDelete(task.id)} />
                    </span>
                  </div>
                  </div>
                ))}
              </div>
            )}
          </div>
         
        </div>
      </div>

    </>
  );
};

export default TaskList 