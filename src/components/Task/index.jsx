import { BsFillCheckCircleFill } from "react-icons/bs";
import style from "./task.module.css"
import { FaTrash } from "react-icons/fa"

function Task({ task, onComplete}){

    return(
        <div className={style.task}>
            <button className={style.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div />}
            </button>

            <p className={task.isCompleted ? style.textCompleted :''}>{task.title}</p>

            <button className={style.deleteButton}>
                <FaTrash size={20}></FaTrash>

            </button>
        </div>
    )
}

export default Task;