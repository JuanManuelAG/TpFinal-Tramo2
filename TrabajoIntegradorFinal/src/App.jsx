import TaskList from './componentes/TaskList/TaskList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from './componentes/TaskForm/TaskForm';
import { TaskEditItem } from './componentes/TaskEditItem/TaskEditItem.jsx';
import { useEffect, useState } from 'react';


function App() {

  const [taskList, setTaskList] = useState([]);


  useEffect(() => {
    const storedList = localStorage.getItem('lista');
    if (storedList) {
      setTaskList(JSON.parse(storedList));
    }
  }, []);
  
  const handleAddTask = (newTask) => {
    const updatedList = [...taskList, newTask];
    setTaskList(updatedList);
    localStorage.setItem('lista', JSON.stringify(updatedList));
  };

  
  const handleDelete = (taskId) => {
    const filteredTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(filteredTasks);
    localStorage.setItem('lista', JSON.stringify(filteredTasks));
  };

  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<TaskList taskList={taskList}  onDelete={handleDelete}/>} />
          <Route path="/taskForm" element={ <TaskForm addTask={handleAddTask} tasks={taskList} /> } />
          <Route path="/taskEditItem" element={ <TaskEditItem /> } />
        </Routes>
           
    </Router>
    
  );
}
      export default App;

