import { useNavigate } from "react-router-dom";

const ButtonToAdd = () => {
    const navigate = useNavigate();

    const Click = () =>{
        navigate("/add-new")
    }

    return(
        <button onClick={Click}>Add new task</button>
    )
}

export default ButtonToAdd;