import s from "./editTaskForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type ReactElement } from "react";
import type { INewTask } from "../../../../domains/task";
import { TasksService } from "../../../../services/taskService";

const EditTaskForm = ({id}: {id: number}):ReactElement => {

    const [text, setText] = useState<string>(TasksService.getTaskById(id).text);
    const [status, setStatus] = useState<string>(TasksService.getTaskById(id).status);
    const navigate = useNavigate();

    const onTextChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    const onStatusChanged = (event: ChangeEvent<HTMLSelectElement>) => {
        setStatus(event?.target.value)
    }

    const handleSubmit = () => {
        TasksService.saveTaskInLS(text, status, id);
        navigate("/");
    }

    const task: INewTask = TasksService.getTaskById(id);

    return(
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <textarea onChange={onTextChanged} className={s.textarea} defaultValue={task.text}></textarea>
            <label htmlFor="Status" className={s.label}>Статус:</label>
            <select name="" id="Status" onChange={onStatusChanged} className={s.select} defaultValue={task.status}>
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select>
            <button type="submit" disabled={text.trim() === ""} className={s.button}>Save</button>
        </form>
    )
}

export default EditTaskForm;