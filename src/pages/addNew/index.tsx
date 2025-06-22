import type { ReactElement } from "react";
// \|/ Кароче я не знал как назвать этот файл и я назвал его контент
import NewTaskForm from "./components/NewTaskForm";

const AddNew = (): ReactElement => {
    return(
        <div>
            <header style={{textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "20px"}}>
                Add new task
            </header>
            <NewTaskForm/>
        </div>
    )
}

export default AddNew;