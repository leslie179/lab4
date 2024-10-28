import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("All")
  return (
    <div>
      <TaskForm setTasks={setTasks}/>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Pending")}>Pending</button>
      <ul>
        {tasks && tasks.map((task, i) => {
          return <Task task={task} setTasks={setTasks} key={i} />
        })}
      </ul>
      
    </div>
  )
}

export default App
