import { useState } from "react"

function TaskForm({ setTasks }) {
    const [currentTask, setCurrentTask] = useState()
    return <div>
        <input type="text" onChange={} placeholder="Enter task here..."/>
        <button>Save</button>
    </div>
}

export default TaskForm