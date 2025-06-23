import ButtonToAdd from "./components/buttonToAdd";
import type { INewTask } from "../../components/types";
import TasksList from "./components/tasksList";
import { Fragment, type ReactElement } from "react";
import { getTasksArrayFromLS } from "../../components/LS/getTasksArrayFromLS";
import Header from "../../components/header"

const MainPage = (): ReactElement => {
    const tasksArray: INewTask[] = getTasksArrayFromLS();

    return(
        <Fragment>
            <Header text = {"TODO list"}/>
            <ButtonToAdd/>
            <TasksList tasksArray={tasksArray}/>
        </Fragment>
    );
}

export default MainPage;