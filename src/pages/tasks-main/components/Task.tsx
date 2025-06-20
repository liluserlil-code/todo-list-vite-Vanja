import { useNavigate } from "react-router-dom";
import s from "./Task.module.css"

const Task = ({text, status}: {text: string; status: string}) =>{
    const navigate = useNavigate();

    const toEdit = () =>{
        navigate("/edit")
    }

    return(
        <article className={s.article}>
            <p id="task" className={s.p}>{text}</p>
            <label htmlFor="task" className={s.label}>Статус: {status}</label>
            {/* <select name="" id="">
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select> */}
            <button onClick={toEdit} className={s.button}>Редактировать</button>
        </article>
    )
}

export default Task;