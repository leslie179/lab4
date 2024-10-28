function Task({ task, setTasks, key }) {

    const remove = () => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] // (deep copy)
            tmpTasks.splice(key, 1) // remove 1 value at this index (key == index)
            return tmpTasks
        })
    }

    const toggleCompleted = (e) => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] // (deep copy)
            tmpTasks[key].completed = e.target.checked
            return tmpTasks
        })
    }
    return <li><input type="checkbox" onChange={(e) => toggleCompleted(e)} /><span>{task.task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;