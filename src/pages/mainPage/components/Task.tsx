import { useNavigate } from "react-router-dom";
import s from "./Task.module.css"
import { FOREDIT } from "../../../components/constants";

const Task = ({text, status, index}: {text: string; status: string; index: number}) =>{
    const navigate = useNavigate();

    const toEdit = () =>{
        const dataToEdit = [text, status, index];
        localStorage.setItem(FOREDIT, JSON.stringify(dataToEdit));
        navigate("/edit")
    }

    return(
        <article className={s.article}>
            <p id="task" className={s.p}>{text}</p>
            <label htmlFor="task" className={s.label}>Статус: {status}</label>
            <button onClick={toEdit} className={s.button}>Редактировать</button>
        </article>
    )
}

export default Task;