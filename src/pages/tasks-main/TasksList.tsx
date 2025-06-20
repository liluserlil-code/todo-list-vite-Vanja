import ButtonToAdd from "./components/ButtonToAdd";
import { TASKS } from "../../components/constants";
import Task from "./components/Task";
import s from "./components/TasksList.module.css"

const TasksList = () => {
    const arr = localStorage.getItem(TASKS);
    const tasks = arr ? JSON.parse(arr) : [];
    // console.log(Tasks);
    // console.log(Tasks[0]);
    // console.log(typeof Tasks);
    return(
        <>
            <header className={s.header}>
                <h1>
                    TODO list
                </h1>
            </header>
            <ButtonToAdd/>
            <div className={s.main}>
                {tasks.map((task: string[], index: number) =>(
                    <Task key={index} text={task[0]} status={task[1]}/>
                ))}
            </div>
        </>
    );
}

export default TasksList;