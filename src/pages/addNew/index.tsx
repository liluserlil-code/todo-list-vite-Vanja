import type { ReactElement } from "react";
import NewTaskForm from "./components/newTaskForm.tsx";

const AddNew = (): ReactElement => {
    return(
        <>
            <header style={{textAlign: "center"}}>
                Add new task
            </header>
            <NewTaskForm/>
        </>
    )
}

export default AddNew;