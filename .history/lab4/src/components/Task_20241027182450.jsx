function Task({ task, setTasks, index }) {

    const remove = () => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] // (deep copy)
            tmpTasks.splice(index, 1) // remove 1 value at this index (key == index)
            return tmpTasks
        })
    }

    const toggleCompleted = (e) => {
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks] // (deep copy)
            console.log("tmpTasks", tmpTasks)
            console.log("key", index)
            console.log("e.target.checked", e.target.checked)
            tmpTasks[index].completed = e.target.checked
            return tmpTasks
        })
    }
    return <li><input type="checkbox"  onChange={(e) => toggleCompleted(e)} /><span>{task.task}</span><button onClick={() => remove()}>Remove</button></li>
}

export default Task;