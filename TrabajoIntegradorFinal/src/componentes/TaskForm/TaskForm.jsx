import React from 'react';
import './TaskFormStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const TaskForm = ({ tasks, addTask }) => {
    const [titulo, setTitulo] = useState('');
    const [subTitulo, setsubTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    const showTaskList = () => {
        navigate('/');

    }
    //modificacion del titulo, subtitulo, descripcion por parte del usuario
    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };
    const handleSubTituloChange = (event) => {
        setsubTitulo(event.target.value);
    };
    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    //los valores seran guardados cuando oprima el boton save
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
        const newTask = {
            id: tasks.length + 1,
            titulo,
            subTitulo,
            descripcion
        }

        addTask(newTask);
        setTitulo('');
        setsubTitulo('');
        setDescripcion('');
    };

    return (
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

                        <div className='boxForm'>
                            <form>
                                <div className='titulobotonEdit'>
                                    <div className='tituloEdit'>
                                        <span className='inputTitulo'>
                                            <textarea
                                                maxLength={50}
                                                placeholder='Titulo de ejemplo que desea poner'
                                                cols="35"
                                                rows=""
                                                value={titulo}
                                                onChange={handleTituloChange}>
                                            </textarea>
                                        </span>
                                        <span className='inputDescrip'>
                                            <textarea
                                                maxLength={68}
                                                placeholder='Escriba aqui su mini descripcion'
                                                cols="31"
                                                rows="2"
                                                value={subTitulo}
                                                onChange={handleSubTituloChange}
                                            >
                                            </textarea>
                                        </span>
                                    </div>
                                    <div className='botonEdit'>
                                        <img src="https://i.imgur.com/dXC7auz.jpg" alt="botonEdit" />
                                    </div>
                                </div>

                                <div className='boxStyleIcon-Text'>
                                    <span className='styleIcon-Text'>
                                        <img src="https://i.imgur.com/NRZbZDT.jpg" alt="IconCalendario" width={32} />
                                        <span>
                                            <p>Due Date</p>
                                        </span>
                                    </span>
                                    <input type="date" />
                                </div>

                                <div className='boxStyleIcon-Text'>
                                    <span className='styleIcon-Text'>
                                        <img src="https://i.imgur.com/3NRn3S9.jpg" alt="IconPrioridad" width={32} />
                                        <span>
                                            <p>Priority</p>
                                        </span>
                                    </span>
                                    <select id="priority">
                                        <option value="None">None</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div className='note'>
                                    <span className='noteDescript'>
                                        <img src="https://i.imgur.com/5XtfMXe.jpg" alt="IconNotes" width={32} />
                                        <span>
                                            <p>Notes</p>
                                        </span>
                                    </span>
                                    <span className='boxDescript'>
                                        <textarea
                                            placeholder='Escriba aqui su descripcion de la nota que desea poner'
                                            name="#"
                                            id="#"
                                            cols="31"
                                            rows="7"
                                            value={descripcion}
                                            onChange={handleDescripcionChange}
                                        >
                                        </textarea>
                                    </span>
                                </div>
                                <div className='boxStyleIcon-Text'>
                                    <span className='styleIcon-Text'>
                                        <img src="https://i.imgur.com/9eeAnLd.jpg" alt="IconCategory" width={32} />
                                        <span>Category</span>
                                    </span>
                                    <select id="category">
                                        <option value="None">None</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div className='buttonSave'>
                                    <button onClick={handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default TaskForm;