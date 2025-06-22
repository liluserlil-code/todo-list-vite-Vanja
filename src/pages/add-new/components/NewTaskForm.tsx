import s from "./NewTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useState, type ReactHTMLElement } from "react";
import { TASKS } from "../../../components/constants";

const NewTaskForm = () => {
    //TODO write all types in useState
    const [text, setText] = useState('');
    const [status, setStatus] = useState('Не начата');

//TODO Task info store in this interfac
    // interface ITask {
    //     text: string;
    //     status: string;
    // };

    // type TasksList = ITask[];

    //TODO onTextChanged
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

    //TODO onClick
    const Click = () => {

        const arr = localStorage.getItem(TASKS);
        const lastTasks = arr ? JSON.parse(arr) : [];
        const newTask = [text, status];
        if (newTask[0] !== ""){
            localStorage.setItem(TASKS, JSON.stringify([...lastTasks, newTask]));
        }

        navigate("/");
    }

    //TODO handle Save in onSubmit form action
    //TODO set onSubmit button disabled, if text value is empty
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