function Task({ task, setTasks, key }) {
    const remove = () => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] // (deep copy)
            tmpTasks.splice(key, 1) // remove 
        })
    }
    return <li><span>{task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;