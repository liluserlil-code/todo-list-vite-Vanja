import ButtonToAdd from "./components/ButtonToAdd";
import { TASKS } from "../../components/constants";
import Task from "./components/Task";
import s from "./components/TasksList.module.css"
import type { INewTask } from "../../components/types";

const TasksList = () => {
    const arr = localStorage.getItem(TASKS);
    const tasks: INewTask[] = arr ? JSON.parse(arr) : [];

    return(
        <>
            <header style={{textAlign: "center"}}>TODO list</header>
            <ButtonToAdd/>
            <div className={s.main}>
                {tasks.map((task: INewTask, index: number) =>(
                    <Task key={index} text={task.text} status={task.status} index={index}/>
                ))}
            </div>
        </>
    );
}

export default TasksList;