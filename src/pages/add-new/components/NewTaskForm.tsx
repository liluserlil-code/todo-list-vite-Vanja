import "./NewTaskForm.css"
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
        localStorage.setItem(TASKS, JSON.stringify([...lastTasks, newTask]));

        navigate("/");
    }

    return(
        <form action="">
            <textarea placeholder="Add a new task..." onChange={TextChanged}></textarea>
            <label htmlFor="Status">Статус:</label>
            <select name="" id="Status" onChange={StatusChanged}>
                <option value="Not">Не начата</option>
                <option value="In">В процессе</option>
                <option value="Done">Завершена</option>
            </select>
            <button onClick={Click}>Save</button>
        </form>
    )
}

export default NewTaskForm;