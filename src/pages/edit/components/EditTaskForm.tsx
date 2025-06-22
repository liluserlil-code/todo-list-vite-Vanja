import s from "./EditTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
//import { useState, type ReactHTMLElement } from "react";
import { FOREDIT } from "../../../components/constants";
import { TASKS } from "../../../components/constants";

//TODO store task info in object instead array
//TODO search useParams. Give edit task id in url params. Get task data by this id through LS.
const EditTaskForm = () => {
    const raw = localStorage.getItem(FOREDIT)
    const textForEdit = raw ? JSON.parse(raw) : [];
    //console.log(textForEdit[0])
    //console.log(textForEdit);

    const [text, setText] = useState(textForEdit[0]);
    const [status, setStatus] = useState('Не начата');

    const TextChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    const StatusChanged = (event: ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value)
    }

    //console.log(text);
    //console.log(select);
    //console.log(TASKS);

    const navigate = useNavigate();
    const Click = () => {

        const arr = localStorage.getItem(TASKS);
        const lastTasks = arr ? JSON.parse(arr) : [];
        const newTask = [text, status];
        if (newTask[0] !== ""){
            lastTasks[textForEdit[2]] = newTask
            localStorage.setItem(TASKS, JSON.stringify([...lastTasks]));
        } else{
            lastTasks[textForEdit[2]].removeItem
            localStorage.setItem(TASKS, JSON.stringify([...lastTasks]));
        }
        localStorage.removeItem(FOREDIT);

        navigate("/");
    }

    return(
        <form action="" className={s.form}>
            <textarea onChange={TextChanged} className={s.textarea} defaultValue={textForEdit[0]}></textarea>
            <label htmlFor="Status" className={s.label}>Статус:</label>
            <select name="" id="Status" onChange={StatusChanged} className={s.select} defaultValue={textForEdit[1]}>
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select>
            <button onClick={Click} className={s.button}>Save</button>
        </form>
    )
}

export default EditTaskForm;