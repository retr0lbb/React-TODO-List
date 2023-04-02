import Task from "../Task"
import style from "./tasks.module.css"

function Tasks({tasks, onComplete , onRemove}){
    const taskQuantiti = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length
    return(
        <section className={style.tasks}>
            <header className={style.header}>
                <div>
                    <p>Create Tasks</p>
                    <span>{taskQuantiti}</span>
                </div>
                <div>
                    <p className={style.textPurple}>Completed taks</p>
                    <span>{completedTasks} of {taskQuantiti}</span>
                </div>
            </header>

            <div className={style.list}>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete} onRemove={onRemove}/>
                ))}
            </div>
        </section>
    ) 
}

export default Tasks