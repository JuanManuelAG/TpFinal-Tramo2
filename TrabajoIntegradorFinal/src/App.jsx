import TaskList from './componentes/TaskList/TaskList.jsx';
import { BrowserRouter as Router,Routes,  Route, NavLink } from 'react-router-dom';

import TaskForm from './componentes/TaskForm/TaskForm.jsx';

function App() {

  

  return (
   <div>
    <TaskList/>
   </div>
    
  );
}
      export default App;