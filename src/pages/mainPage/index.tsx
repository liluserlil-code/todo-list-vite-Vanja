import ButtonToAdd from "./components/ButtonToAdd";
import type { INewTask } from "../../components/types";
import TasksList from "./components/tasksList";
import type { ReactElement } from "react";
import { getTasksArrayFromLS } from "../../components/getTasksArrayFromLS";

const MainPage = (): ReactElement => {
    const tasksArray: INewTask[] = getTasksArrayFromLS();

    return(
        <div>
            <header style={{textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "20px"}}>TODO list</header>
            <ButtonToAdd/>
            <TasksList tasks={tasksArray}/>
        </div>
    );
}

export default MainPage;