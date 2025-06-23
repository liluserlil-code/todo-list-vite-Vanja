import type { ReactElement } from "react";
import Task from "./task";
import s from "./tasksList.module.css"
import type { INewTask } from "../../../components/types";

const TasksList = ({tasksArray}: {tasksArray: INewTask[];}): ReactElement => {
    return(
        // вместо использования индекса как ключа я использую id таски, чтобы это все дело не перерендеривалось
        // Fragment я не могу юзать из за стилей
        <div className={s.main}>
            {tasksArray.map((task: INewTask) =>(
                <Task key={task.id} text={task.text} status={task.status} id={task.id}/>
            ))}
        </div>
    )    
}

export default TasksList;