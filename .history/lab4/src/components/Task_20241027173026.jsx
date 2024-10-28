function Task({ task, setTasks, key }) {
    const remove = () => {
        setTasks((currentTasks) => {
            const tmpTasks = [...tasks]

        })
    }
    return <li><span>{task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;