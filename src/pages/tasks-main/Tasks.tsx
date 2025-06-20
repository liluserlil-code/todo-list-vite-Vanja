import ButtonToAdd from "./components/ButtonToAdd";
import { TASKS } from "../../components/constants";
import Task from "./components/Task";

const Tasks = () => {
    const arr = localStorage.getItem(TASKS);
    const tasks = arr ? JSON.parse(arr) : [];
    // console.log(Tasks);
    // console.log(Tasks[0]);
    // console.log(typeof Tasks);
    return(
        <>
            <header>
                <h1>
                    TODO list
                </h1>
            </header>
            <ButtonToAdd/>
            <body>
                {tasks.map((task: string[], index: number) =>(
                    <Task key={index} text={task[0]} status={task[1]}/>
                ))}
            </body>
        </>
    );
}

export default Tasks;