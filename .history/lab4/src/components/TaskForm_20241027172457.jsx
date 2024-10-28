import { useState } from "react"

function TaskForm({ setTasks }) {
    const [currentTask, setCurrentTask] = useState()
    return <div>
        <input type="text" onChange={(e) => setCurrentTask()} placeholder="Enter task here..."/>
        <button>Save</button>
    </div>
}

export default TaskForm