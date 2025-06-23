import type { ReactElement } from "react";
import Task from "./task.tsx";
import s from "./tasksList.module.css"
import type { INewTask } from "../../../components/types";

const TasksList = ({tasksArray}: {tasksArray: INewTask[];}): ReactElement => {
    return(
        <div className={s.main}>
            {tasksArray.map((task: INewTask, index:number) =>(
                <Task key={index} text={task.text} status={task.status} id={task.id}/>
            ))}
        </div>
    )    
}

export default TasksList;