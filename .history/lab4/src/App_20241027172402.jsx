import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <TaskForm setTasks={setTasks}/>
      {tasks && tasks.map((task) => {
        return <Task 
      })}
    </div>
  )
}

export default App
