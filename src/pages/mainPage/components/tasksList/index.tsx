import type { ReactElement } from "react";
import Task from "./task";
import s from "./tasksList.module.css"
import type { INewTask } from "../../../../domains/task";
import { TasksService } from "../../../../services/taskService";

const TasksList = (): ReactElement => {
    const tasksArray: INewTask[] = TasksService.getTaskArrayFromLS();
    return(
        <div className={s.main}>
            {tasksArray.map((task: INewTask) =>(
                <Task key={task.id} text={task.text} status={task.status} id={task.id}/>
            ))}
        </div>
    )    
}

export default TasksList;