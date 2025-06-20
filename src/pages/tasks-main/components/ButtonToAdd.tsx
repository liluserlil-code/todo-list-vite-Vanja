import { useNavigate } from "react-router-dom";
import s from "./ButtonToAdd.module.css"

const ButtonToAdd = () => {
    const navigate = useNavigate();

    const Click = () =>{
        navigate("/add-new")
    }

    return(
        <button onClick={Click} className={s.button}>Add new task</button>
    )
}

export default ButtonToAdd;