import { Fragment, type ReactElement } from "react";
import NewTaskForm from "./components/newTaskForm";
import Header from "../../shared/header"

const AddNew = (): ReactElement => {
    return(
        <Fragment>
            <Header text={"Add new task"}/>
            <NewTaskForm/>
        </Fragment>
    )
}

export default AddNew;