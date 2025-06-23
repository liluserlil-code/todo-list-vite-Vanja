import { Fragment, type ReactElement } from "react";
// \|/ Кароче я не знал как назвать этот файл и я назвал его контент
import NewTaskForm from "./components/newTaskForm";
import Header from "../../components/header"

const AddNew = (): ReactElement => {
    return(
        <Fragment>
            <Header text={"Add new task"}/>
            <NewTaskForm/>
        </Fragment>
    )
}

export default AddNew;