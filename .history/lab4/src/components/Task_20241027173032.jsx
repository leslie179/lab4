function Task({ task, setTasks, key }) {
    const remove = () => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] 
            tmpTasks.splice
        })
    }
    return <li><span>{task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;