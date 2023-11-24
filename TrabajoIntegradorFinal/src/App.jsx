import TaskList from './componentes/TaskList/TaskList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from './componentes/TaskForm/TaskForm';
import { useState } from 'react';


function App() {

  const [taskList, setTaskList] = useState([]);

  
 
  
  const handleAddTask = (newTask) => {
    setTaskList([...taskList, newTask]);
    setShowTaskForm(false);
  };
  const handleDelete = (taskId) => {
    const filteredTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(filteredTasks);
  };

  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<TaskList taskList={taskList}  onDelete={handleDelete}/>} />
          <Route path="/taskForm" element={ <TaskForm addTask={handleAddTask} tasks={taskList} /> } />
        </Routes>
           
    </Router>
    
  );
}
      export default App;

