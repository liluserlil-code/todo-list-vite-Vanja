import s from "./NewTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useState, type ReactHTMLElement } from "react";
import { TASKS } from "../../../components/constants";

const NewTaskForm = () => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('Not');

    const TextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    const StatusChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
            localStorage.setItem(TASKS, JSON.stringify([...lastTasks, newTask]));
        }

        navigate("/");
    }

    return(
        <form action="" className={s.form}>
            <textarea placeholder="Add a new task..." onChange={TextChanged} className={s.textarea}></textarea>
            <label htmlFor="Status" className={s.label}>Статус:</label>
            <select name="" id="Status" onChange={StatusChanged} className={s.select}>
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select>
            <button onClick={Click} className={s.button}>Save</button>
        </form>
    )
}

export default NewTaskForm;