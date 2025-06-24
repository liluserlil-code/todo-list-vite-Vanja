import ButtonToAdd from "./components/buttonToAdd";
import TasksList from "./components/tasksList";
import { Fragment, type ReactElement } from "react";
import Header from "../../shared/header"

const MainPage = (): ReactElement => {
    return(
        <Fragment>
            <Header text = {"TODO list"}/>
            <ButtonToAdd/>
            <TasksList/>
        </Fragment>
    );
}

export default MainPage;