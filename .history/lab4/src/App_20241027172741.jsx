import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <TaskForm setTasks={setTasks}/>
      <ul></ul>
      {tasks && tasks.map((task) => {
        return <Task task={task} />
      })}
    </div>
  )
}

export default App
