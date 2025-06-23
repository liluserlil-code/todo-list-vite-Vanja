import EditTaskForm from "./components/EditTaskForm";
import { useParams } from "react-router-dom";


const Edit = () => {
    const {stringId} = useParams<{stringId: string}>();
    const id:number = stringId ? parseInt(stringId) : 0;
    return(
        <>
            <header style={{textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "20px"}}>
                <h1>
                    Edit a task
                </h1>
            </header>
            <EditTaskForm id={id}/>
        </>
    );
}

export default Edit;