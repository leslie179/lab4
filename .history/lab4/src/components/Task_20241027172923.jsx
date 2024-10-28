function Task({ task, setTasks }) {
    const remove = () => {
        
    }
    return <li><span>{task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;