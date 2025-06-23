import { Fragment, type ReactElement } from "react";
import EditTaskForm from "./components/editTaskForm.tsx";
import { useParams } from "react-router-dom";
import Header from "../../components/header"

const Edit = ():ReactElement => {
    const {stringId} = useParams<{stringId: string}>();
    const id:number = stringId ? parseInt(stringId) : 0;
    return(
        <Fragment>
            <Header text = {"Edit a task"}/>
            <EditTaskForm id={id}/>
        </Fragment>
    );
}

export default Edit;