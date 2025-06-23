import { useNavigate } from "react-router-dom";
import s from "./task.module.css"

const Task = ({text, status, id}: {text: string; status: string; id: number}) =>{

    const navigate = useNavigate();

    const toEdit = () =>{
        navigate(`/edit/${id}`)
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