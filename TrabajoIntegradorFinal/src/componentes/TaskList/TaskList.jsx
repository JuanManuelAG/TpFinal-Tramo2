import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskListStyle.css'




function TaskList({ taskList, onDelete }) {
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [mostrarDivOculto, setMostrarDivOculto] = useState(null);

  const navigate = useNavigate();

  const showTaskEdit = (taskId, title, subTitle, description) => {
    // Construir un objeto de estado para pasar al componente de edición
    const taskData = {
      taskId,
      title,
      subTitle,
      description,
    };

    // Navegar al componente de edición y pasar el objeto de estado
    navigate('/taskEditItem', { state: { taskData } });
  };

  const showTaskForm = () => {
    navigate('/taskForm')
      ;
  }

  const handleMouseEnter = (taskId) => {
    setMostrarDivOculto(taskId);
  };

  const handleMouseLeave = () => {
    setMostrarDivOculto(null);
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
              <p className='textNoTareas'>No hay tareas para mostrar.</p>
              ) : (
              <div className="tasks">
                {taskList.map((task) => (
                  <div key={task.id} id={`task-item-${task.id}`} className="task-item" 
                    onMouseEnter={() => handleMouseEnter(task.id)}
                    onMouseLeave={handleMouseLeave}>
                    <div className='check-Title'>
                      <label>
                        <input type="checkbox" />
                        <span></span>
                      </label>
                    </div>
                    <span className='titleItem' onClick={() => showTaskEdit(task.id, task.titulo, task.subTitulo, task.descripcion)}>{task.titulo}</span>
                    <span hidden>{task.subTitulo}</span>
                    <span hidden>{task.descripcion}</span>
                    {mostrarDivOculto === task.id && (
                      <div id={`divOculto-${task.id}`} className='btnDelete' onClick={() => onDelete(task.id)}>
                        <label>
                          <span>
                          </span>
                        </label>
                      </div>
                      )}
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