import EditTaskForm from "./components/EditTaskForm";

const Edit = () => {
    return(
        <>
            <header style={{textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "20px"}}>
                <h1>
                    Edit a task
                </h1>
            </header>
            <EditTaskForm/>
        </>
    );
}

export default Edit;