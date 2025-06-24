import { useNavigate } from "react-router-dom";
import s from "./buttonToAdd.module.css"
import type { ReactElement } from "react";

const ButtonToAdd = ():ReactElement => {
    const navigate = useNavigate();

    const onClick = () =>{
        navigate("/add-new")
    }

    return(
        <button onClick={onClick} className={s.button}>Add new task</button>
    )
}

export default ButtonToAdd;