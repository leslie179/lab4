import { useState } from "react"

function TaskForm({ setTasks }) {
    const [currentTask, setCurrentTask] = useState()
    const save = () => {
        setTasks((currentTasks) => { // trick to get current state
            const tmpTasks = [...currentTasks] // deep copy (tmpTasks is just a copy of currentTas)
            tmpTasks.push(currentTask)
            return tmpTasks
        })
    }
    return <div>
        <input type="text" onChange={(e) => setCurrentTask(e.target.value)} placeholder="Enter task here..."/>
        <button >Save</button>
    </div>
}

export default TaskForm