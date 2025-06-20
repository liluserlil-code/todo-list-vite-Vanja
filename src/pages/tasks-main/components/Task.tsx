
const Task = ({text, status}: {text: string; status: string}) =>{
    return(
        <>
        <p>{text}</p>
        <p>{status}</p>
        </>
    )
}

export default Task;