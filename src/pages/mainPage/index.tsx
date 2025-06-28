import TasksList from "./components/tasksList";
import { Fragment, type ReactElement } from "react";
import Header from "../../shared/header"
import ButtonsMenu from "../../shared/buttonsMenu";

const MainPage = (): ReactElement => {
    return(
        <Fragment>
            <Header text = {"TODO list"}/>
            <ButtonsMenu/>
            <TasksList/>
        </Fragment>
    );
}

export default MainPage;