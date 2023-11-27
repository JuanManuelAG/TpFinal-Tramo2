import React from 'react';
import './TaskEditItemV1.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TaskEditItem = () => {
    const navigate = useNavigate();

    const showTaskList = () => {
        navigate('/');

    }

    const location = useLocation();
    const { state } = location;

    const taskData = state && state.taskData;

    return(
        <>
        <div className='boxContainer'>
                <header>
                    <img src="https://i.imgur.com/x5Kd8Rp.jpg" alt="logoTaskWit" />
                    <img src="https://i.imgur.com/3ipHp2e.jpg" alt="iconoUser" />
                </header>
                <main>
                    <section>
                    <div className='boxBotonHome'>
                    <div className='boxHome'onClick={showTaskList}>
                                <img src="https://i.imgur.com/38lMw3s.jpg" alt="flecha" height={15}/>
                                <a href="#">Home</a>
                            </div>
                    </div>
                        <div className='boxForm' key={taskData.taskId}>
                            <form >
                                <div className='titulobotonEdit'>
                                    <div className='tituloEdit'>
                                        <span className='inputTitulo'>
                                            <div className='TituloId'>
                                                <p>{taskData.title}</p>
                                            </div>
                                        </span>
                                        <span className='inputDescrip'>
                                            <div className='SubTituloId'>
                                                <p>{taskData.title}</p>
                                            </div>
                                        </span>
                                    </div>
                                    <div className='botonEdit'>
                                        <img src="https://i.imgur.com/KWKRrSd.jpg" alt="botonEdit" />
                                    </div>
                                </div>

                                <div className='note'>
                                    <span className='tituleInfo'>
                                        <span>
                                            <p>Additional Information</p>
                                        </span>
                                    </span>
                                    <span className='boxDescript'>
                                        <div className='textDescripcionAdd'>
                                            <p>{taskData.description}</p>
                                        </div>
                                    </span>
                                </div>
                                <div className='boxStyleIcon-Text'>
                                    <span className='StyleIcon-Text'>
                                        <p>Due Date</p>
                                    </span>
                                    <span className='calendariov1'>
                                        00/00/00
                                    </span>
                                </div>

                                <div className='boxStyleIcon-Text'>
                                    <span className='StyleIcon-Text'>
                                        <p>Priority</p>
                                    </span>
                                    <span className='priority-v1'>
                                        High
                                    </span>
                                </div>
                                <div className='buttonHomeBack'>
                                    <button onClick={showTaskList}>Home</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export { TaskEditItem }