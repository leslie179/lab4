import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <TaskForm setTasks={setTasks}/>
      <ul>
        {tasks && tasks.map((task, i) => {
          return <Task task={task} setTasks={setTasks} key={i} />
        })}
      </ul>
      
    </div>
  )
}

export default App
