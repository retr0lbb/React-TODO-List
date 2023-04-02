import style from "./task.module.css"
import { FaTrash } from "react-icons/fa"

function Task({ task }){
    return(
        <div className={style.task}>
            <button className={style.checkContainer}>
                <div />
            </button>

            <p>{task.title}</p>

            <button className={style.deleteButton}>
                <FaTrash size={20}></FaTrash>

            </button>
        </div>
    )
}

export default Task;