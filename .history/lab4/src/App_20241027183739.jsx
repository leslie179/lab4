import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("All")
  return (
    <div>
      <h1>Daily Planner</h1>
      <TaskForm setTasks={setTasks}/>
      <button className="filter-button" onClick={() => setFilter("All")}>All</button>
      <button className="filter-button" onClick={() => setFilter("Completed")}>Completed</button>
      <button className="filter-button" onClick={() => setFilter("Pending")}>Pending</button>
      <ul>
        {tasks && tasks.filter((task) => {
          if (filter === "All") {
            return true
          } else if (filter === "Completed") {
            return task.completed
          } else if (filter === "Pending") {
            return !task.completed
          }


      <p>{remainingTasks} task{remainingTasks !== 1 ? 's' : ''} remaining</p>
          return true // not really necessary
        }).map((task, i) => {
          return <Task task={task} setTasks={setTasks} index={i} />
        })} 
      </ul>
      
    </div>
  )
}

export default App
