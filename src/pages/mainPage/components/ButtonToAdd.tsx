import { useNavigate } from "react-router-dom";
import s from "./buttonToAdd.module.css"
import type { ReactElement } from "react";

const ButtonToAdd = ():ReactElement => {
    const navigate = useNavigate();

    const Click = () =>{
        navigate("/add-new")
    }

    return(
        <button onClick={Click} className={s.button}>Add new task</button>
    )
}

export default ButtonToAdd;