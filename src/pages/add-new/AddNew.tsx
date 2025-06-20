import NewTaskForm from "./components/NewTaskForm";

const AddNew = () => {
    return(
        <>
            <header style={{textAlign: "center"}}>
                <h1>
                    Add new task
                </h1>
            </header>
            <NewTaskForm/>
        </>
    )
}

export default AddNew;