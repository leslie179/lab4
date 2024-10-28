function Task({ task, setTasks, key }) {
    const remove = () => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] // (deep copy)
            tmpTasks.splice()
        })
    }
    return <li><span>{task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;